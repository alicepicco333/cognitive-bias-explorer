"""
Build data/biases.json for the Cognitive Bias Ontology explorer.

Everything in the JSON is read from the vendored source files:

  source/owl/*.owl        the 16 bias ontologies, copied unchanged from
                          https://github.com/alicepicco333/CognitiveBiasOntologies
                          (fork of corrado877/CognitiveBiasOntologies).
                          Ten are RDF/XML (parsed with rdflib), six are
                          OWL/XML (parsed here with ElementTree).
  source/gitbook/*.md     the GitBook pages, fetched as Markdown from
                          https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation
  source/README.md        the repository README (cluster membership)

Nothing is typed in by hand except (a) which file belongs to which bias and
(b) the lookup tables that say which namespace belongs to which ontology
design pattern or external vocabulary. Run:

    pip install rdflib
    python build_data.py            # uses the vendored copies
    python build_data.py --fetch    # re-downloads OWL, README and GitBook first
"""

import json
import re
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from collections import OrderedDict, defaultdict
from pathlib import Path

import rdflib
from rdflib import BNode, URIRef
from rdflib.collection import Collection
from rdflib.namespace import OWL, RDF, RDFS

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "source"
OUT = ROOT / "data" / "biases.json"

REPO_RAW = "https://raw.githubusercontent.com/corrado877/CognitiveBiasOntologies/main/"
REPO_WEB = "https://github.com/alicepicco333/CognitiveBiasOntologies"
GITBOOK = "https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation"
GB_OVERVIEW = GITBOOK + "/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview"
GB_BIAS = GB_OVERVIEW + "/ontologies-developed"

# ---------------------------------------------------------------------------
# 1. Which file is which bias (the only hand-kept table of content)
# ---------------------------------------------------------------------------
BIASES = [
    # id, display name, repo path of the OWL file, GitBook slug, names used in README
    ("bias-blind-spot", "Bias blind spot", "Bias Blind Spot/BiasBlindSpot.owl", "blind-spot-bias", ["Bias blind spot"]),
    ("naive-cynicism", "Naive cynicism", "Naive Cynicism/NaiveCynicism.owl", "naive-cynicism-bias", ["Naïve cynicism"]),
    ("naive-realism", "Naive realism", "Naive Realism/Naive_Realism.owl", "naive-realism-bias", ["Naïve realism"]),
    ("confabulation", "Confabulation", "Confabulation Bias/Confabulation_bias.owl", "confabulation-bias", ["Confabulation"]),
    ("clustering-illusion", "Clustering illusion", "Clustering_illusion/Clustering_illusion.owl", "clustering-illusion-bias", ["Clustering illusion"]),
    ("insensitivity-to-sample-size", "Insensitivity to sample size", "Insenstivity_to_sample_bias/Insentivity_to_sample_size.owl", "insensitivity-to-sample-size-bias", ["Insensitivity to sample size"]),
    ("neglect-of-probability", "Neglect of probability", "Neglect_of_Probability_bias/Neglect_of_probability.owl", "neglect-of-probability-bias", ["Neglect of probability"]),
    ("anecdotal-fallacy", "Anecdotal fallacy", "Anecdotal_fallacy/Anecdotal_fallacy.owl", "anecdotal-fallacy-bias", ["Anecdotal fallacy"]),
    ("illusion-of-validity", "Illusion of validity", "Illusion_of_validity/Illusion_of_validity.owl", "illusion-of-validity-bias", ["Illusion of validity"]),
    ("masked-man-fallacy", "Masked-man fallacy", "Masked_man_fallacy/Masked_Man_Fallacy.owl", "masked-man-fallacy-bias", ["Masked–man fallacy"]),
    ("recency", "Recency bias", "Recency_bias/Recency_bias.owl", "recency-bias", ["Recency illusion"]),
    ("gamblers-fallacy", "Gambler's fallacy", "GamblersFallacyOntology/GamblersFallacyOntology.owl", "gamblers-fallacy-bias", ["Gambler's fallacy"]),
    ("hot-hand-fallacy", "Hot-hand fallacy", "HotHandFallacyOntology/HotHandFallacyOntology.owl", "hot-hand-fallacy-bias", ["Hot–hand fallacy"]),
    ("illusory-correlation", "Illusory correlation", "IllusoryOfCorrelationOntology/IllusoryOfCorrelationOntology.owl", "illusory-correlation-bias", ["Illusory correlation"]),
    ("pareidolia", "Pareidolia", "PareidoliaOntology/PareidoliaBiasOntology.owl", "pareidolia-bias", ["Pareidolia"]),
    ("anthropomorphism", "Anthropomorphism", "Antropomorphism/Anthropomorphism.owl", "anthropomorphism-bias", ["Anthropomorphism"]),
]

