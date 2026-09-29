"""
The competency questions, tested. For each of the 47 questions on the GitBook this file gives the
query the explorer runs, and why it differs from the documented one (if there was one).

status   answered     the query returns what the question asks for
         partial      it returns something relevant, but the file does not hold the whole answer
         unanswerable the ontology does not record what the question asks
origin   original     the GitBook query, run as written (only PREFIX declarations added)
         fixed        the GitBook query, corrected; `note` says what was wrong
         new          no query on the GitBook; written for this explorer
         none         no query possible (unanswerable)

build_cq.py runs every original and every final query against data/rdf/<id>.nt and stores the results.
"""

PREFIXES = {
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "prov": "http://www.w3.org/ns/prov#",
    "cbo": "https://github.com/corrado877/CognitiveBiasOntologies/blob/main/CognitiveBiasOntologies#",
    "fs": "https://w3id.org/framester/data/framestercore/",
    "fsyn": "https://w3id.org/framester/data/framestersyn/",
    "term": "http://modellingdh.github.io/ont/odp/term/",
    "aff": "https://w3id.org/affectedBy#",
    "cco": "http://purl.org/ontology/cco/core#",
    "dbo": "https://dbpedia.org/ontology/",
    "dbr": "https://dbpedia.org/resource/",
    "dbp": "https://dbpedia.org/page/",
    "participation": "http://www.ontologydesignpatterns.org/cp/owl/participation.owl#",
    "parameter": "http://www.ontologydesignpatterns.org/cp/owl/parameter.owl#",
    "partof": "http://www.ontologydesignpatterns.org/cp/owl/partof.owl#",
    "classification": "http://www.ontologydesignpatterns.org/cp/owl/classification.owl#",
    "action": "http://www.ontology.se/odp/content/owl/Action.owl#",
    "activitypattern": "http://descartes-core.org/ontologies/activities/1.0/ActivityPattern.owl#",
    "nc": "https://github.com/corrado877/CognitiveBiasOntologies/tree/main/Naive_Cynicism#",
    "np": "https://github.com/corrado877/CognitiveBiasOntologies/blob/main/Neglect_of_probability_bias#",
}
# the GitBook writes some prefixes differently from the files; its originals are run with these too
ORIGINAL_EXTRA = {"participation": "http://www.ontologydesignpatterns.org/cp/owl/participation.owl#"}

Q = {}

Q["bias-blind-spot"] = [
    dict(status="answered", origin="new", query="""
SELECT ?task WHERE { ?person a cbo:Agent ; term:isEngagedIn ?task . }""",
         note="Emily is the agent; the task she is engaged in is modelled as a decision."),
    dict(status="answered", origin="new", query="""
SELECT ?idea WHERE { ?person a cbo:Agent ; cbo:focusesOn ?idea . }""",
         note="What Emily focuses on: the superiority of her own idea."),
    dict(status="partial", origin="new", query="""
SELECT ?opinion WHERE { ?person a fs:People ; cbo:hasBiasedOpinion ?opinion . }""",
         note="The file only records that Chris holds a biased opinion, not what he proposed."),
    dict(status="partial", origin="new", query="""
SELECT ?belief WHERE { ?person a cbo:Agent ; cco:belief ?belief . }""",
         note="The file gives Emily's belief in the superiority of her own idea, but nothing links it to Chris's proposal."),
    dict(status="answered", origin="new", query="""
SELECT ?outcome WHERE { ?person a cbo:Agent ; term:isEngagedIn ?decision . ?decision cbo:hasOutcome ?outcome . }""",
         note="The outcome of Emily's decision: realising her bias."),
]

Q["naive-cynicism"] = [
    dict(status="answered", origin="new", query="""
SELECT ?offer WHERE { ?person nc:receives ?offer . }""",
         note="The offer of help. The file calls the person who receives it Chris, not Alex, and has no individual for Sarah."),
    dict(status="unanswerable", origin="none", query=None,
         note="Sarah's intention is not modelled: the file has no individual or property for it."),
    dict(status="answered", origin="new", query="""
SELECT ?bias ?outcome WHERE { ?bias nc:misjudges ?help . ?event cbo:involves ?help ; cbo:hasOutcome ?outcome . }""",
         note="Naive cynicism misjudges the offered help, and the outcome is that the offer is declined."),
]

