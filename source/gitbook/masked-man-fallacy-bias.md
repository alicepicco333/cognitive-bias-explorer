> For the complete documentation index, see [llms.txt](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/masked-man-fallacy-bias.md).

# Masked man fallacy Bias

Creation and development process of Masked man fallacy bias Ontology

### Visualize the ontology with [OWLGrEd](http://owlgred.lumii.lv/online_visualization/kk80#)

### [OWL file of the ontology](https://raw.githubusercontent.com/corrado877/CognitiveBiasOntologies/main/Masked_man_fallacy/Masked_Man_Fallacy.owl)

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FCWPNw2K1spW3Z8Ewj231%2FMasked_Man_Fallacy%20(2).webp?alt=media&amp;token=dc3c9bee-c080-4215-a640-895b9d53d961" alt=""><figcaption><p><em>UML of the  Masked man fallacy Ontology</em></p></figcaption></figure>

### Bias description:

The *Masked Man fallacy*, also known as the Illicit Substitution of Identicals, is a cognitive bias where  mistakenly reject two names as referring to the same person or thing if one of the names involves a description or characteristic. This occurs because  tend to treat names as rigid designators and fail to recognize that a masked or described name can refer to the same entity.

To understand the masked-man fallacy, it’s useful to first see a simplified explanation of the difference between *intensionality* and *extensionality*, as it pertains to this topic:

·         An *intension* can be thought of as a term that is used to refer to a certain   entity. For example, the term “Red Planet” is an intension that is used to refer to Mars.

·         An *extension* can be thought of as the underlying entity that a certain term refers to. For example, Mars is the extension that the term “Red Planet” refers to.

### Example of a scenario for Masked man fallacy:

A man enters a local jazz club and is told that the great saxophonist John Smith will play that night. It happens to be also the name of a local talented surgeon. Immediately he refuses to believe that they are the same person, in his biased reasoning someone can't excel in two such diverse professions.

### User Story: The jazziest surgeon

As a curious individual attending a local jazz club, a man overheard a conversation about a great saxophonist named John Smith that played there just the day before. He notices that that’s also the name of his heart surgeon so he asks more information about this person and they reply him that they’re talking about the same person. The man continues expressing its disbelief that someone could excel in two vastly different professions and argues that the heart surgeon and the saxophonist must be different individuals, as such diverse roles seemed incompatible. The individual has fallen victim to the Masked Man fallacy. John Smith seamlessly juggled his roles as a prominent heart surgeon in their local hospital and a skilled jazz musician performing in their very own jazz club.

###

### Classes and relative properties:

**People**:&#x20;

This frame contains general words for Individuals, i.e. humans. The Person is conceived of as independent of other specific individuals with whom they have relationships and independent of their participation in any particular activity.

**Properties**:

**owns**: This property can be used to link a certain NewsProvider with a Media that the NewsProvider ows, e.g. Fox News Channel is owned by Fox Entertainment Group, which also owns other Media (FXX Channel, etc.). This is an universal property, it can be also used in different context (e.g. Ruslana owns a Persian cat).

·         Domain: **Individual**

·         Range: **Knowledge**

&#x20;

**isEngagedIn**: Links the individual to the activity which he’s engaged in.

·         domain:**People**

·         range:**PerceptionExperience**

&#x20;

**PerceivedValidity**:&#x20;

the perceived validity of an entity due to a perception activity.

**Properties**:

**support**: the act of confirming a particular intention at the expense of one or more others.

·         Domain: **PerceivedValidity**

·         Range: K**nownFeature**

**reject**: The act of denying a particular intention in favour of one or more others

·         Domain: **PerceivedValidity**

·         Range: **Un-knownFeature**

**Feature**:&#x20;

this class define the identity, property or characteristic owned by an entity.

**Subclasses**:

**Knownfeature**: this class defines the identity, property or characteristic owned by an entity and acknowledged by the biased individual

**Un-knownfeature**: this class define the identity, property or characteristic owned by an entity and not acknowledged by the biased individual

&#x20;

**PerceptionExperience**:&#x20;

define the process of perception engaged by the individual.

**Properties**:

**Involves**: connects an activity to the entities involved in it.

·         Domain:**PerceptionExperience**

·         Range:**Entity**

&#x20;