# ---------------------------------------------------------------------------
# 2. Namespace lookup tables
# ---------------------------------------------------------------------------
# Ontology design patterns: namespace fragments that identify each pattern,
# and the ontologydesignpatterns.org wiki page names the team linked to.
ODPS = OrderedDict([
    ("experience-observation", dict(name="Experience & Observation", ns=["modellingdh.github.io/ont/odp/term"], wiki=["Experience_%26_Observation", "Experience_&_Observation"])),
    ("affected-by", dict(name="Affected By", ns=["w3id.org/affectedBy"], wiki=["AffectedBy"])),
    ("participation", dict(name="Participation", ns=["participation.owl"], wiki=["Participation"])),
    ("part-of", dict(name="Part Of", ns=["partof.owl"], wiki=["PartOf"])),
    ("parameter", dict(name="Parameter", ns=["parameter.owl"], wiki=["Parameter"])),
    ("provenance", dict(name="Provenance", ns=["www.w3.org/ns/prov"], wiki=["Provenance"])),
    ("activity-specification", dict(name="Activity Specification", ns=["icity/ActivitySpecification", "icity/Activity/"], wiki=["ActivitySpecification"])),
    ("activity-reasoning", dict(name="Activity Reasoning", ns=["descartes-core.org/ontologies/activities"], wiki=["An_Ontology_Design_Pattern_for_Activity_Reasoning"])),
    ("action", dict(name="Action", ns=["ontology.se/odp/content/owl/Action.owl"], wiki=["Action"])),
    ("classification", dict(name="Classification", ns=["classification.owl"], wiki=["Classification"])),
    ("move", dict(name="Move", ns=["cp/owl/move.owl"], wiki=["Move"])),
    ("sequence", dict(name="Sequence", ns=["cp/owl/sequence.owl"], wiki=["Sequence"])),
    ("news-reporting-event", dict(name="News Reporting Event", ns=["newsreportingevent.owl"], wiki=["NewsReportingEvent"])),
    ("recurrent-event-series", dict(name="Recurrent Event Series", ns=["recurrenteventseries"], wiki=["RecurrentEventSeries"])),
    ("aos", dict(name="AOS (AGROVOC concept server)", ns=["fao.org/aims/aos"], wiki=["AOS_AGROVOC_Concept_Server_fundation_ontology_model"])),
])

# Short prefixes used for display, most specific first.
PREFIXES = [
    ("fsyn", "w3id.org/framester/data/framestersyn/"),
    ("fs", "w3id.org/framester/data/framestercore/"),
    ("fs", "w3id.org/framester/"),
    ("dbo", "dbpedia.org/ontology/"),
    ("dbr", "dbpedia.org/resource/"),
    ("dbr", "dbpedia.org/page/"),
    ("foaf", "xmlns.com/foaf/0.1/"),
    ("cco", "purl.org/ontology/cco/"),
    ("prov", "www.w3.org/ns/prov#"),
    ("exob", "modellingdh.github.io/ont/odp/term/"),
    ("aff", "w3id.org/affectedBy#"),
    ("participation", "participation.owl#"),
    ("partof", "partof.owl#"),
    ("parameter", "parameter.owl#"),
    ("sequence", "sequence.owl#"),
    ("classification", "classification.owl#"),
    ("move", "move.owl#"),
    ("action", "Action.owl#"),
    ("actpat", "ActivityPattern.owl#"),
    ("activ", "icity/"),
    ("news", "newsreportingevent.owl#"),
    ("aos", "fao.org/aims/aos/aos.owl#"),
    ("owl", "www.w3.org/2002/07/owl#"),
]

KIND_OF_PREFIX = {
    "fs": "framester", "fsyn": "framester",
    "dbo": "external", "dbr": "external", "foaf": "external", "cco": "external", "owl": "local",
}
EXTERNAL_NAMES = {"dbo": "DBpedia", "dbr": "DBpedia", "foaf": "FOAF", "cco": "Cognitive Characteristics Ontology"}

SKIP_NS = ("www.w3.org/2002/07/owl#", "www.w3.org/2000/01/rdf-schema#",
           "www.w3.org/1999/02/22-rdf-syntax-ns#", "www.w3.org/2001/XMLSchema#",
           "purl.org/dc/", "cpannotationschema")


