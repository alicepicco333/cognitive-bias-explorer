/* Cognitive Bias Ontology explorer
   Reads window.CBO_DATA (built by build_data.py from the OWL files and GitBook pages), and
   CBO_CQ, CBO_WALK, CBO_QUIZ (build_cq.py, build_walk.py, build_quiz.py).
   Views: #/ overview, #/questions, #/compare/<a>/<b>, #/quiz, #/search/<q>, #/patterns reuse matrix,
   #/bias/<id>[/<individual or cq-n>] one ontology, #/about. */
(function () {
  "use strict";
  const D = window.CBO_DATA;
  const CQ = window.CBO_CQ;
  const WALK = window.CBO_WALK;
  const QUIZ = window.CBO_QUIZ;
  const main = document.getElementById("main");
  const tip = document.getElementById("tooltip");
  const byId = Object.fromEntries(D.biases.map((b) => [b.id, b]));
  const odpById = Object.fromEntries(D.odps.map((o) => [o.id, o]));
  const GB = D.generatedFrom.gitbook;
  const OXIGRAPH = "https://cdn.jsdelivr.net/npm/oxigraph@0.5.11/web.js";

  // ---------- helpers ---------------------------------------------------
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const prefixOf = (curie) => (curie.includes(":") ? curie.split(":")[0] : null);
  const kindOf = (curie) => { const p = prefixOf(curie); return p && D.prefixes[p] ? D.prefixes[p].kind : "local"; };
  const sourceOf = (curie) => { const p = prefixOf(curie); return p && D.prefixes[p] ? D.prefixes[p].source : "created by the team"; };
  const plural = (n, one, many) => `${n} ${n === 1 ? one : many || one + "s"}`;
  const clusterName = (b) => (b.cluster != null ? D.clusters[b.cluster].name : "");
  const EVIDENCE = { overview: "GitBook overview list", page: "bias page on GitBook", annotation: "OWL hasComponent annotation", axioms: "OWL axioms", story: "story individuals" };
  const localName = (iri) => iri.split(/[#/]/).pop();
  const pretty = (s) => s.replace(/_/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2");
  const shuffle = (a) => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
  const pad = (n) => String(n).padStart(2, "0");

  function storyOdps(b) { return Object.keys(b.odps).filter((k) => b.odps[k].includes("story")); }
  function docOnlyOdps(b) {
    return Object.keys(b.odps).filter((k) => !b.odps[k].includes("story") &&
      b.odps[k].some((e) => e === "overview" || e === "page" || e === "annotation"));
  }
  function storyProps(b) { return [...new Set(b.instances.edges.map((e) => e.label))]; }

  function showTip(html, x, y) {
    tip.innerHTML = html; tip.hidden = false;
    const r = tip.getBoundingClientRect();
    let left = x + 14, top = y + 14;
    if (left + r.width > window.innerWidth - 8) left = x - r.width - 14;
    if (top + r.height > window.innerHeight - 8) top = y - r.height - 14;
    tip.style.left = Math.max(8, left) + "px"; tip.style.top = Math.max(8, top) + "px";
  }
  function hideTip() { tip.hidden = true; }
  function tipFor(elm, htmlFn) {
    elm.addEventListener("mousemove", (ev) => showTip(htmlFn(), ev.clientX, ev.clientY));
    elm.addEventListener("mouseleave", hideTip);
    elm.addEventListener("focus", () => { const r = elm.getBoundingClientRect(); showTip(htmlFn(), r.right, r.top); });
    elm.addEventListener("blur", hideTip);
  }

  // ---------- credits ---------------------------------------------------
  document.getElementById("credits").innerHTML = `
    <p>The Cognitive Bias Ontologies project was made by ${D.team.map(esc).join(", ").replace(/, ([^,]*)$/, " and $1")}
    for the Knowledge Representation and Extraction course taught by Professor Aldo Gangemi (University of Bologna, 2022/23),
    as the group's part of the class-wide collective bias ontology.</p>
    <p>Documentation: <a href="${GB}">the project GitBook</a>. Ontology files:
    <a href="${D.generatedFrom.repository}">GitHub repository</a> (a fork of
    <a href="${D.generatedFrom.upstream}">corrado877/CognitiveBiasOntologies</a>).
    This explorer only re-reads those files and pages; it adds no classes, properties or relations. The competency-question
    queries marked “fixed” or “new” were written for the explorer, and the story walkthrough links were made by reading each story against its graph.</p>
    <p>Set in Archivo and JetBrains Mono (SIL Open Font Licence). Diagrams laid out with the Eclipse Layout Kernel (elkjs).
    SPARQL runs in your browser with Oxigraph.</p>`;

  // ---------- router ----------------------------------------------------
  const TITLES = { overview: "", questions: "Tested questions", compare: "Compare", quiz: "Which bias is this?", search: "Search", patterns: "Reuse matrix", about: "About" };
  function route() {
    hideTip();
    const h = location.hash.replace(/^#\/?/, "");
    const [view, a1, a2] = h.split("/").map((x) => (x == null ? x : decodeURIComponent(x)));
    let nav = "overview", title = "";
    if (view === "patterns") { nav = "patterns"; renderPatterns(); }
    else if (view === "about") { nav = "about"; renderAbout(); }
    else if (view === "questions") { nav = "questions"; renderQuestions(); }
    else if (view === "compare") { nav = "compare"; renderCompare(byId[a1] ? a1 : "gamblers-fallacy", byId[a2] ? a2 : "hot-hand-fallacy"); }
    else if (view === "quiz") { nav = "quiz"; renderQuiz(); }
    else if (view === "search") { nav = "search"; renderSearch(a1 || ""); }
    else if (view === "bias" && byId[a1]) { nav = null; title = byId[a1].name; renderBias(byId[a1], a2); }
    else renderOverview();
    pageHeading(nav);
    document.querySelectorAll("[data-nav]").forEach((a) => {
      if (a.dataset.nav === nav) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    title = title || (nav && TITLES[nav]) || "";
    document.title = (title ? title + " · " : "") + "Cognitive Bias Ontology";
    document.body.dataset.view = nav || "bias";
    if (route.started) { window.scrollTo({ top: 0, behavior: "instant" }); main.focus({ preventScroll: true }); }
    route.started = true;
  }
  window.addEventListener("hashchange", route);
  // every view has one h1: the bias pages show theirs; the others get a hidden one naming the view
  function pageHeading(nav) {
    if (main.querySelector("h1")) return;
    main.insertAdjacentHTML("afterbegin", `<h1 class="sr">${nav && TITLES[nav] ? TITLES[nav] + ": " : ""}Cognitive Bias Ontology</h1>`);
  }
  // change the address without re-rendering (the search box)
  function setHash(h) { history.replaceState(null, "", h); }

  // ---------- overview --------------------------------------------------
  function renderOverview() {
    const odpUse = {};
    D.biases.forEach((b) => storyOdps(b).forEach((o) => { (odpUse[o] = odpUse[o] || []).push(b.id); }));
    const odpOrder = Object.keys(odpUse).sort((a, b) => odpUse[b].length - odpUse[a].length || odpById[a].name.localeCompare(odpById[b].name));
    const totalAssertions = D.biases.reduce((s, b) => s + b.instances.edges.length, 0);
    const S = CQ.summary;

    main.innerHTML = `
      <section class="band"><div class="grid">
        <div class="label-col"><p class="kicker">00 / Project</p></div>
        <div class="body-col">
          <p class="lede">Sixteen cognitive biases, each modelled as its own OWL ontology with the eXtreme Design method:
          a user story, competency questions, reused ontology design patterns and alignment with Framester frames.
          Every ontology instantiates its user story as a small graph of individuals. This explorer draws those graphs
          straight from the OWL files, and runs the competency questions against them.</p>
          <ul class="doors">
            <li><a href="#/bias/${D.biases[0].id}/walk">Walk through a story</a><span>sentence by sentence, as the graph fills in</span></li>
            <li><a href="#/compare/gamblers-fallacy/hot-hand-fallacy">Compare two biases</a><span>what two models share</span></li>
            <li><a href="#/quiz">Which bias is this?</a><span>a short quiz on the stories</span></li>
          </ul>
        </div>
        <div class="full">
          <div class="stats">
            <div class="stat"><b>16</b><span>ontologies, one per bias</span></div>
            <div class="stat"><b>${D.merged.classes}</b><span>classes in the merged module</span></div>
            <div class="stat"><b>${D.merged.objectProperties}</b><span>object properties</span></div>
            <div class="stat"><b>${totalAssertions}</b><span>assertions in 16 user stories</span></div>
          </div>
        </div>
      </div></section>

      <section class="band" aria-labelledby="h-clusters"><div class="grid">
        <div class="label-col"><h2 class="kicker" id="h-clusters">01 / The 16 ontologies</h2>
          <p class="small muted" style="margin-top:8px">${odpOrder.length} content design patterns are reused inside the story graphs. Pick one to see which stories are built on it.</p></div>
        <div class="body-col">
          <div class="filter" role="group" aria-label="Highlight ontologies that use a design pattern">
            <button class="chip" type="button" data-odp="" aria-pressed="true">All</button>
            ${odpOrder.map((o) => `<button class="chip" type="button" data-odp="${o}" aria-pressed="false">${esc(odpById[o].name)}<span class="n">${odpUse[o].length}</span></button>`).join("")}
          </div>
          <p class="muted" id="filter-status" aria-live="polite"></p>
        </div>
        <div class="full">
          ${D.clusters.map((c, ci) => `
            <div class="cluster">
              <div class="cluster-head"><p class="kicker">Cluster 0${ci + 1} / ${pad(c.members.length)} biases</p><h3>${esc(c.name)}</h3></div>
              <div class="tiles">${c.members.map((id) => tile(byId[id])).join("")}</div>
            </div>`).join("")}
        </div>
      </div></section>

      <section class="band" aria-labelledby="h-tested"><div class="grid">
        <div class="label-col"><p class="kicker" id="h-tested">02 / Tested</p>
          <p class="small muted" style="margin-top:8px">Every competency question, run as a SPARQL query against its OWL file.</p></div>
        <div class="body-col">
          <h2 style="margin-bottom:12px">Does each ontology answer its own questions?</h2>
          <p class="lede" style="font-size:19px">The group wrote ${S.total} competency questions and SPARQL for ${S.documented} of them. Run as written,
          ${S.documented_answer} of those ${S.documented} return an answer. With the queries fixed and the missing ones written,
          ${S.answered} questions are answered by the files, ${S.partial} only in part, and ${S.unanswerable} not at all.</p>
          <p><a class="go" href="#/questions">See every question and its query →</a></p>
        </div>
        <div class="full">
          <div class="stats">
            <div class="stat"><b>${S.total}</b><span>competency questions</span></div>
            <div class="stat"><b>${S.answered}</b><span>answered by the files</span></div>
            <div class="stat"><b>${S.partial}</b><span>answered in part</span></div>
            <div class="stat"><b>${S.unanswerable}</b><span>not in the files</span></div>
          </div>
        </div>
      </div></section>

      <section class="band inv" aria-labelledby="h-shared"><div class="grid">
        <div class="label-col"><p class="kicker" id="h-shared">03 / Shared vocabulary</p>
          <p class="small muted" style="margin-top:8px">The group reused the same properties across biases on purpose, to keep the modules interchangeable.</p></div>
        <div class="body-col">
          <h2 style="margin-bottom:16px">Properties asserted in more than one user story</h2>
          <div class="bars" id="bars"></div>
          <p class="axis-note">Bar length: number of bias ontologies (of 16) whose story individuals use the property. The name before the colon is the pattern or vocabulary it comes from; no prefix means the group created it.</p>
        </div>
      </div></section>`;

    // bars
    const use = {};
    D.biases.forEach((b) => storyProps(b).forEach((p) => { (use[p] = use[p] || []).push(b.name); }));
    const rows = Object.entries(use).filter(([, v]) => v.length > 1).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
    const bars = document.getElementById("bars");
    rows.forEach(([p, names]) => {
      const lab = document.createElement("div");
      lab.className = "bl";
      lab.innerHTML = `${esc(p)}<small>${esc(sourceOf(p))}</small>`;
      const track = document.createElement("div");
      track.className = "track"; track.tabIndex = 0;
      track.setAttribute("aria-label", `${p}: used in ${names.length} of 16 ontologies: ${names.join(", ")}`);
      track.innerHTML = `<div class="bar" style="width:${(names.length / 16) * 100}%"></div><span class="val">${names.length}</span>`;
      tipFor(track, () => `<b>${esc(p)} · ${names.length} of 16</b>${esc(names.join(", "))}`);
      bars.append(lab, track);
    });

    // filter
    const status = document.getElementById("filter-status");
    main.querySelectorAll(".chip").forEach((btn) => btn.addEventListener("click", () => {
      main.querySelectorAll(".chip").forEach((x) => x.setAttribute("aria-pressed", String(x === btn)));
      const o = btn.dataset.odp;
      main.querySelectorAll(".tile").forEach((t) => {
        const has = !o || t.dataset.odps.split(" ").includes(o);
        t.classList.toggle("dim", !has);
        t.classList.toggle("hit", !!o && has);
      });
      status.textContent = o ? `${odpById[o].name}: used in ${odpUse[o].length} of 16 story graphs.` : "";
    }));
  }

  function tile(b) {
    const so = storyOdps(b);
    const n = pad(D.biases.indexOf(b) + 1);
    return `<a class="tile" href="#/bias/${b.id}" data-odps="${so.join(" ")}">
      <div class="idx"><span>${n} / 16</span><span>${esc(b.owlFormat)}</span></div>
      <h4>${esc(b.name)}</h4>
      <div class="who">${esc(b.creator.join(", "))}</div>
      <div class="story">${b.userStoryTitle ? "“" + esc(b.userStoryTitle) + "”" : ""}</div>
      <div class="uses"><b>Patterns</b> ${so.length ? so.map((o) => esc(odpById[o].name)).join(", ") : "none in the story"}<br>
        <b>Frames</b> ${esc(b.framesterInStory.join(" ") || "none")}</div>
      <div class="count">${plural(b.instances.nodes.length, "individual")} · ${plural(b.instances.edges.length, "assertion")}</div>
    </a>`;
  }

  // ---------- competency questions: status, queries, running them -------
  const STATUS = { answered: "Answered", partial: "Answered in part", unanswerable: "Not in the file" };
  const ORIGIN = { original: "The group's query", fixed: "Group's query, fixed", new: "Query written for the explorer", none: "No query possible" };

  let oxi = null;               // the Oxigraph module, once loaded
  const stores = {};            // bias id -> Store
  async function engine() {
    if (!oxi) { const m = await import(OXIGRAPH); await m.default(); oxi = m; }
    return oxi;
  }
  async function storeFor(id) {
    if (stores[id]) return stores[id];
    const m = await engine();
    const text = await (await fetch(`data/rdf/${id}.nt`)).text();
    const s = new m.Store();
    s.load(text, { format: "application/n-triples" });
    return (stores[id] = s);
  }
  // results in the same shape build_cq.py stores: {vars, rows:[[{value,label,literal}]]}
  async function runLive(id, query) {
    const s = await storeFor(id);
    const out = s.query(query);
    const vars = (query.match(/SELECT\s+([\s\S]*?)\s+WHERE/i) || ["", ""])[1].match(/\?\w+/g).map((v) => v.slice(1));
    const rows = out.map((m) => vars.map((v) => {
      const t = m.get(v);
      if (!t) return null;
      return t.termType === "Literal" ? { value: t.value, literal: true } : { value: t.value, label: pretty(localName(t.value)) };
    }));
    return { ok: true, vars, rows };
  }
  function resultTable(r) {
    if (!r.ok) return `<p class="note">The query does not run: <code>${esc(r.error)}</code></p>`;
    if (!r.rows.length) return `<p class="note">The query runs, but returns nothing.</p>`;
    return `<table class="res"><thead><tr>${r.vars.map((v) => `<th scope="col">?${esc(v)}</th>`).join("")}</tr></thead>
      <tbody>${r.rows.map((row) => `<tr>${row.map((c) => `<td>${c ? (c.literal ? `“${esc(c.value)}”` : esc(c.label || pretty(localName(c.value)))) : "–"}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  }
  function cqItem(it, i) {
    const q = it.query;
    return `<li id="cq-${i + 1}">
      <div>
        <div class="q">${esc(it.question)}</div>
        ${it.answer ? `<div class="a">Documented answer: ${esc(it.answer)}</div>` : ""}
        <p class="cq-tags"><span class="tag s-${it.status}">${STATUS[it.status]}</span><span class="tag o">${ORIGIN[it.origin]}</span></p>
        ${it.note ? `<p class="cq-note">${esc(it.note)}</p>` : ""}
        ${q ? `<div class="cq-run"><button class="more run" type="button" data-i="${i}">Run the query</button><span class="run-status" role="status"></span></div>
          <div class="cq-result" id="cq-res-${i}" hidden></div>
          <details class="sparql"><summary>${it.origin === "original" ? "SPARQL query" : "SPARQL query (explorer)"}</summary><pre><code>${esc(q)}</code></pre></details>` : ""}
        ${it.original && it.origin !== "original" ? `<details class="sparql orig"><summary>The GitBook query</summary><pre><code>${esc(it.original.query)}</code></pre>
          <div class="orig-res">${resultTable(it.original.result)}</div></details>` : ""}
      </div></li>`;
  }

  // ---------- questions view -------------------------------------------
  function renderQuestions() {
    const S = CQ.summary;
    const ran0 = S.documented_run - S.documented_answer, broken = S.documented - S.documented_run;
    main.innerHTML = `
      <section class="band"><div class="grid">
        <div class="label-col"><p class="kicker">04 / Tested questions</p></div>
        <div class="body-col">
          <h2 style="margin-bottom:12px">Does each ontology answer its own questions?</h2>
          <p class="lede" style="font-size:19px">In eXtreme Design, competency questions are the test suite: an ontology is done when SPARQL
          queries can answer them from its data. Here every question is run against its OWL file.</p>
          <p>The GitBook gives SPARQL for ${S.documented} of the ${S.total} questions. Run as written, with only the missing PREFIX
          declarations added, ${S.documented_answer} return an answer, ${ran0} run but return nothing, and ${broken} do not parse.
          The fixed versions keep the group's intent and change only what stopped them from working; the original stays visible
          next to each fix. For the other ${S.total - S.documented} questions, queries were written for this explorer.</p>
        </div>
        <div class="full">
          <div class="stats">
            <div class="stat"><b>${S.answered}</b><span>answered by the files</span></div>
            <div class="stat"><b>${S.partial}</b><span>answered in part</span></div>
            <div class="stat"><b>${S.unanswerable}</b><span>not in the files</span></div>
            <div class="stat"><b>${S.documented_answer}/${S.documented}</b><span>GitBook queries that work as written</span></div>
          </div>
        </div>
      </div></section>
      <section class="band"><div class="grid">
        <div class="full">
          <div class="filter" role="group" aria-label="Show questions by result">
            ${[["", "All " + S.total], ["answered", "Answered " + S.answered], ["partial", "In part " + S.partial], ["unanswerable", "Not in the file " + S.unanswerable], ["fixed", "Fixed queries " + S.fixed]]
              .map(([k, l], i) => `<button class="chip" type="button" data-k="${k}" aria-pressed="${i === 0}">${l}</button>`).join("")}
          </div>
          <div class="qtable-wrap"><table class="tri qtable">
            <caption class="sr">All competency questions, their result and where the query comes from</caption>
            <thead><tr><th scope="col">Bias</th><th scope="col">Question</th><th scope="col">Result</th><th scope="col">Query</th></tr></thead>
            <tbody>${D.biases.map((b) => CQ.biases[b.id].map((it, i) => `<tr data-s="${it.status}" data-o="${it.origin}">
              <td><a href="#/bias/${b.id}/cq-${i + 1}">${esc(b.name)}</a> <span class="t">CQ${i + 1}</span></td>
              <td>${esc(it.question)}${it.note ? `<span class="t">${esc(it.note)}</span>` : ""}</td>
              <td><span class="tag s-${it.status}">${STATUS[it.status]}</span></td>
              <td class="o">${ORIGIN[it.origin]}</td></tr>`).join("")).join("")}</tbody>
          </table></div>
          <p class="note" style="margin-top:16px">No reasoner is involved: the queries see only the triples asserted in each file, as the group's own queries assumed.
          The query definitions are in <code>cq_queries.py</code> in the repository.</p>
        </div>
      </div></section>`;
    main.querySelectorAll(".chip").forEach((btn) => btn.addEventListener("click", () => {
      main.querySelectorAll(".chip").forEach((x) => x.setAttribute("aria-pressed", String(x === btn)));
      const k = btn.dataset.k;
      main.querySelectorAll(".qtable tbody tr").forEach((tr) => { tr.hidden = !!k && tr.dataset.s !== k && tr.dataset.o !== k; });
    }));
  }

  // ---------- reuse matrix ----------------------------------------------
  function renderPatterns() {
    const odpCount = (o, what) => D.biases.filter((b) => (what === "story" ? storyOdps(b) : docOnlyOdps(b)).includes(o)).length;
    const odpCols = D.odps.map((o) => o.id).filter((o) => odpCount(o, "story") + odpCount(o, "doc") > 0)
      .sort((a, b) => odpCount(b, "story") - odpCount(a, "story") || odpCount(b, "doc") - odpCount(a, "doc"));
    const pageToCurie = (name) => {
      const all = new Set(D.biases.flatMap((b) => b.framesterInStory));
      const hit = [...all].find((c) => c.split(":")[1].toLowerCase() === name.toLowerCase());
      return hit || (/\.n\.\d/.test(name) ? "fsyn:" + name : "fs:" + name[0].toUpperCase() + name.slice(1));
    };
    const fsState = (b, c) => b.framesterInStory.includes(c) ? "story" : b.framesOnPage.map(pageToCurie).includes(c) ? "doc"
      : b.framesterInOwl.includes(c) ? "file" : null;
    const fsAll = [...new Set(D.biases.flatMap((b) => b.framesterInStory.concat(b.framesOnPage.map(pageToCurie))))];
    const fsCount = (c, s) => D.biases.filter((b) => fsState(b, c) === s).length;
    const fsCols = fsAll.sort((a, b) => fsCount(b, "story") - fsCount(a, "story") || fsCount(b, "doc") - fsCount(a, "doc") || a.localeCompare(b));

    const odpCell = (b, o) => {
      const ev = b.odps[o] || [];
      const s = ev.includes("story") ? "story" : docOnlyOdps(b).includes(o) ? "doc" : ev.includes("axioms") ? "file" : "";
      const text = s === "story" ? "used in story" : s === "doc" ? "documented only" : s === "file" ? "only in the file's shared axioms" : "not used";
      return `<td class="cell ${s}" data-b="${b.id}" data-c="${o}" data-t="odp"><span class="m"></span><span class="sr">${text}</span></td>`;
    };
    const fsCell = (b, c) => {
      const s = fsState(b, c) || "";
      const text = s === "story" ? "used in story" : s === "doc" ? "named on the page only" : s === "file" ? "only in the file's shared axioms" : "not used";
      return `<td class="cell ${s}" data-b="${b.id}" data-c="${esc(c)}" data-t="fs"><span class="m"></span><span class="sr">${text}</span></td>`;
    };
    const rowTotal = (b) => storyOdps(b).length + b.framesterInStory.length;

    main.innerHTML = `
      <section class="band"><div class="grid">
        <div class="label-col"><p class="kicker">08 / Reuse matrix</p></div>
        <div class="body-col">
          <h2 style="margin-bottom:12px">What each ontology borrows</h2>
          <p class="lede" style="font-size:18px">Rows are the 16 bias ontologies, grouped by cluster. Columns are the content ontology design patterns and
          Framester frames they reuse. A filled square means the pattern or frame is used by the individuals that model the user story.
          An outlined square means the group lists it in the documentation or annotations, but the story graph never uses it.
          A hatched square means it only turns up in the shared domain and range axioms the file carries from the collective vocabulary.</p>
          <div class="legend">
            <span class="key"><span class="sw story" aria-hidden="true"></span>Used in the story graph</span>
            <span class="key"><span class="sw doc" aria-hidden="true"></span>Documented only</span>
            <span class="key"><span class="sw file" aria-hidden="true"></span>Only in the file's shared axioms</span>
          </div>
        </div>
        <div class="full matrix-wrap" tabindex="0" role="region" aria-label="Reuse matrix, scrolls sideways">
          <table class="matrix">
            <caption class="sr">Design patterns and Framester frames reused by each bias ontology</caption>
            <thead>
              <tr><td></td><th class="group" colspan="${odpCols.length}" scope="colgroup">Content design patterns</th><td class="gap"></td>
                  <th class="group" colspan="${fsCols.length}" scope="colgroup">Framester frames and synsets</th><td class="gap"></td><td></td></tr>
              <tr><th scope="col"><span class="sr">Bias ontology</span></th>${odpCols.map((o) => `<th scope="col"><span class="vh">${esc(odpById[o].name)}</span></th>`).join("")}<td class="gap"></td>
                  ${fsCols.map((c) => `<th scope="col" class="fs"><span class="vh">${esc(c)}</span></th>`).join("")}<td class="gap"></td>
                  <th scope="col" class="tot"><span class="vh">Total used</span></th></tr>
            </thead>
            <tbody>
              ${D.clusters.map((c, ci) => `
                <tr class="cluster-row"><th colspan="${odpCols.length + fsCols.length + 4}" scope="rowgroup">Cluster ${ci + 1}: ${esc(c.name)}</th></tr>
                ${c.members.map((id) => { const b = byId[id]; return `<tr>
                  <th class="row" scope="row"><a href="#/bias/${b.id}">${esc(b.name)}</a></th>
                  ${odpCols.map((o) => odpCell(b, o)).join("")}<td class="gap"></td>
                  ${fsCols.map((f) => fsCell(b, f)).join("")}<td class="gap"></td>
                  <td class="tot">${rowTotal(b)}</td></tr>`; }).join("")}`).join("")}
              <tr class="sum"><th class="row" scope="row">Used in stories</th>
                ${odpCols.map((o) => `<td class="tot">${odpCount(o, "story")}</td>`).join("")}<td class="gap"></td>
                ${fsCols.map((f) => `<td class="tot">${fsCount(f, "story")}</td>`).join("")}<td class="gap"></td><td></td></tr>
            </tbody>
          </table>
        </div>
        <div class="full" style="margin-top:24px">
          <p class="note">Sources per cell: the GitBook “Ontologies Developed” list, each bias page, the <code>hasComponent</code> annotations in the OWL file,
          and the terms the story individuals actually use (their classes and the properties asserted between them). Totals count only filled squares:
          the hatched ones come from domain and range axioms that repeat the same collective vocabulary in every file. Hover a cell for its sources.</p>
        </div>
      </div></section>`;

    main.querySelectorAll("td.cell").forEach((td) => {
      td.addEventListener("mousemove", (ev) => {
        const b = byId[td.dataset.b], c = td.dataset.c;
        let body;
        if (td.dataset.t === "odp") {
          const ev2 = b.odps[c] || [];
          body = ev2.length ? "Found in: " + ev2.map((e) => EVIDENCE[e]).join(", ") : "Not used";
          body = `<b>${esc(b.name)} × ${esc(odpById[c].name)}</b>${esc(body)}`;
        } else {
          const s = fsState(b, c);
          body = `<b>${esc(b.name)} × ${esc(c)}</b>${s === "story" ? "A story individual is typed with this frame" : s === "doc" ? "Named on the bias page, not used by the story individuals" : s === "file" ? "Only in the file's shared domain and range axioms" : "Not used"}`;
        }
        showTip(body, ev.clientX, ev.clientY);
      });
      td.addEventListener("mouseleave", hideTip);
    });
  }

  // ---------- bias view -------------------------------------------------
  let diagramMode = "individuals";   // individuals | classes | story

  function renderBias(b, target) {
    const idx = D.biases.indexOf(b);
    const prev = D.biases[(idx + D.biases.length - 1) % D.biases.length];
    const next = D.biases[(idx + 1) % D.biases.length];
    const so = storyOdps(b), doc = docOnlyOdps(b);
    const cqs = CQ.biases[b.id];
    const nAns = cqs.filter((q) => q.status === "answered").length;
    if (target === "walk") diagramMode = "story";

    main.innerHTML = `
      <section class="bias-head"><div class="grid">
        <div class="label-col">
          <p class="kicker">${pad(idx + 1)} / 16 · Cluster 0${b.cluster + 1}</p>
          <p class="small muted" style="margin-top:4px">${esc(clusterName(b))}</p>
        </div>
        <div class="body-col">
          <h1 class="display">${esc(b.name)}</h1>
          <p class="bias-meta">Modelled by ${esc(b.creator.join(", "))} ·
            ${plural(b.instances.nodes.length, "individual")}, ${plural(b.instances.edges.length, "assertion")} ·
            <a href="${b.owlUrl}">OWL file</a> · <a href="${b.gitbookUrl}">GitBook page</a> · <a href="#/compare/${b.id}/${next.id}">Compare</a></p>
          <p class="bias-def">${esc(b.definition)}</p>
          <p class="small muted">Definition from the ontology's <code>rdfs:comment</code>. The group drafted definitions and scenarios with ChatGPT (sometimes Gemini) as the domain expert, as their documentation explains.</p>
          <nav class="pager" aria-label="Other biases">
            <a href="#/bias/${prev.id}" aria-label="Previous: ${esc(prev.name)}">← ${esc(prev.name)}</a>
            <label class="sr" for="jump">Go to bias</label>
            <select id="jump">${D.biases.map((x) => `<option value="${x.id}" ${x === b ? "selected" : ""}>${esc(x.name)}</option>`).join("")}</select>
            <a href="#/bias/${next.id}" aria-label="Next: ${esc(next.name)}">${esc(next.name)} →</a>
          </nav>
        </div>
      </div></section>

      <section class="bias-body"><div class="grid">
        <div class="diagram-col">
          <div class="diagram-frame">
          <div class="diagram-bar">
            <h2 class="kicker" id="dg-title">The user story as a graph</h2>
            <div class="toggle" role="group" aria-label="Diagram level">
              <button type="button" data-mode="individuals" aria-pressed="${diagramMode === "individuals"}">Individuals</button>
              <button type="button" data-mode="classes" aria-pressed="${diagramMode === "classes"}">Classes</button>
              <button type="button" data-mode="story" aria-pressed="${diagramMode === "story"}">Story walk</button>
            </div>
          </div>
          <figure class="diagram">
            <div class="walk" id="walk" hidden></div>
            <div class="diagram-scroll" id="dg" tabindex="-1"></div>
            <figcaption id="dg-cap"></figcaption>
          </figure>
          </div>
          <div class="kinds" role="list" aria-label="How a box shows where its class comes from">
            <span class="k" role="listitem">${miniNode("local")}Team class</span>
            <span class="k" role="listitem">${miniNode("framester")}Framester (solid)</span>
            <span class="k" role="listitem">${miniNode("odp")}Design pattern (hatched)</span>
            <span class="k" role="listitem">${miniNode("external")}DBpedia · FOAF · CCO (dashed)</span>
          </div>
        </div>

        <aside class="aside-col" aria-label="User story and competency questions">
          ${b.scenario ? `<div class="aside-block"><h2>Chosen scenario</h2><p class="small">${esc(b.scenario)}</p></div>` : ""}
          <div class="aside-block">
            <h2>User story</h2>
            ${b.userStoryTitle ? `<p class="story-title">${esc(b.userStoryTitle)}</p>` : ""}
            <div class="story ${b.userStory.join(" ").length > 900 ? "clamped" : ""}" id="story">${b.userStory.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
            ${b.userStory.join(" ").length > 900 ? `<button class="more" id="story-more" type="button" aria-controls="story" aria-expanded="false">Read the whole story</button>` : ""}
          </div>
          <div class="aside-block">
            <h2>Competency questions</h2>
            <p class="small" style="margin-bottom:8px">${plural(cqs.length, "question")}: ${nAns} answered by the file${cqs.length - nAns ? `, ${cqs.length - nAns} not fully` : ""}.
              Run a query to see its answer, marked on the graph. <a href="#/questions">All questions</a></p>
            <ol class="cqs">${cqs.map((it, i) => cqItem(it, i)).join("")}</ol>
          </div>
        </aside>

        <div class="below">
          <div class="triples">
            <h2>Every assertion, as a table</h2>
            <table class="tri">
              <thead><tr><th scope="col">Subject</th><th scope="col">Property</th><th scope="col">Object</th></tr></thead>
              <tbody>${triples(b)}</tbody>
            </table>
            ${b.instances.dataAssertions.length ? `<p class="note" style="margin-top:12px">Data values: ${b.instances.dataAssertions.map((d) => `${esc(d.subject)} ${esc(d.property)} “${esc(d.value)}”`).join("; ")}.</p>` : ""}
          </div>
          <div class="reuse">
            <h2>Reused</h2>
            <dl class="reuse-list">
              <dt>Design patterns used in the story</dt><dd>${so.length ? so.map((o) => `<a href="${odpById[o].wiki}">${esc(odpById[o].name)}</a>`).join(", ") : "None"}</dd>
              ${doc.length ? `<dt>Documented, not used in the story</dt><dd>${doc.map((o) => esc(odpById[o].name)).join(", ")}</dd>` : ""}
              <dt>Framester frames and synsets typing the individuals</dt><dd class="mono">${esc(b.framesterInStory.join(", ") || "None")}</dd>
              <dt>Framester frames named on the GitBook page</dt><dd class="mono">${esc(b.framesOnPage.join(", ") || "None")}</dd>
              <dt>Other vocabularies in the file</dt><dd class="mono">${esc(b.externalInOwl.join(", ") || "None")}</dd>
              <dt>The OWL file</dt><dd>${b.owlFormat}, ${plural(b.stats.declaredClasses, "declared class", "declared classes")}, ${plural(b.stats.objectProperties, "object property", "object properties")}</dd>
            </dl>
          </div>
        </div>
      </div></section>`;

    main.querySelector("#jump").addEventListener("change", (e) => { location.hash = "#/bias/" + e.target.value; });
    const more = main.querySelector("#story-more");
    if (more) more.addEventListener("click", () => {
      const st = main.querySelector("#story");
      const open = st.classList.toggle("clamped") === false;
      more.setAttribute("aria-expanded", String(open));
      more.textContent = open ? "Show less" : "Read the whole story";
    });
    const setMode = (m) => {
      diagramMode = m;
      main.querySelectorAll(".toggle button").forEach((x) => x.setAttribute("aria-pressed", String(x.dataset.mode === m)));
      return drawBias(b);
    };
    main.querySelectorAll(".toggle button").forEach((btn) => btn.addEventListener("click", () => setMode(btn.dataset.mode)));

    // run a competency question: live in the browser, or the build's result if the engine cannot load
    main.querySelectorAll("button.run").forEach((btn) => btn.addEventListener("click", async () => {
      const i = +btn.dataset.i, it = cqs[i];
      const box = main.querySelector(`#cq-res-${i}`), st = btn.nextElementSibling;
      btn.disabled = true; st.textContent = oxi ? "Running…" : "Loading the SPARQL engine…";
      let r, live = true;
      try { r = await runLive(b.id, it.query); }
      catch (e) { r = it.result; live = false; }
      btn.disabled = false;
      st.textContent = r.ok ? `${plural(r.rows.length, "result")}${live ? "" : " (computed when the site was built)"}` : "Error";
      box.hidden = false;
      box.innerHTML = resultTable(r);
      // mark the answer on the graph
      const hits = new Set(r.ok ? r.rows.flat().filter((c) => c && !c.literal).map((c) => c.value) : []);
      if (diagramMode !== "individuals") await setMode("individuals");
      highlight(hits, i + 1);
    }));

    drawBias(b).then(() => {
      if (!target || target === "walk") return;
      if (target.startsWith("cq-")) {
        const li = main.querySelector("#" + CSS.escape(target));
        if (li) { li.scrollIntoView({ block: "center" }); li.classList.add("flash"); }
      } else {
        highlight(new Set([target]));
        const n = main.querySelector(`.node[data-id="${CSS.escape(target)}"]`);
        if (n) n.scrollIntoView({ block: "center" });
      }
    });
  }

  // mark the given individuals on the current diagram
  function highlight(ids, cqNumber) {
    const svg = main.querySelector("#dg svg");
    if (!svg) return;
    svg.querySelectorAll(".node").forEach((n) => n.classList.toggle("answer", ids.has(n.dataset.id)));
    svg.classList.toggle("answering", ids.size > 0);
    const cap = main.querySelector("#dg-cap");
    const n = [...svg.querySelectorAll(".node.answer")].length;
    if (cap && cqNumber) cap.textContent = n ? `Marked: the ${plural(n, "individual")} returned by CQ${cqNumber}. Hover any box to see its links.` : `CQ${cqNumber} returns values that are not individuals in the graph.`;
  }

  async function drawBias(b) {
    const walk = main.querySelector("#walk");
    const mode = diagramMode === "story" ? "individuals" : diagramMode;
    await drawDiagram(b, { mode, host: main.querySelector("#dg"), cap: main.querySelector("#dg-cap"), title: main.querySelector("#dg-title") });
    walk.hidden = diagramMode !== "story";
    if (diagramMode === "story") storyWalk(b, walk);
    else walk.innerHTML = "";
  }

  // ---------- story walkthrough ------------------------------------------
  function storyWalk(b, box) {
    const W = WALK[b.id];
    const svg = main.querySelector("#dg svg");
    if (!svg) return;
    main.querySelector("#dg-title").textContent = "The story, sentence by sentence";
    let step = 0;
    const draw = () => {
      const s = W.steps[step];
      const seen = new Set(W.steps.slice(0, step + 1).flatMap((x) => x.nodes));
      const now = new Set(s.nodes);
      svg.classList.add("walking");
      svg.querySelectorAll(".node").forEach((n) => {
        n.classList.toggle("ghost", !seen.has(n.dataset.id));
        n.classList.toggle("now", now.has(n.dataset.id));
      });
      svg.querySelectorAll(".edge").forEach((e) => {
        const both = seen.has(e.dataset.s) && seen.has(e.dataset.t);
        e.classList.toggle("ghost", !both);
      });
      const names = s.nodes.map((id) => pretty(localName(id)));
      box.innerHTML = `
        <div class="walk-bar">
          <button type="button" class="walk-btn" data-d="-1" ${step === 0 ? "disabled" : ""} aria-label="Previous sentence">←</button>
          <p class="walk-count" aria-live="polite">Sentence ${step + 1} of ${W.steps.length}</p>
          <button type="button" class="walk-btn" data-d="1" ${step === W.steps.length - 1 ? "disabled" : ""} aria-label="Next sentence">→</button>
        </div>
        <blockquote class="walk-text">${esc(s.text)}</blockquote>
        <p class="walk-nodes">${names.length ? `In the graph: <span class="mono">${names.map(esc).join(" · ")}</span>` : "No individual stands for this sentence."}</p>
        ${step === W.steps.length - 1 ? `<p class="note walk-end">${W.coverage[0]} of ${W.coverage[1]} individuals are described by the story.${W.note ? " " + esc(W.note) : ""}</p>` : ""}`;
      box.querySelectorAll(".walk-btn").forEach((btn) => btn.addEventListener("click", () => {
        step = Math.max(0, Math.min(W.steps.length - 1, step + +btn.dataset.d));
        draw();
        const again = box.querySelector(`.walk-btn[data-d="${btn.dataset.d}"]`);
        (again && !again.disabled ? again : box.querySelector(".walk-btn:not([disabled])")).focus();
      }));
    };
    box.onkeydown = (e) => {
      if (e.key === "ArrowRight" && step < W.steps.length - 1) { step++; draw(); box.querySelector('.walk-btn[data-d="1"]')?.focus(); }
      if (e.key === "ArrowLeft" && step > 0) { step--; draw(); box.querySelector('.walk-btn[data-d="-1"]')?.focus(); }
    };
    main.querySelector("#dg-cap").textContent = "Faint boxes are individuals the story has not reached yet; boxes with a heavy outline and a shadow are the ones the current sentence describes. The links between sentences and individuals were made by hand, by reading each story against its graph.";
    draw();
  }

  function triples(b) {
    const n = Object.fromEntries(b.instances.nodes.map((x) => [x.id, x]));
    const cell = (x) => `${esc(x.label)}<span class="t">${esc(x.types.join(", ") || x.curie)}</span>`;
    return b.instances.edges.map((e) => `<tr><td>${cell(n[e.source])}</td><td class="p">${esc(e.label)}</td><td>${cell(n[e.target])}</td></tr>`).join("");
  }

  // graph for one of the two levels, in a neutral {nodes, edges} shape
  function graphFor(b, mode) {
    const inst = b.instances;
    if (mode === "individuals") {
      const connected = new Set(inst.edges.flatMap((e) => [e.source, e.target]));
      const data = {};
      inst.dataAssertions.forEach((d) => { (data[d.subject] = data[d.subject] || []).push(`${d.property.split(":").pop()}: ${d.value}`); });
      const nodes = inst.nodes.filter((x) => connected.has(x.id)).map((x) => {
        const cls = x.types.length ? x.types : [x.curie];
        return { id: x.id, lines: [x.label, cls.join(", ")].concat(data[x.label] ? [data[x.label].join(", ")] : []),
          kind: kindOf(cls[0]), aria: `${x.label}, ${x.types.length ? "instance of " + x.types.join(" and ") : x.curie}` };
      });
      const edges = inst.edges.map((e, i) => ({ id: "e" + i, source: e.source, target: e.target, label: e.label, sub: false }));
      return { nodes, edges };
    }
    // classes: type(a) --p--> type(b) for every assertion, plus rdfs:subClassOf among them
    // keep the most specific asserted type: drop a type that is a superclass of another one
    const lab = Object.fromEntries(b.schema.nodes.map((x) => [x.id, x.label]));
    const supers = {};
    b.schema.edges.filter((e) => e.type === "subclass").forEach((e) => { (supers[lab[e.source]] = supers[lab[e.source]] || []).push(lab[e.target]); });
    const ancestors = (c, seen = new Set()) => { (supers[c] || []).forEach((p) => { if (!seen.has(p)) { seen.add(p); ancestors(p, seen); } }); return seen; };
    const specific = (ts) => ts.filter((t) => !ts.some((o) => o !== t && ancestors(o).has(t)));
    const typesOf = Object.fromEntries(inst.nodes.map((x) => [x.id, x.types.length ? specific(x.types) : [x.curie]]));
    const classes = new Set(), edgeKeys = new Map();
    inst.edges.forEach((e) => typesOf[e.source].forEach((s) => typesOf[e.target].forEach((t) => {
      classes.add(s); classes.add(t);
      const k = s + "|" + e.label + "|" + t;
      if (!edgeKeys.has(k)) edgeKeys.set(k, { source: s, target: t, label: e.label, sub: false });
    })));
    const schemaLabel = Object.fromEntries(b.schema.nodes.map((x) => [x.id, x.label]));
    b.schema.edges.filter((e) => e.type === "subclass").forEach((e) => {
      const s = schemaLabel[e.source], t = schemaLabel[e.target];
      if (classes.has(s)) {
        classes.add(t);
        edgeKeys.set(s + "|sub|" + t, { source: s, target: t, label: "subClassOf", sub: true });
      }
    });
    const nodes = [...classes].map((c) => ({ id: c, lines: [c.includes(":") ? c.split(":")[1] : c, c.includes(":") ? `${prefixOf(c)} · ${sourceOf(c)}` : "team · bias-specific"], kind: kindOf(c), aria: `${c}, ${sourceOf(c)}` }));
    const edges = [...edgeKeys.values()].map((e, i) => Object.assign({ id: "c" + i }, e));
    return { nodes, edges };
  }

  // ---------- diagram: ELK layered layout, rendered as inline SVG ------
  const measureCtx = document.createElement("canvas").getContext("2d");
  function textWidth(s, weight, size, mono) {
    measureCtx.font = mono ? `${weight} ${size}px "JetBrains Mono", Consolas, monospace` : `${weight} ${size}px Archivo, Arial, sans-serif`;
    return measureCtx.measureText(s).width;
  }
  const STRIP = 12;   // hatched band that marks a design-pattern class
  function miniNode(kind) {
    const hatch = kind === "odp" ? `<defs><pattern id="mk-h" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)"><rect class="hatch-bg" width="5" height="5"/><line class="hatch-ln" x1="0" y1="0" x2="0" y2="5"/></pattern></defs>` : "";
    return `<svg width="34" height="20" viewBox="0 0 34 20" aria-hidden="true" focusable="false">${hatch}<g class="node k-${kind}">
      <rect class="bg" x="1.25" y="1.25" width="31.5" height="17.5"/>${kind === "odp" ? `<rect x="2.5" y="2.5" width="8" height="15" fill="url(#mk-h)"/><line class="strip-edge" x1="11" y1="1.25" x2="11" y2="18.75"/>` : ""}</g></svg>`;
  }
  const drawTokens = new WeakMap();
  let svgSeq = 0;

  // opts: {mode, host, cap, title, caption, shared: {nodes:Set, edges:Set}}
  async function drawDiagram(b, opts) {
    const { mode, host, cap, title } = opts;
    if (!host) return;
    const token = (drawTokens.get(host) || 0) + 1;
    drawTokens.set(host, token);
    const g = graphFor(b, mode);
    if (title) title.textContent = mode === "individuals" ? "The user story as a graph" : "Classes the story uses";
    if (cap) cap.textContent = opts.caption || (mode === "individuals"
      ? `Each box is an individual from the OWL file (its name, then its class); each arrow is an object-property assertion between two individuals. ${plural(g.nodes.length, "individual")}, ${plural(g.edges.length, "assertion")}.`
      : `Derived from the same assertions: an arrow from class A to class B means the story links an A to a B with that property. Dashed arrows with a hollow head are rdfs:subClassOf axioms from the file.`);
    if (!window.ELK) { host.innerHTML = `<p class="note">The layout library could not load, so the diagram is missing. The table below lists every assertion.</p>`; return; }
    try { await Promise.all([document.fonts.load("650 14px Archivo"), document.fonts.load('400 11.5px "JetBrains Mono"')]); } catch (e) { /* fonts API not available */ }

    const avail = host.clientWidth - 32;
    const LINE = [18, 16, 16];
    const children = () => g.nodes.map((n) => {
      const w = Math.max(...n.lines.map((l, i) => textWidth(l, i === 0 ? 650 : 400, i === 0 ? 14 : 11.5, i > 0)));
      return { id: n.id, width: Math.ceil(w) + 26 + (n.kind === "odp" ? STRIP : 0), height: 12 + n.lines.reduce((s, _, i) => s + LINE[i], 0) + 4 };
    });
    const elkGraph = (dir) => ({
      id: "root",
      layoutOptions: {
        "elk.algorithm": "layered",
        "elk.direction": dir,
        "elk.edgeRouting": "ORTHOGONAL",
        "elk.layered.spacing.nodeNodeBetweenLayers": dir === "DOWN" ? "48" : "64",
        "elk.spacing.nodeNode": "24",
        "elk.spacing.edgeNode": "16",
        "elk.spacing.edgeEdge": "12",
        "elk.spacing.edgeLabel": "4",
        "elk.layered.spacing.edgeNodeBetweenLayers": "14",
        "elk.layered.nodePlacement.strategy": "NETWORK_SIMPLEX",
        "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
        "elk.padding": "[top=8,left=8,bottom=8,right=8]",
      },
      children: children(),
      edges: g.edges.map((e) => ({ id: e.id, sources: [e.source], targets: [e.target],
        labels: [{ text: e.label, width: Math.ceil(textWidth(e.label, 400, 11, true)) + 10, height: 16 }] })),
    });
    const elk = new window.ELK();
    let res;
    try {
      // lay out both ways and keep the one that needs the least shrinking
      const [r1, r2] = await Promise.all([elk.layout(elkGraph("RIGHT")), elk.layout(elkGraph("DOWN"))]);
      const fit = (r) => Math.min(1, avail / r.width);
      res = fit(r2) > fit(r1) + 0.05 ? r2 : r1;
    } catch (err) { host.innerHTML = `<p class="note">Layout failed: ${esc(err.message)}</p>`; return; }
    if (drawTokens.get(host) !== token) return;

    const W = Math.ceil(res.width), H = Math.ceil(res.height);
    const nodeById = Object.fromEntries(g.nodes.map((n) => [n.id, n]));
    const edgeById = Object.fromEntries(g.edges.map((e) => [e.id, e]));
    const shared = opts.shared || { nodes: new Set(), edges: new Set() };
    const svgId = "s" + ++svgSeq;
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-labelledby="${svgId}-t">
      <title id="${svgId}-t">${esc(b.name)}: ${mode === "individuals" ? "user-story individuals and the object properties between them" : "classes used by the user story"}</title>
      <defs>
        <pattern id="${svgId}-hatch" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)"><rect class="hatch-bg" width="5" height="5"/><line class="hatch-ln" x1="0" y1="0" x2="0" y2="5"/></pattern>
        <marker id="${svgId}-a" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="arrow" d="M0,1 L10,5 L0,9 z"/></marker>
        <marker id="${svgId}-h" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path class="arrow hollow" d="M1,1 L11,6 L1,11 z"/></marker>
      </defs><g class="edges">`;
    (res.edges || []).forEach((e) => {
      const meta = edgeById[e.id];
      const d = (e.sections || []).map((sec) => {
        const pts = [sec.startPoint].concat(sec.bendPoints || [], [sec.endPoint]);
        return "M" + pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" L");
      }).join(" ");
      s += `<g class="edge ${meta.sub ? "sub" : ""} ${shared.edges.has(meta.label) ? "shared" : ""}" data-s="${esc(meta.source)}" data-t="${esc(meta.target)}">
        <path d="${d}" marker-end="url(#${svgId}-${meta.sub ? "h" : "a"})"/>`;
      (e.labels || []).forEach((l) => {
        s += `<g class="lbl"><rect x="${l.x.toFixed(1)}" y="${l.y.toFixed(1)}" width="${l.width}" height="${l.height}"/>
          <text x="${(l.x + l.width / 2).toFixed(1)}" y="${(l.y + 12).toFixed(1)}" text-anchor="middle">${esc(l.text)}</text></g>`;
      });
      s += `</g>`;
    });
    s += `</g><g class="nodes">`;
    (res.children || []).forEach((c) => {
      const n = nodeById[c.id];
      const outs = g.edges.filter((e) => e.source === c.id).map((e) => `${e.label} ${(nodeById[e.target] || {}).lines ? nodeById[e.target].lines[0] : ""}`);
      const aria = n.aria + (shared.nodes.has(c.id) ? ", shared with the other bias" : "") + (outs.length ? ". Links: " + outs.join("; ") : "");
      const x0 = n.kind === "odp" ? STRIP + 13 : 13;
      s += `<g class="node k-${n.kind} ${shared.nodes.has(c.id) ? "shared" : ""}" tabindex="0" data-id="${esc(c.id)}" transform="translate(${c.x.toFixed(1)},${c.y.toFixed(1)})" role="img" aria-label="${esc(aria)}">
        <rect class="bg" x="1.25" y="1.25" width="${c.width - 2.5}" height="${c.height - 2.5}"/>`;
      if (n.kind === "odp") s += `<rect x="2.5" y="2.5" width="${STRIP}" height="${c.height - 5}" fill="url(#${svgId}-hatch)"/><line class="strip-edge" x1="${STRIP + 3}" y1="1.25" x2="${STRIP + 3}" y2="${c.height - 1.25}"/>`;
      if (shared.nodes.has(c.id)) s += `<rect class="shared-mark" x="${c.width - 12}" y="-4" width="10" height="10"/>`;
      let y = 8;
      n.lines.forEach((l, i) => { y += LINE[i]; s += `<text class="n${i + 1}" x="${x0}" y="${y - 4}">${esc(l)}</text>`; });
      s += `</g>`;
    });
    s += `</g></svg>`;
    host.innerHTML = s;

    // fit or scroll: never shrink labels below ~80% of their size
    const svg = host.querySelector("svg");
    host.parentNode.querySelectorAll(".scroll-hint").forEach((x) => x.remove());
    if (W * 0.75 > avail) {
      svg.style.maxWidth = "none"; svg.style.margin = "0";
      svg.setAttribute("width", Math.round(W * 0.9)); svg.setAttribute("height", Math.round(H * 0.9));
      host.setAttribute("tabindex", "0"); host.setAttribute("aria-label", "Diagram, scrolls sideways");
      host.insertAdjacentHTML("beforebegin", `<p class="scroll-hint">Scroll sideways to see the whole graph, or read the table below.</p>`);
      host.scrollLeft = Math.max(0, (host.scrollWidth - host.clientWidth) / 2);
    }
    else host.setAttribute("tabindex", "-1");

    // highlight a node's neighbourhood on hover / focus
    const on = (id) => {
      svg.classList.add("focusing");
      svg.querySelectorAll(".edge").forEach((e) => {
        const hit = e.dataset.s === id || e.dataset.t === id;
        e.classList.toggle("on", hit);
        if (hit) { svg.querySelector(`.node[data-id="${CSS.escape(e.dataset.s)}"]`).classList.add("on"); svg.querySelector(`.node[data-id="${CSS.escape(e.dataset.t)}"]`).classList.add("on"); }
      });
      svg.querySelector(`.node[data-id="${CSS.escape(id)}"]`).classList.add("on", "inv-on");
    };
    const off = () => { svg.classList.remove("focusing"); svg.querySelectorAll(".on, .inv-on").forEach((x) => x.classList.remove("on", "inv-on")); };
    svg.querySelectorAll(".node").forEach((nd) => {
      nd.addEventListener("mouseenter", () => on(nd.dataset.id));
      nd.addEventListener("mouseleave", off);
      nd.addEventListener("focus", () => on(nd.dataset.id));
      nd.addEventListener("blur", off);
    });
    return svg;
  }

  let resizeTimer, lastW = window.innerWidth;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (Math.abs(window.innerWidth - lastW) <= 80) return;
      lastW = window.innerWidth;
      const m = location.hash.match(/^#\/bias\/([^/]+)/);
      if (m && byId[m[1]]) drawBias(byId[m[1]]);
      if (/^#\/compare/.test(location.hash)) route();
    }, 200);
  });

  // ---------- compare ---------------------------------------------------
  function termsOf(b) {
    return {
      classes: new Set(graphFor(b, "classes").nodes.map((n) => n.id)),
      props: new Set(storyProps(b)),
      patterns: new Set(storyOdps(b).map((o) => odpById[o].name)),
      frames: new Set(b.framesterInStory),
    };
  }
  function renderCompare(a, c) {
    const A = byId[a], B = byId[c];
    const ta = termsOf(A), tb = termsOf(B);
    const both = (k) => [...ta[k]].filter((x) => tb[k].has(x)).sort();
    const only = (x, y, k) => [...x[k]].filter((v) => !y[k].has(v)).sort();
    const KINDS = [["classes", "Classes"], ["props", "Properties"], ["patterns", "Design patterns"], ["frames", "Framester frames"]];
    const shareN = KINDS.reduce((s, [k]) => s + both(k).length, 0);
    const list = (xs) => (xs.length ? `<span class="mono">${xs.map(esc).join(" · ")}</span>` : `<span class="muted">none</span>`);
    const picker = (id, sel) => `<select id="${id}">${D.biases.map((x) => `<option value="${x.id}" ${x.id === sel ? "selected" : ""}>${esc(x.name)}</option>`).join("")}</select>`;
    const mirror = [a, c].sort().join() === "gamblers-fallacy,hot-hand-fallacy";

    main.innerHTML = `
      <section class="band"><div class="grid">
        <div class="label-col"><p class="kicker">05 / Compare</p></div>
        <div class="body-col">
          <h2 style="margin-bottom:12px">Two biases, side by side</h2>
          <p class="lede" style="font-size:19px">Pick any two ontologies to see how differently, or alike, they were modelled. Classes and properties
          the two share are marked in both graphs.${mirror ? " Gambler's fallacy and the hot-hand fallacy are mirror images: one expects a streak to end, the other expects it to continue." : ""}</p>
          <div class="pager compare-pick">
            <label class="sr" for="pa">First bias</label>${picker("pa", a)}
            <button type="button" class="swap" aria-label="Swap the two biases">⇄ Swap</button>
            <label class="sr" for="pb">Second bias</label>${picker("pb", c)}
          </div>
        </div>
      </div></section>
      <section class="band"><div class="grid">
        <div class="full">
          <h2 class="kicker" style="margin-bottom:14px">${shareN ? `They share ${plural(shareN, "term")}` : "They share no terms in their stories"}</h2>
          <div class="qtable-wrap"><table class="tri cmp">
            <thead><tr><th scope="col"><span class="sr">Kind</span></th><th scope="col">Only in ${esc(A.name)}</th><th scope="col">In both</th><th scope="col">Only in ${esc(B.name)}</th></tr></thead>
            <tbody>${KINDS.map(([k, l]) => `<tr><th scope="row">${l}</th><td>${list(only(ta, tb, k))}</td><td class="both">${list(both(k))}</td><td>${list(only(tb, ta, k))}</td></tr>`).join("")}</tbody>
          </table></div>
        </div>
        <div class="full cmp-graphs">
          ${[A, B].map((x, i) => `<div class="diagram-frame">
            <div class="diagram-bar"><h3 class="kicker cmp-name"><a href="#/bias/${x.id}">${esc(x.name)}</a></h3><p class="kicker cmp-by">${esc(x.creator.join(", "))}</p></div>
            <figure class="diagram"><div class="diagram-scroll" id="cg${i}" tabindex="-1"></div><figcaption id="cc${i}"></figcaption></figure>
          </div>`).join("")}
        </div>
        <p class="note full" style="margin-top:14px">Class-level views. A box with a small black square is a class the other bias also uses; heavier arrows are properties both use.</p>
      </div></section>`;

    const go = () => { location.hash = `#/compare/${main.querySelector("#pa").value}/${main.querySelector("#pb").value}`; };
    main.querySelector("#pa").addEventListener("change", go);
    main.querySelector("#pb").addEventListener("change", go);
    main.querySelector(".swap").addEventListener("click", () => { location.hash = `#/compare/${c}/${a}`; });
    const sharedNodes = new Set(both("classes")), sharedEdges = new Set(both("props"));
    [A, B].forEach((x, i) => drawDiagram(x, { mode: "classes", host: main.querySelector("#cg" + i), cap: main.querySelector("#cc" + i),
      caption: `${plural(graphFor(x, "classes").nodes.length, "class", "classes")} and ${plural(storyProps(x).length, "property", "properties")} in the story.`,
      shared: { nodes: sharedNodes, edges: sharedEdges } }));
  }

  // ---------- quiz ------------------------------------------------------
  const ROUND = 6;
  let quizState = null;
  const newRound = () => ({ order: shuffle(QUIZ).slice(0, ROUND), i: 0, score: 0, answered: false, options: null });
  function optionsFor(q) {
    const pool = shuffle(q.sameCluster.filter((x) => x !== q.mirror));
    const others = shuffle(D.biases.map((b) => b.id).filter((x) => x !== q.id && x !== q.mirror && !pool.includes(x)));
    const wrong = (q.mirror ? [q.mirror] : []).concat(pool, others).slice(0, 2);
    return shuffle([q.id].concat(wrong));
  }
  function renderQuiz() {
    if (!quizState || quizState.done) quizState = newRound();
    const st = quizState;
    if (st.i >= st.order.length) {
      st.done = true;
      main.innerHTML = `
        <section class="band"><div class="grid">
          <div class="label-col"><p class="kicker">06 / Quiz</p></div>
          <div class="body-col quiz">
            <h2 class="quiz-q" tabindex="-1">You named ${st.score} of ${st.order.length} biases.</h2>
            <p class="lede" style="font-size:19px;margin-top:12px">${st.score === st.order.length ? "All of them." : "Several of these biases describe the same mistake from different sides, which is why the group modelled them with shared properties."}</p>
            <div class="pager" style="margin-top:20px"><button type="button" class="again">Play again</button><a href="#/">Back to the 16 ontologies</a></div>
          </div>
        </div></section>`;
      main.querySelector(".again").addEventListener("click", () => { quizState = newRound(); renderQuiz(); pageHeading("quiz"); main.querySelector(".quiz-q").focus(); });
      return;
    }
    const q = st.order[st.i];
    st.options = st.options || optionsFor(q);
    main.innerHTML = `
      <section class="band"><div class="grid">
        <div class="label-col"><p class="kicker">06 / Quiz</p>
          <p class="small muted" style="margin-top:8px">Question ${st.i + 1} of ${st.order.length} · ${st.score} right so far</p></div>
        <div class="body-col quiz">
          <h2 class="quiz-q" tabindex="-1">Which bias is this?</h2>
          <blockquote class="quiz-text">${q.excerpt.map((s) => `<p>${esc(s)}</p>`).join("")}</blockquote>
          <div class="filter quiz-opts" role="group" aria-label="Choose a bias">
            ${st.options.map((id) => `<button type="button" class="chip opt" data-id="${id}">${esc(byId[id].name)}</button>`).join("")}
          </div>
          <div class="quiz-fb" role="status" aria-live="polite"></div>
        </div>
      </div></section>`;
    main.querySelectorAll(".opt").forEach((btn) => btn.addEventListener("click", () => {
      if (st.answered) return;
      st.answered = true;
      const right = btn.dataset.id === q.id;
      if (right) st.score++;
      main.querySelectorAll(".opt").forEach((o) => {
        o.disabled = true;
        o.classList.toggle("correct", o.dataset.id === q.id);
        o.classList.toggle("wrong", o === btn && !right);
        if (o.dataset.id === q.id) o.insertAdjacentHTML("beforeend", `<span class="sr"> (the right answer)</span>`);
        else if (o === btn) o.insertAdjacentHTML("beforeend", `<span class="sr"> (your answer)</span>`);
      });
      const b = byId[q.id];
      main.querySelector(".quiz-fb").innerHTML = `
        <p class="quiz-verdict">${right ? "Right." : `Not quite: it is ${esc(b.name)}.`}</p>
        <p>${esc(b.definition.split(/(?<=\.)\s/)[0])}</p>
        <div class="pager"><button type="button" class="next">${st.i + 1 < st.order.length ? "Next question →" : "See your score →"}</button>
          <a href="#/bias/${b.id}/walk">Walk through its story</a></div>`;
      main.querySelector(".next").addEventListener("click", () => { st.i++; st.answered = false; st.options = null; renderQuiz(); pageHeading("quiz"); main.querySelector(".quiz-q").focus(); });
      main.querySelector(".next").focus();
    }));
  }

  // ---------- search ----------------------------------------------------
  let INDEX = null;
  function buildIndex() {
    const map = new Map();
    const add = (kind, label, bias, target) => {
      const k = kind + "|" + label;
      if (!map.has(k)) map.set(k, { kind, label, biases: new Map() });
      const e = map.get(k);
      if (!e.biases.has(bias)) e.biases.set(bias, target || "");
    };
    D.biases.forEach((b) => {
      add("Bias", b.name, b.id, "");
      b.instances.nodes.forEach((n) => { add("Individual", pretty(n.label), b.id, n.id); n.types.forEach((t) => add("Class", t, b.id, "")); });
      storyProps(b).forEach((p) => add("Property", p, b.id, ""));
      storyOdps(b).forEach((o) => add("Design pattern", odpById[o].name, b.id, ""));
      b.framesterInStory.forEach((f) => add("Framester frame", f, b.id, ""));
    });
    return [...map.values()];
  }
  const norm = (s) => pretty(s).toLowerCase().replace(/[^a-z0-9: ]+/g, " ");
  function renderSearch(q) {
    INDEX = INDEX || buildIndex();
    main.innerHTML = `
      <section class="band"><div class="grid">
        <div class="label-col"><p class="kicker">07 / Search</p></div>
        <div class="body-col">
          <h2 style="margin-bottom:14px">Find a bias, class, property or individual</h2>
          <form class="search-form" role="search" onsubmit="return false">
            <label for="q" class="sr">Search the 16 ontologies</label>
            <input id="q" type="search" autocomplete="off" spellcheck="false" placeholder="for example: belief, outcome, puppet" value="${esc(q)}">
          </form>
          <p class="search-count" id="search-count" role="status" aria-live="polite"></p>
          <div id="results"></div>
        </div>
      </div></section>`;
    const input = main.querySelector("#q");
    const ORDER = ["Bias", "Class", "Property", "Individual", "Design pattern", "Framester frame"];
    const show = () => {
      const term = norm(input.value).trim();
      setHash("#/search/" + encodeURIComponent(input.value));
      const out = main.querySelector("#results"), count = main.querySelector("#search-count");
      if (term.length < 2) { out.innerHTML = ""; count.textContent = "Type at least two letters."; return; }
      const hits = INDEX.filter((e) => norm(e.label).includes(term) || e.label.toLowerCase().includes(term));
      count.textContent = hits.length ? plural(hits.length, "match", "matches") : "No matches.";
      out.innerHTML = ORDER.map((k) => {
        const hs = hits.filter((h) => h.kind === k).sort((a, b) => b.biases.size - a.biases.size || a.label.localeCompare(b.label));
        if (!hs.length) return "";
        return `<h3 class="kicker res-kind">${k} <span class="muted">${hs.length}</span></h3><ul class="res-list">${hs.slice(0, 40).map((h) => `<li>
          <span class="res-label ${k === "Bias" ? "" : "mono"}">${esc(h.label)}</span>
          <span class="res-in">${h.kind === "Bias" ? "" : (h.biases.size > 1 ? `in ${h.biases.size} biases: ` : "in ")}${[...h.biases].map(([id, target]) =>
            `<a href="#/bias/${id}${target ? "/" + encodeURIComponent(target) : ""}">${esc(byId[id].name)}</a>`).join(", ")}</span></li>`).join("")}</ul>`;
      }).join("");
    };
    let t;
    input.addEventListener("input", () => { clearTimeout(t); t = setTimeout(show, 120); });
    show();
    if (!q) input.focus();
  }

  // ---------- about -----------------------------------------------------
  function renderAbout() {
    const noSparql = D.biases.filter((b) => !b.competencyQuestions.some((q) => q.sparql)).map((b) => b.name);
    main.innerHTML = `
      <section class="band"><div class="grid">
        <div class="label-col"><p class="kicker">09 / About</p></div>
        <div class="body-col prose">
          <h2 style="margin-bottom:16px">How the ontologies were made</h2>
          <p>The group picked two clusters from the Cognitive Bias Codex: three biases under “${esc(D.clusters[0].name)}”
          and thirteen under “${esc(D.clusters[1].name)}”. Each member modelled four biases. For every bias they followed eXtreme Design:</p>
          <ol>
            <li>Ask a language model (ChatGPT, sometimes Gemini) for a definition and ten scenarios, pick one scenario and turn it into a user story.</li>
            <li>Write competency questions the ontology should answer.</li>
            <li>Pull out key concepts, align them with Framester frames (DBpedia where no frame fitted) and reuse content ontology design patterns for the properties.</li>
            <li>Sketch the model in Graffoo, build it in Protégé, and populate it with individuals taken from the user story.</li>
            <li>Merge the 16 modules into one ontology (${D.merged.classes} classes, ${D.merged.objectProperties} object properties, ${D.merged.individuals} individuals).</li>
          </ol>
          <h3>Where the data comes from</h3>
          <ul>
            <li><b>Diagrams and tables</b>: the individuals, their classes and the object-property assertions in each of the 16 OWL files
              (ten RDF/XML files read with rdflib, six OWL/XML files read directly).</li>
            <li><b>Definitions and chosen scenarios</b>: the ontology annotations in the same files.</li>
            <li><b>User stories and competency questions</b>: the bias pages on the <a href="${GB}">GitBook</a>, fetched as Markdown.</li>
            <li><b>Design patterns</b>: the GitBook “Ontologies Developed” list, each bias page, the <code>hasComponent</code> annotations, and the terms the individuals use.</li>
            <li><b>Clusters</b>: the repository README.</li>
          </ul>
          <h3>How the questions were tested</h3>
          <p>Each OWL file was converted to N-Triples (the OWL/XML ones with owlready2) and checked against the explorer's own reading of it: every
          individual and every assertion matches. Each competency question then runs as SPARQL: in your browser with Oxigraph when you press
          “Run the query”, and at build time with rdflib, which is what the <a href="#/questions">tested questions</a> page reports. A query counts
          as answering its question only if it returns what the question asks for; where a file holds part of the answer, or none, the page says so.</p>
          <h3>Why the diagrams show the story, not the full class hierarchy</h3>
          <p>Each OWL file carries domain and range axioms for the whole collective vocabulary, so the same unions of classes
          repeat from file to file. Drawn in full they turn into one dense tangle that looks the same for every bias. What makes each module
          different is how its individuals put the user story together, so the explorer draws that, and derives a class-level view from it.</p>
          <h3>What is missing</h3>
          <ul class="gaps">
            <li>The GitBook gives no SPARQL for the competency questions of: ${esc(noSparql.join(", "))}. The explorer's queries for these are marked “written for the explorer”.</li>
            <li>${CQ.summary.unanswerable} competency questions ask about things the files do not record, and ${CQ.summary.partial} are answered only in part.</li>
            <li>A few documented patterns never appear in the story graphs (outlined squares in the <a href="#/patterns">reuse matrix</a>).</li>
            <li>No reasoner is run: the explorer shows what is asserted and makes no inferences, as the group's own queries assumed.</li>
          </ul>
        </div>
      </div></section>`;
  }

  route();
})();