Q["naive-realism"] = [
    dict(status="unanswerable", origin="none", query=None,
         note="The events the two colleagues suggest are not in the file."),
    dict(status="partial", origin="new", query="""
SELECT ?perspective WHERE { ?person cbo:hasPerspective ?perspective . }""",
         note="The file records Akio's perspective as a statement, but not which event he suggests."),
    dict(status="answered", origin="new", query="""
SELECT ?belief ?source WHERE { ?person cco:belief ?belief . OPTIONAL { ?belief aff:affectedBy ?source } }""",
         note="Maria's belief in cultural universality, itself affected by how she perceives her own beliefs."),
    dict(status="unanswerable", origin="none", query=None,
         note="What they realise at the end of the story is not modelled."),
]

Q["confabulation"] = [
    dict(status="answered", origin="new", query="""
SELECT ?outcome WHERE { ?person term:isEngagedIn ?event . ?event cbo:hasOutcome ?outcome . }""",
         note="The outcome of the night out: telling her parents a fabricated account."),
    dict(status="answered", origin="new", query="""
SELECT ?story WHERE { ?person dbo:produces ?story . }""",
         note="Sarah produces a fabricated story."),
    dict(status="answered", origin="new", query="""
SELECT ?gap WHERE { ?story cbo:fillsMemoryGap ?gap . }""",
         note="The fabricated story fills a memory gap."),
]

Q["clustering-illusion"] = [
    dict(status="answered", origin="new", query="""
SELECT ?pattern ?observed WHERE { ?observed term:producedObservation ?pattern . ?pattern a fs:Pattern . }""",
         note="The pattern in the lottery numbers, observed in consecutive digits. Sarah herself is not linked to anything in the file."),
    dict(status="partial", origin="new", query="""
SELECT ?illusion WHERE { ?activity cbo:creates ?illusion . }""",
         note="The file models the illusion the lottery creates, not the human tendency the documented answer names."),
]

Q["insensitivity-to-sample-size"] = [
    dict(status="answered", origin="new", query="""
SELECT ?knowledge WHERE { ?me cbo:have_knowledge ?knowledge . }""",
         note="What the narrator knows: a game review."),
    dict(status="answered", origin="new", query="""
SELECT ?decision ?influence WHERE { ?decision a cbo:Decision ; aff:influencedBy ?influence . }""",
         note="Buying the game is influenced by the review."),
]

Q["neglect-of-probability"] = [
    dict(status="partial", origin="new", query="""
SELECT ?what ?choice WHERE { ?what cbo:decide ?choice . ?choice a np:Ignore . }""",
         note="In the file, the choice to ignore (procrastinate) hangs off the deadline; the documented answer says the presentation."),
    dict(status="answered", origin="new", query="""
SELECT ?influence WHERE { ?decision a cbo:Decision ; aff:influencedBy ?influence . }""",
         note="The decision about the presentation is influenced by procrastinating."),
]

Q["anecdotal-fallacy"] = [
    dict(status="answered", origin="new", query="""
SELECT ?belief WHERE { ?subject cco:belief ?belief . }""",
         note="The narrator's belief: a friend lost weight."),
    dict(status="answered", origin="new", query="""
SELECT ?perception ?conclusion WHERE { ?story cbo:creates ?perception . ?perception cbo:involves ?obs . ?obs term:producedObservation ?conclusion . }""",
         note="The friend's story creates the perception that the diet works."),
]

Q["illusion-of-validity"] = [
    dict(status="answered", origin="fixed", query="""
SELECT ?consequence WHERE { ?action a action:Action ; action:hasConsequence ?consequence . }""",
         note="The GitBook query asks for activitypattern:Outcome, a class no individual has. The consequence is linked with action:hasConsequence."),
    dict(status="answered", origin="original", query=None, note=""),
    dict(status="answered", origin="original", query=None, note=""),
]

Q["masked-man-fallacy"] = [
    dict(status="answered", origin="original", query=None, note=""),
    dict(status="answered", origin="original", query=None, note=""),
    dict(status="answered", origin="original", query=None, note=""),
]