def prefix_of(iri):
    for p, frag in PREFIXES:
        if frag in iri:
            return p
    return None


def local_name(iri):
    s = urllib.parse.unquote(iri.rstrip("/#"))
    for sep in ("#", "/"):
        if sep in s:
            s = s.rsplit(sep, 1)[1]
    return s


def odp_of_iri(iri):
    for oid, o in ODPS.items():
        if any(n.lower() in iri.lower() for n in o["ns"]):
            return oid
    return None


def kind_of(iri):
    p = prefix_of(iri)
    if p in KIND_OF_PREFIX:
        return KIND_OF_PREFIX[p]
    if odp_of_iri(iri):
        return "odp"
    return "local"


def curie(iri):
    p = prefix_of(iri)
    name = local_name(iri)
    if p is None:
        return name  # the bias's own namespace: shown without prefix
    return f"{p}:{name}"


def skip(iri):
    return any(s in iri for s in SKIP_NS)


# ---------------------------------------------------------------------------
# 3. A neutral model both parsers fill
# ---------------------------------------------------------------------------
class Model:
    def __init__(self):
        self.annotations = defaultdict(list)       # ontology-level: key -> [values]
        self.labels = {}                           # iri -> rdfs:label
        self.comments = {}                         # iri -> rdfs:comment
        self.declared = defaultdict(set)           # "class" | "object" | "data" | "individual" -> iris
        self.subclass = set()                      # (sub, super)
        self.restriction = set()                   # (class, property, filler) from subClassOf / equivalentClass
        self.domain = defaultdict(set)             # property -> classes
        self.range = defaultdict(set)
        self.inverse = set()
        self.types = defaultdict(set)              # individual -> classes
        self.assertions = set()                    # (subject, property, object)
        self.data_assertions = set()               # (subject, property, literal)


def ann_key(iri):
    return local_name(iri).lower()


# ---- RDF/XML via rdflib ----------------------------------------------------
def parse_rdfxml(path):
    g = rdflib.Graph()
    g.parse(path, format="xml")
    m = Model()

    def members(node):
        """Named classes behind a class expression (unions expanded)."""
        if isinstance(node, URIRef):
            return {str(node)}
        out = set()
        for lst in list(g.objects(node, OWL.unionOf)) + list(g.objects(node, OWL.intersectionOf)):
            for item in Collection(g, lst):
                out |= members(item)
        return out

    ont = next(iter(g.subjects(RDF.type, OWL.Ontology)), None)
    if ont is not None:
        for p, v in g.predicate_objects(ont):
            if p == RDF.type:
                continue
            m.annotations[ann_key(str(p))].append(str(v))

    for kind, t in (("class", OWL.Class), ("object", OWL.ObjectProperty),
                    ("data", OWL.DatatypeProperty), ("individual", OWL.NamedIndividual)):
        for s in g.subjects(RDF.type, t):
            if isinstance(s, URIRef):
                m.declared[kind].add(str(s))
    for s, v in g.subject_objects(RDFS.label):
        m.labels[str(s)] = str(v)
    for s, v in g.subject_objects(RDFS.comment):
        if isinstance(s, URIRef):
            m.comments[str(s)] = str(v)

    def restrictions_from(cls, expr):
        for node in [expr] + [i for lst in g.objects(expr, OWL.intersectionOf) for i in Collection(g, lst)]:
            if isinstance(node, BNode) and (node, RDF.type, OWL.Restriction) in g:
                prop = g.value(node, OWL.onProperty)
                filler = g.value(node, OWL.someValuesFrom) or g.value(node, OWL.allValuesFrom)
                if prop is not None and filler is not None:
                    for f in members(filler):
                        m.restriction.add((cls, str(prop), f))
            elif isinstance(node, URIRef) and node != expr:
                m.subclass.add((cls, str(node)))

    for s, o in g.subject_objects(RDFS.subClassOf):
        if not isinstance(s, URIRef):
            continue
        if isinstance(o, URIRef):
            m.subclass.add((str(s), str(o)))
        else:
            restrictions_from(str(s), o)
    for s, o in g.subject_objects(OWL.equivalentClass):
        if isinstance(s, URIRef) and isinstance(o, BNode):
            restrictions_from(str(s), o)

    for p, d in g.subject_objects(RDFS.domain):
        m.domain[str(p)] |= members(d)
    for p, r in g.subject_objects(RDFS.range):
        if (p, RDF.type, OWL.ObjectProperty) in g:
            m.range[str(p)] |= members(r)
    for a, b in g.subject_objects(OWL.inverseOf):
        m.inverse.add((str(a), str(b)))

    individuals = m.declared["individual"]
    for s, o in g.subject_objects(RDF.type):
        if str(s) in individuals and isinstance(o, URIRef) and o != OWL.NamedIndividual:
            m.types[str(s)].add(str(o))
    objprops = m.declared["object"]
    for s, p, o in g:
        if str(s) in individuals and str(p) in objprops and isinstance(o, URIRef):
            m.assertions.add((str(s), str(p), str(o)))
        elif str(s) in individuals and str(p) in m.declared["data"]:
            m.data_assertions.add((str(s), str(p), str(o)))
    return m


