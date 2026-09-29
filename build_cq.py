"""
Run every competency-question query and store the results for the explorer (data/cq.json, data/cq.js).
Run from the repo root after build_data.py and build_rdf.py:

    python build_cq.py

For each question: the GitBook query (if any) run as written with PREFIX declarations added, and the
query the explorer uses (cq_queries.py), with its results. The build stops if a query that should
answer returns nothing, so the page never claims more than the files hold.
"""
import json, os, re
from rdflib import Graph, URIRef, Literal
from cq_queries import PREFIXES, ORIGINAL_EXTRA, Q

ROOT = os.path.dirname(os.path.abspath(__file__))
D = json.load(open(os.path.join(ROOT, "data", "biases.json"), encoding="utf-8"))


def with_prefixes(body, extra=None):
    table = dict(PREFIXES, **(extra or {}))
    used = [p for p in table if re.search(r"(?<![\w-])" + re.escape(p) + r":", body)]
    return "".join(f"PREFIX {p}: <{table[p]}>\n" for p in used) + body.strip()


def short(term, g):
    if isinstance(term, Literal):
        return {"value": str(term), "literal": True}
    s = str(term)
    try:
        q = g.namespace_manager.normalizeUri(term)
    except Exception:
        q = s
    local = re.split(r"[#/]", s)[-1]
    return {"value": s, "label": local.replace("_", " "), "curie": q}


def run(g, text):
    try:
        res = g.query(text)
        vars_ = [str(v) for v in res.vars]
        rows = [[short(r[v], g) if r[v] is not None else None for v in res.vars] for r in res]
        return {"ok": True, "vars": vars_, "rows": rows}
    except Exception as e:
        return {"ok": False, "error": f"{type(e).__name__}: {str(e).splitlines()[0][:160]}"}


out, summary = {}, {"answered": 0, "partial": 0, "unanswerable": 0, "original": 0, "fixed": 0, "new": 0, "none": 0,
                    "documented": 0, "documented_run": 0, "documented_answer": 0}
for b in D["biases"]:
    specs = Q[b["id"]]
    cqs = b["competencyQuestions"]
    assert len(specs) == len(cqs), (b["id"], len(specs), len(cqs))
    g = Graph()
    g.parse(os.path.join(ROOT, "data", "rdf", b["id"] + ".nt"), format="nt")
    for p, u in PREFIXES.items():
        g.namespace_manager.bind(p, u, replace=True, override=True)
    items = []
    for cq, spec in zip(cqs, specs):
        item = {"question": cq["question"], "answer": cq.get("answer"), "status": spec["status"], "origin": spec["origin"], "note": spec["note"]}
        if cq.get("sparql"):
            summary["documented"] += 1
            orig = with_prefixes(cq["sparql"], ORIGINAL_EXTRA)
            r = run(g, orig)
            item["original"] = {"query": cq["sparql"].strip(), "result": r}
            summary["documented_run"] += r["ok"]
            summary["documented_answer"] += bool(r["ok"] and r["rows"])
        body = spec["query"] or (cq.get("sparql") if spec["origin"] == "original" else None)
        if body:
            text = with_prefixes(body, ORIGINAL_EXTRA if spec["origin"] == "original" else None)
            r = run(g, text)
            item["query"] = text
            item["result"] = r
            if spec["status"] in ("answered", "partial"):
                assert r["ok"] and r["rows"], (b["id"], cq["question"], r)
            if spec["origin"] == "original":
                assert item["original"]["result"]["ok"] and item["original"]["result"]["rows"], (b["id"], cq["question"])
        else:
            assert spec["status"] == "unanswerable", (b["id"], cq["question"])
        summary[spec["status"]] += 1
        summary[spec["origin"]] += 1
        items.append(item)
    out[b["id"]] = items

summary["total"] = sum(len(v) for v in out.values())
data = {"summary": summary, "biases": out, "prefixes": PREFIXES}
json.dump(data, open(os.path.join(ROOT, "data", "cq.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
open(os.path.join(ROOT, "data", "cq.js"), "w", encoding="utf-8").write("window.CBO_CQ = " + json.dumps(data, ensure_ascii=False) + ";\n")
print(json.dumps(summary, indent=1))