**Knowledge**:&#x20;

All the knowledge available for the individual at the moment of deciding.

**Properties:**

**Affects**: X \<affects> Y. Agent X acts on object Y in such a way that Y changes state or location.&#x20;

·         Domain:**Knowledge**

·         Range:**PerceptionExperience**

&#x20;

**Entity**:&#x20;

An entity is something that exists as itself, as a subject or as an object, actually or potentially, concretely or abstractly, physically or not. It need not be of material existence. In particular, abstractions and legal fictions are usually regarded as entities. In general, there is also no presumption that an entity is animate, or present. The adjectival form is entitative.

**Properties**:

**hasFeature:** connects an entity to its relative feature or intention.

·         Domain:**Entity**

·         Range:**Feature**

###

### COMPETENCY QUESTIONS:

**Q1. What are the features owned by the entity?**

```sparql
SELECT ?features
WHERE {
  ?entity a dbr:Entity ;
          cbo:hasFeature ?features .}
```

**Q2. Which features does the person acknowledge as Known Features?**

```sparql
SELECT ?information
WHERE {?information a cbo:KnownFeature}
```

**Q3. Which feature is rejected by the individual?**

```sparql
SELECT ?rejectedFeature
WHERE {?rejectedFeature a cbo:Un-knownFeature}
```

### Chosen Framster Frames:

These are the framester frames used in the ontology:

* [People](https://w3id.org/framester/data/framestercore/People)
* [PerceptionExperience](https://w3id.org/framester/data/framestercore/PerceptionExperience)

## Entities used from other resources:

### DBpedia:

[Knowledge](https://dbpedia.org/page/Knowledge)

[Entity](https://dbpedia.org/page/Entity)

### Used Content ODPs

The following represent the Content Ontology Design Patterns adopted to model the Illusion of validity Ontology. Most of these ODP’s classes and properties have been used and combined during the modelling process.

[Experience and observation:](http://ontologydesignpatterns.org/wiki/Submissions:Experience_%26_Observation)

To represent the epistemological "missing link" between a cognitive activity, e.g. the interaction with a cultural object, and any evidence of the effects this activity has on the individuals that are engaged with it; what can collectively be considered as an experience

[An Ontology Design Pattern for Activity Reasoning:](http://ontologydesignpatterns.org/wiki/Submissions:An_Ontology_Design_Pattern_for_Activity_Reasoning)

To incorporate the general two perspectives of activities: a workflow perspective, which are often observed in planning-related applications, and a spatiotemporal perspective, which are often found in geographic activity analysis.

[AOS AGROVOC Concept Server fundation ontology model](http://ontologydesignpatterns.org/wiki/Submissions:AOS_AGROVOC_Concept_Server_fundation_ontology_model)

Act as a basic model for Agricultural Related Ontologies, in particular for the AGROVOC Concept Server. The model clearly identify concepts (domain concepts) from terms (which are represented as instances). Both concepts and terms have specific relationships connecting them.

[NewsReportingEvent:](http://ontologydesignpatterns.org/wiki/Submissions:NewsReportingEvent)

The pattern can be used for modelling situations in which we are not certain that a particular actual event has the properties which were described in a news message. We want to define the properties of an actual event which were reported (time, place, actors, subevents, cause, effect etc.), but not to treat them as universal, verified knowledge. The pattern also allows to define who is responsible for a particular description of an event and how this description is dealt with.

### Conclusion:

The Masked man fallacy bias bring up the concepts of intension and extension. These two concepts belong to the fields of logic, semantic and also knowedge representation.

**Intension** refers to the internal content of a concept or, in an other way, the criteria that the concept implies. In ontology modelling, it’s about the defining characteristics or properties of a class.

**Extension**, on the other hand, refers to the set of objects or instances that fall under the defined concept or class. In ontology modelling, it’s about the specific instances that belong to a class.&#x20;

For this very reason, and in order to don't be misleading or create confusion for the user, I've preferred to create a particular class "Feature" that in a way implies the properties of an intension but seems to be more practical and easy to understand.&#x20;

Once defined all the context around the perception experience I've modelled my ontology for this bias along two branches related to two different properties: "supports" and "rejects", related to the feature aknowledged by the biased individual and the one ignored even if they are both proper feature of the entity involved in the perception experience.