# ---- OWL/XML via ElementTree ------------------------------------------------
OWLNS = "{http://www.w3.org/2002/07/owl#}"


def parse_owlxml(path):
    tree = ET.parse(path)
    root = tree.getroot()
    base = root.get("{http://www.w3.org/XML/1998/namespace}base") or root.get("ontologyIRI") or ""
    prefixes = {p.get("name"): p.get("IRI") for p in root.findall(OWLNS + "Prefix")}
    m = Model()

    def iri(el):
        if el.get("IRI") is not None:
            v = el.get("IRI")
            if v.startswith("#"):
                return base.split("#")[0] + v
            return v
        a = el.get("abbreviatedIRI")
        if a is not None:
            p, _, n = a.partition(":")
            return prefixes.get(p, p + ":") + n
        return None

    def tag(el):
        return el.tag.replace(OWLNS, "")

    def classes_in(el):
        """Named classes behind a class expression (unions / intersections expanded)."""
        t = tag(el)
        if t == "Class":
            return {iri(el)}
        if t in ("ObjectUnionOf", "ObjectIntersectionOf"):
            out = set()
            for c in el:
                if tag(c) in ("Class", "ObjectUnionOf", "ObjectIntersectionOf"):
                    out |= classes_in(c)
            return out
        return set()

    def restrictions(cls, el):
        t = tag(el)
        if t in ("ObjectSomeValuesFrom", "ObjectAllValuesFrom"):
            prop, filler = el[0], el[1]
            for f in classes_in(filler):
                m.restriction.add((cls, iri(prop), f))
        elif t == "ObjectIntersectionOf":
            for c in el:
                if tag(c) == "Class":
                    m.subclass.add((cls, iri(c)))
                else:
                    restrictions(cls, c)

    for ann in root.findall(OWLNS + "Annotation"):
        prop = iri(ann.find(OWLNS + "AnnotationProperty"))
        lit = ann.find(OWLNS + "Literal")
        if lit is None:
            lit = ann.find(OWLNS + "IRI")
        if prop and lit is not None and lit.text:
            m.annotations[ann_key(prop)].append(lit.text)

    for el in root:
        t = tag(el)
        if t == "Declaration":
            e = el[0]
            k = {"Class": "class", "ObjectProperty": "object", "DataProperty": "data",
                 "NamedIndividual": "individual"}.get(tag(e))
            if k:
                m.declared[k].add(iri(e))
        elif t == "SubClassOf":
            sub, sup = el[0], el[1]
            if tag(sub) != "Class":
                continue
            if tag(sup) == "Class":
                m.subclass.add((iri(sub), iri(sup)))
            else:
                restrictions(iri(sub), sup)
        elif t == "EquivalentClasses":
            named = [c for c in el if tag(c) == "Class"]
            others = [c for c in el if tag(c) != "Class"]
            for n in named:
                for o in others:
                    restrictions(iri(n), o)
        elif t == "ObjectPropertyDomain":
            m.domain[iri(el[0])] |= classes_in(el[1])
        elif t == "ObjectPropertyRange":
            m.range[iri(el[0])] |= classes_in(el[1])
        elif t == "InverseObjectProperties":
            m.inverse.add((iri(el[0]), iri(el[1])))
        elif t == "ClassAssertion":
            if tag(el[0]) == "Class":
                m.types[iri(el[1])].add(iri(el[0]))
        elif t == "ObjectPropertyAssertion":
            m.assertions.add((iri(el[1]), iri(el[0]), iri(el[2])))
        elif t == "DataPropertyAssertion":
            m.data_assertions.add((iri(el[1]), iri(el[0]), el[2].text or ""))
        elif t == "AnnotationAssertion":
            prop = iri(el[0])
            subj = el[1].text if tag(el[1]) == "IRI" else None
            if subj is None and el[1].get("abbreviatedIRI"):
                subj = iri(el[1])
            if subj and subj.startswith("#"):
                subj = base.split("#")[0] + subj
            lit = el[2]
            if subj and lit is not None and lit.text:
                if prop.endswith("#label"):
                    m.labels[subj] = lit.text
                elif prop.endswith("#comment"):
                    m.comments[subj] = lit.text
    return m


