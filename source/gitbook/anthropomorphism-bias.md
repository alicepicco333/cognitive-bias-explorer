> For the complete documentation index, see [llms.txt](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anthropomorphism-bias.md).

# Anthropomorphism Bias

Creation and development process of Anthropomorphism bias Ontology

### Visualize the ontology with [OWLGrEd](http://owlgred.lumii.lv/online_visualization/mwxj#)

### [OWL of the ontology](https://raw.githubusercontent.com/corrado877/CognitiveBiasOntologies/main/Antropomorphism/Anthropomorphism.owl)

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FHyNkQAiHgJa9p4O84lyj%2Fantropomorphism%20(1).webp?alt=media&amp;token=0be96d8c-2350-473d-92fa-bcaf5d9951c9" alt=""><figcaption><p><em>UML of the  Anthropomorhism bias Ontology</em></p></figcaption></figure>

### Bias description:

*Anthropomorphism* is a cognitive bias where human characteristics such as emotions or intentions are attributed to non-human entities like objects, or animals. It’s a form of personification where human traits are projected onto things that do not possess them.

Humans naturally anthropomorphize: “There is an universal tendency among mankind to conceive all beings like themselves. … We find faces in the moon, armies in the clouds.”\[1]

In everyday life, you might observe anthropomorphism when people assign human emotions to their pets, believe that inanimate objects have intentions, or interpret natural events as if they were driven by human-like purpose. It's a way of making sense of the world by projecting familiar human qualities onto the unfamiliar.

&#x20;

### Example of a scenario for Anthrophormism bias:

A young child attributes human emotions and intentions to his beloved puppet, Mr. Whiskers, engaging in conversations and interpreting its expressions.

### &#x20;User Story: The Personified Puppet

A parent raising a young child, notices an endearing tendency in his child's behaviour. He has a beloved puppet named Mr. Whiskers, and in his imaginative world, Mr. Whiskers is not just a puppet but a sentient being with thoughts and feelings. In the child's world, Anthropomorphism is at play. The child attributes human characteristics to the puppet, firmly believing that the puppet experiences emotions and intentions. When playing with Mr. Whiskers, the child engages in conversations, genuinely believing that the puppet responds in its own unique way and may interpret expressions, assuming joy during playtime and perhaps even sadness when left untouched.

&#x20;

### Classes and relative properties:

**People**: This frame contains general words for Individuals, i.e. humans. The Person is conceived of as independent of other specific individuals with whom they have relationships and independent of their participation in any particular activity.

**Properties**:

**isEngagedin**: Links the individual to the activity which he’s engaged in.

·         Domain: **Individual**

·         Range: **PerceptionExperience**

&#x20;

**PerceptionExperience**:&#x20;

define the process of perception engaged by the individual.

**Properties**:

**Involves**: connects an activity to the entities involved in it.

·         Domain: **PerceptionExperience**

·         Range: **Non-humanEntity**

**HumanFeature**:&#x20;

Represents traits or features associated with humans.

**Properties**:

**IsReflectionon**: Used to connect the subjective elements of an experience with the corresponding observation, which is extrapolated from the content being interacted with and in itself may not be including a critique.

·         Domain: **HumanFeature**

·         Range: **PerceptionExperience**

**NonHumanEntity:**&#x20;

Represents entities that are not human.

**Properties**:

**producedObservation:** This property can be used to denote that something is (even indirectly, not necessary through direct reflection) responsible for the existence of an observation.&#x20;

·         Domain: **NonHumanEntity**

·         Range: **HumanFeature**

&#x20;

### COMPETENCY QUESTIONS:

**Q1. Who is engaged in the perception activity?**

```sparql
SELECT ?person
WHERE {?perception a fs:PerceptionExperience .
?person term:isEngagedIn ?perception}
```

&#x20;

**Q2. Which human features are observed during the perception experience?**

```sparql
SELECT ?humanfeature
WHERE {?perceptionexperience a fs:PerceptionExperience. 
?humanfeature term:isReflectionOn ?perceptionexperience.}
```

**Q3. What non-human entity is involved in the perception experience?**<br>

```sparql
SELECT ?entity
WHERE {
?entity a cbo:Non-humanEntity.
?perception a fs:PerceptionExperience.
?perception cbo:involves ?entity. }
```

### Chosen Framster Frames:

These are the framester frames used in the ontology:

* [People](https://w3id.org/framester/data/framestercore/People)
* [PerceptionExperience](https://w3id.org/framester/data/framestercore/PerceptionExperience)

## Entities used from other resources:

### DBpedia:

[Animal](https://dbpedia.org/page/Animal)

[Plant](https://dbpedia.org/page/Plant)

[Concept](https://dbpedia.org/page/Concept)

### Used Content ODPs

The following represent the Content Ontology Design Patterns adopted to model the Illusion of validity Ontology. Most of these ODP’s classes and properties have been used and combined during the modelling process.

[Experience and observation:](http://ontologydesignpatterns.org/wiki/Submissions:Experience_%26_Observation)

To represent the epistemological "missing link" between a cognitive activity, e.g. the interaction with a cultural object, and any evidence of the effects this activity has on the individuals that are engaged with it; what can collectively be considered as an experience

[Move](http://ontologydesignpatterns.org/wiki/Submissions:Move)

### Conclusions:

Anthropomorphism ontology is the most linear and essential of those I've modelled. I've tryed to represent straightly the definition of the bias through classes and properties and that's why I've payed particular attenction in inserting all the kinds of entities involved in the bias as subclasses of Non-humanEntity.&#x20;

### &#x20;Bibliography

***

\[1] Hume, David. 1957. The Natural History of Religion. ed. Root, H. E. Stanford, CA: Stanford University