Q["recency"] = [
    dict(status="answered", origin="original", query=None, note=""),
    dict(status="answered", origin="fixed", query="""
SELECT ?memory WHERE { ?importance a cbo:HighImportance ; classification:classifies ?memory . }""",
         note="The file links importance to memory with classification:classifies; the GitBook query asks for the inverse, isClassifiedBy, which is never asserted and no reasoner infers here."),
    dict(status="answered", origin="original", query=None, note=""),
]

Q["gamblers-fallacy"] = [
    dict(status="answered", origin="original", query=None, note=""),
    dict(status="answered", origin="fixed", query="""
SELECT ?sequence WHERE { ?event parameter:hasParameter ?probability . ?probability a fs:Probability ; aff:influencedBy ?sequence . }""",
         note="The GitBook query uses cbo:hasInfluence from the sequence; the file says the probability is aff:influencedBy the sequence."),
    dict(status="partial", origin="fixed", query="""
SELECT ?outcome ?level WHERE {
  ?event dbo:produces ?outcome ; parameter:hasParameter ?probability .
  ?probability parameter:hasParameterDataValue ?level .
  FILTER (CONTAINS(LCASE(STR(?outcome)), "red") && LCASE(STR(?level)) = "high")
}""",
         note="The GitBook query has a syntax error (a property with no object). Fixed, it runs, but the probability carries both \"High\" and \"Low\", so the answer comes from the filter rather than from the data."),
]

Q["hot-hand-fallacy"] = [
    dict(status="partial", origin="fixed", query="""
SELECT ?event ?outcome WHERE {
  ?bettor cco:belief ?series .
  ?probability aff:influencedBy ?series ; parameter:hasParameterDataValue "High" .
  ?event parameter:hasParameter ?probability ; cbo:producesOutcomeEffect ?outcome .
}""",
         note="The GitBook query uses cbo:hasInfluence and parameter:isParameterFor; the file has aff:influencedBy and parameter:hasParameter. As in Gambler's fallacy, the probability carries both \"High\" and \"Low\"."),
    dict(status="answered", origin="fixed", query="""
SELECT ?sequence ?outcome WHERE { ?sequence prov:wasGeneratedBy ?activity ; cbo:hasOutcomeEffect ?outcome . }""",
         note="The GitBook query starts with the answer sentence pasted in, so it does not parse. The query itself was right."),
    dict(status="answered", origin="original", query=None, note=""),
]

Q["illusory-correlation"] = [
    dict(status="answered", origin="original", query=None, note=""),
    dict(status="answered", origin="fixed", query="""
SELECT ?pattern WHERE { ?trend a fs:BecomingAware ; cbo:isPerceivedAs ?pattern . }""",
         note="The GitBook query misspells the property (isPercievedAs)."),
    dict(status="answered", origin="fixed", query="""
SELECT ?variable WHERE { ?pattern partof:hasPart ?variable . }""",
         note="The file links the pattern to its parts with partof:hasPart; the GitBook query asks for the inverse, isPartOf."),
]

Q["pareidolia"] = [
    dict(status="answered", origin="fixed", query="""
SELECT ?stimulus WHERE { ?activity a fs:Activity ; cbo:involves ?stimulus . }""",
         note="The GitBook query has a stray space in its variable (? stimulus) and selects a variable it never binds."),
    dict(status="answered", origin="fixed", query="""
SELECT ?stimulusType ?stimulus WHERE {
  ?stimulusType rdfs:subClassOf cbo:AmbiguousStimulus .
  ?stimulus a ?stimulusType .
}""",
         note="The GitBook query misspells a class (AmbiguousoStimulus), mixes ?stimulusLabel and ?stimuluslabel, and asks the random stimulus to be of the subclass type."),
    dict(status="answered", origin="fixed", query="""
SELECT ?element WHERE { ?person cbo:isBiasedBy ?element . ?element cbo:hasInfluence ?perception . ?perception a fs:PerceptionExperience . }""",
         note="The GitBook query requires the hiker to be fs:People, but the file types the hiker as fsyn:Hiker.n.1."),
]

Q["anthropomorphism"] = [
    dict(status="answered", origin="original", query=None, note=""),
    dict(status="answered", origin="original", query=None, note=""),
    dict(status="answered", origin="fixed", query="""
SELECT ?entity WHERE { ?perception a fs:PerceptionExperience ; cbo:involves ?entity . }""",
         note="No individual is typed cbo:Non-humanEntity; the puppet is a PhysicalObject from the Move pattern."),
]