def parse_owl(path):
    head = path.read_text(encoding="utf-8", errors="replace")[:600]
    if "<Ontology" in head and "rdf:RDF" not in head:
        return parse_owlxml(path), "OWL/XML"
    return parse_rdfxml(path), "RDF/XML"


# ---------------------------------------------------------------------------
# 4. From the model to diagram data
# ---------------------------------------------------------------------------
def node(iri, m):
    p = prefix_of(iri)
    return {
        "id": iri,
        "label": curie(iri),
        "kind": kind_of(iri),
        "source": EXTERNAL_NAMES.get(p) or (ODPS[odp_of_iri(iri)]["name"] if odp_of_iri(iri) else None),
        "comment": m.comments.get(iri),
    }


def schema_graph(m):
    """Classes and object properties, filtered to what is connected.

    Edges: rdfs:subClassOf between named classes; each object property drawn
    from every class in its domain to every class in its range (unions
    expanded); existential / universal restrictions as property edges.
    Classes that are only declared (never used in an axiom) are left out of
    the drawing and counted instead.
    """
    edges = set()
    for s, o in m.subclass:
        if not skip(s) and not skip(o) and s != o:
            edges.add((s, "subClassOf", o, "subclass"))
    for c, p, f in m.restriction:
        if not skip(c) and not skip(f):
            edges.add((c, p, f, "restriction"))
    props = []
    for p in sorted(m.declared["object"] | set(m.domain) | set(m.range)):
        if skip(p):
            continue
        dom = sorted(x for x in m.domain.get(p, ()) if not skip(x))
        rng = sorted(x for x in m.range.get(p, ()) if not skip(x))
        props.append({"id": p, "label": curie(p), "kind": kind_of(p),
                      "domain": [curie(x) for x in dom], "range": [curie(x) for x in rng],
                      "comment": m.comments.get(p)})
        for d in dom:
            for r in rng:
                edges.add((d, p, r, "property"))
    used = {e[0] for e in edges} | {e[2] for e in edges}
    declared_classes = {c for c in m.declared["class"] if not skip(c)}
    nodes = [node(c, m) for c in sorted(used)]
    edge_list = [{"source": s, "target": t, "property": p,
                  "label": "subClassOf" if k == "subclass" else curie(p),
                  "type": k} for s, p, t, k in sorted(edges)]
    return {
        "nodes": nodes,
        "edges": edge_list,
        "objectProperties": props,
        "declaredClassCount": len(declared_classes),
        "unusedDeclaredClasses": sorted(curie(c) for c in declared_classes - used),
    }


def instance_graph(m):
    """The user-story individuals and the object-property assertions between them."""
    edges = []
    ids = set()
    for s, p, o in sorted(m.assertions):
        if skip(p):
            continue
        edges.append({"source": s, "target": o, "property": p, "label": curie(p), "type": "assertion"})
        ids |= {s, o}
    for i in m.declared["individual"]:
        ids.add(i)
    nodes = []
    for i in sorted(ids):
        nodes.append({"id": i, "label": local_name(i).replace("_", " "), "curie": curie(i),
                      "types": sorted(curie(t) for t in m.types.get(i, ())),
                      "kind": "individual" if kind_of(i) == "local" else kind_of(i)})
    data = [{"subject": local_name(s).replace("_", " "), "property": curie(p), "value": v}
            for s, p, v in sorted(m.data_assertions)]
    return {"nodes": nodes, "edges": edges, "dataAssertions": data}


def all_iris(m):
    out = set()
    for s, o in m.subclass:
        out |= {s, o}
    for c, p, f in m.restriction:
        out |= {c, p, f}
    for p in set(m.domain) | set(m.range):
        out.add(p)
        out |= m.domain.get(p, set()) | m.range.get(p, set())
    for s, p, o in m.assertions:
        out |= {s, p, o}
    for s, p, _ in m.data_assertions:
        out.add(p)
    for i, ts in m.types.items():
        out |= ts
    return {x for x in out if x}


