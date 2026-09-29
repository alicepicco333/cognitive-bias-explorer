# Cognitive Bias Ontology explorer

A visual explorer of the 16 cognitive-bias ontologies made for Knowledge Representation and Extraction
(University of Bologna, 2022/23) by Marco Lamorte, Corrado Consiglio, Alice Picco and Salvatore Di Marzo,
as documented on the [project GitBook](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation).

Live: https://alicepicco333.github.io/cognitive-bias-explorer/

## What it shows

- **The 16 ontologies**, grouped by cluster, filterable by the design patterns their stories reuse.
- **Each ontology's user story as a graph**, at the level of individuals or classes, laid out with elkjs.
- **Story walk**: the user story sentence by sentence, with the individuals each sentence describes marked on the graph.
- **Tested questions**: every competency question run as SPARQL against its OWL file, in the browser (Oxigraph)
  and at build time (rdflib), with the GitBook's own query shown next to any fix.
- **Compare** two ontologies: the classes, properties, patterns and frames they share.
- **Quiz**: name the bias from a short excerpt of its story.
- **Search** across biases, classes, properties, individuals, patterns and frames.
- **Reuse matrix** of design patterns and Framester frames.

## Building the data

The page is static: `index.html`, `app.js`, `styles.css` and the files in `data/`. To rebuild the data from
`source/` (OWL files and GitBook pages), run from the repository root:

    python build_data.py    # biases.json / biases.js: individuals, classes, stories, questions
    python build_rdf.py     # data/rdf/*.nt: each OWL file as N-Triples (OWL/XML via owlready2)
    python build_cq.py      # cq.json / cq.js: every competency question run, with results
    python build_walk.py    # walk.json / walk.js: story sentences linked to individuals
    python build_quiz.py    # quiz.js: excerpts for the quiz

`cq_queries.py` holds the query for each competency question and why it differs from the GitBook one, if it does.
`build_cq.py` stops if a query marked as answering its question returns nothing. `build_walk.py` and `build_quiz.py`
hold hand-made links and excerpts, checked against the text on every build.

Requirements: Python 3 with `rdflib` and `owlready2`.
