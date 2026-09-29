"""
Convert the 16 bias ontologies to N-Triples (data/rdf/<id>.nt), so the explorer can run
SPARQL queries on them in the browser. Run from the repo root after build_data.py:

    python build_rdf.py

RDF/XML files are read with rdflib. The six OWL/XML files are read with owlready2, which
writes them back out as N-Triples; imports are not followed, so each file holds only the
triples of its own ontology, as in the original.
"""
import json, os, re, tempfile
from rdflib import Graph

ROOT = os.path.dirname(os.path.abspath(__file__))
OWL = os.path.join(ROOT, "source", "owl")
OUT = os.path.join(ROOT, "data", "rdf")
os.makedirs(OUT, exist_ok=True)

src = open(os.path.join(ROOT, "build_data.py"), encoding="utf-8").read()
FILES = re.findall(r'\("([a-z-]+)", "[^"]+", "[^"]*?([^/"]+\.owl)"', src)


def load(path):
    g = Graph()
    try:
        g.parse(path, format="xml")
        return g, "RDF/XML"
    except Exception:
        pass
    import owlready2
    w = owlready2.World()
    onto = w.get_ontology("file://" + path.replace("\\", "/")).load(only_local=True)
    tmp = os.path.join(tempfile.gettempdir(), "cbo_conv.nt")
    onto.save(file=tmp, format="ntriples")
    g.parse(tmp, format="nt")
    return g, "OWL/XML"


report = {}
for bid, fname in FILES:
    g, fmt = load(os.path.join(OWL, fname))
    g.serialize(os.path.join(OUT, bid + ".nt"), format="nt", encoding="utf-8")
    report[bid] = {"format": fmt, "triples": len(g),
                   "prefixes": {p: str(u) for p, u in g.namespaces() if p and not p.startswith(("ns", "_"))}}
    print(f"{bid:32s} {fmt:8s} {len(g):6d} triples")
json.dump(report, open(os.path.join(OUT, "index.json"), "w", encoding="utf-8"), indent=1)