# ---------------------------------------------------------------------------
# 5. GitBook Markdown
# ---------------------------------------------------------------------------
def clean_md(s):
    s = re.sub(r"<figure>.*?</figure>", "", s, flags=re.S)
    s = re.sub(r"<[^>]+>", "", s)
    s = s.replace("&#x20;", " ").replace("&amp;", "&")
    s = re.sub(r"&#x([0-9a-fA-F]+);", lambda m_: chr(int(m_.group(1), 16)), s)
    s = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", s)
    s = re.sub(r"\*\*|__", "", s)
    s = re.sub(r"(?<!\w)\*(?!\s)|(?<!\s)\*(?!\w)", "", s)
    s = s.replace("\\", "")
    return s.strip()


def section(md, pattern):
    """Body of the first heading matching `pattern`, up to the next real heading."""
    m = re.search(r"^(#{1,4})[^\n]*" + pattern + r"[^\n]*\n(.*?)(?=^#{1,4}[ \t]*\S|\Z)", md, re.I | re.S | re.M)
    if not m:
        return None, None
    title = clean_md(re.sub(r"^#+", "", m.group(0).split("\n", 1)[0]))
    return title, m.group(2)


def paragraphs(body):
    body = re.sub(r"```.*?```", "", body, flags=re.S)
    out = [clean_md(p) for p in re.split(r"\n\s*\n", body)]
    return [p for p in out if p and p != " "]


def competency_questions(body):
    """Questions + (when written) answer and SPARQL query, in page order."""
    if body is None:
        return []
    blocks = re.split(r"(```.*?```)", body, flags=re.S)
    items = []
    for b in blocks:
        if b.startswith("```"):
            q = re.sub(r"^```\w*\n?|```$", "", b).strip()
            if items and not items[-1].get("sparql"):
                items[-1]["sparql"] = q
            continue
        b = re.sub(r"<figure>.*?</figure>", "", b, flags=re.S)
        lines = [l for l in b.split("\n")]
        for raw in lines:
            text = clean_md(raw)
            text = re.sub(r"^(\*|-|\d+[.)]|Q\d+\.)\s*", "", text).strip()
            text = re.sub(r"^\d+\)\s*", "", text)
            if not text:
                continue
            if text.rstrip("*").endswith("?"):
                items.append({"question": text.rstrip("*").strip()})
            elif items and "answer" not in items[-1] and not items[-1].get("sparql"):
                items[-1]["answer"] = text
    return items


def odps_linked(md):
    found = []
    for oid, o in ODPS.items():
        for w in o["wiki"]:
            if re.search(r"Submissions:" + re.escape(w) + r"(?![A-Za-z_])", md):
                found.append(oid)
                break
    return found


def frames_linked(md):
    return sorted({urllib.parse.unquote(x).strip() for x in
                   re.findall(r"w3id\.org/framester/(?:data/framestercore|data/framestersyn|conceptnet/[\d.]+/c/en)/([A-Za-z.\d_]+)", md)})


def overview_odp_map(md, slug_to_id):
    """GitBook 'Ontologies Developed' page: each ODP heading lists the biases that used it."""
    out = defaultdict(set)
    part = md.split("## Framesters adopted")[0]
    for block in re.split(r"\n### ", part)[1:]:
        head = block.split("\n", 1)[0]
        odp = None
        for oid, o in ODPS.items():
            if any("Submissions:" + w + ")" in head for w in o["wiki"]):
                odp = oid
        if not odp:
            continue
        for slug in re.findall(r"ontologies-developed/([a-z-]+)\.md", block):
            if slug in slug_to_id:
                out[slug_to_id[slug]].add(odp)
    # the NewsReportingEvent pattern is listed under "Other resources"
    other = md.split("Pattern NewsReportingEvent", 1)
    if len(other) == 2:
        block = other[1].split("### ", 1)[0]
        for slug in re.findall(r"ontologies-developed/([a-z-]+)\.md", block):
            if slug in slug_to_id:
                out[slug_to_id[slug]].add("news-reporting-event")
    return out


def readme_clusters(readme, name_to_id):
    clusters = []
    for m_ in re.finditer(r"### (.+?) ###\n(.*?)\n\n", readme, re.S):
        members = [name_to_id[n] for n in re.findall(r"\+ \[([^\]]+)\]", m_.group(2)) if n in name_to_id]
        # the paragraph after the list
        after = readme[m_.end():].split("\n\n", 1)[0].strip()
        clusters.append({"name": m_.group(1).strip(), "members": members, "note": after})
    return clusters


# ---------------------------------------------------------------------------
# 6. Fetch (optional)
# ---------------------------------------------------------------------------
def fetch():
    def get(url):
        with urllib.request.urlopen(url) as r:
            return r.read()
    (SRC / "owl").mkdir(parents=True, exist_ok=True)
    (SRC / "gitbook").mkdir(parents=True, exist_ok=True)
    for _, _, path, slug, _ in BIASES:
        (SRC / "owl" / Path(path).name).write_bytes(get(REPO_RAW + urllib.parse.quote(path)))
        (SRC / "gitbook" / f"{slug}.md").write_bytes(get(f"{GB_BIAS}/{slug}.md"))
    (SRC / "README.md").write_bytes(get(REPO_RAW + "README.md"))
    for page, url in [("ontologies-developed", GB_OVERVIEW + "/ontologies-developed.md"),
                      ("team-members", GB_OVERVIEW + "/team-members.md"),
                      ("workflow-and-methodology", GB_OVERVIEW + "/workflow-and-methodology.md")]:
        (SRC / "gitbook" / f"{page}.md").write_bytes(get(url))


# ---------------------------------------------------------------------------
# 7. Build
# ---------------------------------------------------------------------------
def read(p):
    return p.read_text(encoding="utf-8")


def build():
    slug_to_id = {b[3]: b[0] for b in BIASES}
    name_to_id = {n: b[0] for b in BIASES for n in b[4]}
    overview_md = read(SRC / "gitbook" / "ontologies-developed.md")
    ov_map = overview_odp_map(overview_md, slug_to_id)
    clusters = readme_clusters(read(SRC / "README.md"), name_to_id)
    cluster_of = {bid: i for i, c in enumerate(clusters) for bid in c["members"]}

    biases = []
    gaps = []
    for bid, name, path, slug, _ in BIASES:
        owl_path = SRC / "owl" / Path(path).name
        m, fmt = parse_owl(owl_path)
        md = read(SRC / "gitbook" / f"{slug}.md")
        a = m.annotations

        # definition: the ontology's own rdfs:comment first, GitBook second
        definition = (a.get("comment") or [None])[0]
        def_source = "owl"
        if not definition:
            _, body = section(md, r"(definition|description)")
            ps = paragraphs(body or "")
            ps = [p for p in ps if not p.endswith("?")]
            definition = ps[0] if ps else None
            def_source = "gitbook"

        us_title, us_body = section(md, r"user story")
        story = paragraphs(us_body) if us_body else []
        story = [p for p in story if not re.match(r"^(Consider|Give me|User Story:?$)", p)]
        if us_title:
            us_title = re.sub(r"(?i)^.*?user story\s*:?\s*", "", us_title).strip(' "*:') or None

        _, cq_body = section(md, r"competency questions")
        cqs = competency_questions(cq_body)

        schema = schema_graph(m)
        inst = instance_graph(m)
        iris = all_iris(m)

        # ODP evidence, four independent sources
        odp_evidence = {}
        comp_values = [v for k, vs in a.items() if k == "hascomponent" for v in vs]
        in_owl_ns = {odp_of_iri(i) for i in iris} - {None}
        story_iris = {p for _, p, _ in m.assertions} | {p for _, p, _ in m.data_assertions} |                      {t for ts in m.types.values() for t in ts}
        in_story = {odp_of_iri(i) for i in story_iris} - {None}
        in_annotation = {o for v in comp_values for o in [odp_of_iri(v)] if o} | \
                        {oid for v in comp_values for oid, o in ODPS.items()
                         if any("Submissions:" + w in v for w in o["wiki"])}
        on_page = set(odps_linked(md))
        for oid in ODPS:
            ev = []
            if oid in ov_map.get(bid, ()):
                ev.append("overview")
            if oid in on_page:
                ev.append("page")
            if oid in in_annotation:
                ev.append("annotation")
            if oid in in_owl_ns:
                ev.append("axioms")
            if oid in in_story:
                ev.append("story")
            if ev:
                odp_evidence[oid] = ev

        # Framester: classes / individuals used in the axioms, plus frames named on the page
        fs_used = sorted({curie(i) for i in iris if kind_of(i) == "framester"})
        fs_story = sorted({curie(t) for ts in m.types.values() for t in ts if kind_of(t) == "framester"} |
                          {curie(i) for i in m.declared["individual"] if kind_of(i) == "framester"})
        frames_page = frames_linked(md)
        externals = sorted({curie(i) for i in iris if kind_of(i) == "external"})

        creators = a.get("creator", [])
        if not story:
            gaps.append(f"{name}: no user story section found on the GitBook page")
        if not cqs:
            gaps.append(f"{name}: no competency questions found")

        biases.append({
            "id": bid,
            "name": name,
            "cluster": cluster_of.get(bid),
            "title": (a.get("title") or [None])[0],
            "creator": creators,
            "created": (a.get("created") or [None])[0],
            "definition": definition,
            "definitionSource": def_source,
            "scenario": (a.get("scenarios") or [None])[0],
            "userStoryTitle": us_title,
            "userStory": story,
            "userStoryOwl": (a.get("userstory") or [None])[0],
            "competencyQuestions": cqs,
            "odps": odp_evidence,
            "framesterInOwl": fs_used,
            "framesterInStory": fs_story,
            "framesOnPage": frames_page,
            "externalInOwl": externals,
            "schema": schema,
            "instances": inst,
            "stats": {
                "declaredClasses": schema["declaredClassCount"],
                "drawnClasses": len(schema["nodes"]),
                "objectProperties": len(schema["objectProperties"]),
                "individuals": len(m.declared["individual"]),
                "assertions": len(inst["edges"]),
            },
            "owlFormat": fmt,
            "owlUrl": f"{REPO_WEB}/blob/main/{urllib.parse.quote(path)}",
            "gitbookUrl": f"{GB_BIAS}/{slug}",
        })

    team_md = read(SRC / "gitbook" / "team-members.md")
    team_line = next(l for l in team_md.splitlines() if l.startswith("**"))
    team = [clean_md(x) for x in team_line.split(",")]

    merged = rdflib.Graph()
    merged.parse(SRC / "owl" / "_merged_CognitiveBiasOntologies_V_2.0.owl", format="xml")
    merged_stats = {k: len(set(merged.subjects(RDF.type, t))) for k, t in
                    (("classes", OWL.Class), ("objectProperties", OWL.ObjectProperty),
                     ("individuals", OWL.NamedIndividual))}

    prefix_info = {}
    for pfx, frag in PREFIXES:
        sample = {
            "sequence": "http://www.ontologydesignpatterns.org/cp/owl/sequence.owl#X",
            "move": "http://www.ontologydesignpatterns.org/cp/owl/move.owl#X",
            "action": "http://www.ontology.se/odp/content/owl/Action.owl#X",
            "actpat": "http://descartes-core.org/ontologies/activities/1.0/ActivityPattern.owl#X",
            "activ": "http://ontology.eil.utoronto.ca/icity/ActivitySpecification/X",
        }.get(pfx, "http://" + frag + "X")
        oid = odp_of_iri(sample)
        prefix_info.setdefault(pfx, {
            "kind": kind_of(sample),
            "source": EXTERNAL_NAMES.get(pfx) or ("Framester" if pfx in ("fs", "fsyn") else None)
                      or (ODPS[oid]["name"] if oid else ("OWL" if pfx == "owl" else None)),
        })

    data = {
        "merged": merged_stats,
        "prefixes": prefix_info,
        "generatedFrom": {
            "repository": REPO_WEB,
            "upstream": "https://github.com/corrado877/CognitiveBiasOntologies",
            "gitbook": GITBOOK,
        },
        "clusters": clusters,
        "odps": [{"id": k, "name": v["name"],
                  "wiki": "http://ontologydesignpatterns.org/wiki/Submissions:" + v["wiki"][0]}
                 for k, v in ODPS.items()],
        "team": team,
        "biases": biases,
        "gaps": gaps,
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
    # same data as a script, so index.html also opens straight from disk
    OUT.with_suffix(".js").write_text("window.CBO_DATA = " + json.dumps(data, ensure_ascii=False) + ";\n",
                                      encoding="utf-8")
    print(f"wrote {OUT.relative_to(ROOT)}  ({len(biases)} biases)")
    for b in biases:
        s = b["stats"]
        print(f"  {b['name']:30s} {b['owlFormat']:8s} classes {s['drawnClasses']:>2}/{s['declaredClasses']:<2} "
              f"props {s['objectProperties']:>2} edges {len(b['schema']['edges']):>2} "
              f"cq {len(b['competencyQuestions'])} story {len(b['userStory'])} odps {len(b['odps'])}")
    for g_ in gaps:
        print("  gap:", g_)


if __name__ == "__main__":
    if "--fetch" in sys.argv:
        fetch()
    build()
