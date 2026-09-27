> For the complete documentation index, see [llms.txt](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusion-of-validity-bias.md).

# Illusion of validity Bias

Creation and development process of Illusion of validity bias Ontology

### Introduction:

I’ve decided to use Copilot as a tool to get a description and the creation of a basic structure of the ontology for each bias. Microsoft Copilot is an AI-powered digital assistant and unlike chat GPT it searches the Internet, this allowed me to trace its sources, consult the information reported by the AI within their context and have a deeper understanding of the various cognitive biases, in addition to the information it already gave me. On the other side chat GPT is more efficient on technical issues so I’ve decided to use both of them and alternate depending on my needs. I’ve asked the AI to give me a description of the bias and ten scenarios. Then I have chosen to elaborate on the most illustrative of them to obtain a user story, and a set of classes and properties to represent a bias-related ontology modelled in order to describe that user story. Finally I've formulated a number of competency question.

### Visualize the ontology with [OWLGrEd](http://owlgred.lumii.lv/online_visualization/iqot#)

### [OWL file of the ontology](https://raw.githubusercontent.com/corrado877/CognitiveBiasOntologies/main/Illusion_of_validity/Illusion_of_validity.owl)

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FMbbN1G2RNhTfWytqC8wY%2FIllusion_of_validity_gram%20(2).webp?alt=media&amp;token=421a86db-1f5a-413a-a1a2-b4a88b1b8823" alt=""><figcaption><p><em>UML of the  Illusion of validity bias Ontology</em></p></figcaption></figure>

### Bias description:

The *Illusion of Validity* is a cognitive bias where individuals tend to overestimate the accuracy and reliability of their judgments and predictions. It leads  to believe that their assessments of a situation or their ability to predict outcomes are more valid than they actually are. This bias is particularly common when  have some expertise in a specific domain.

In order to cope with the unpredictability of the world in which we live, we construct narratives that provide a coherent explanation for random occurrences[\[1\]](#bibliography). We fill in the gaps as needed, inferring causes and consequences from the information we are given. The less information we have, the easier it is to put together a satisfying story, which can lead us to believe that we know more than we actually do. Somewhere along the way, we start to accept the inferences we made as factual. Our predictions often impact the decisions we make. When we feel particularly confident in a prediction, we may be more inclined to make important decisions based on it and, since operating with overconfidence our predictions often prove to be inaccurate, this can have unfortunate repercussions.

"The unwarranted confidence which is produced by a good fit between the predicted outcome and the input information may be called the illusion of validity[\[2\]](#bibliography).

### Example of a scenario for illusion of validity bias:

"John, a seasoned investor, relies on his perceived competence and past successes to make investment decisions, often ignoring the influence of unpredictable factors."

### User Story: Overconfident Investment Strategy

As an experienced investor, John has a track record of making successful stock picks over the past few years. Inspired by his previous triumphs, he believes in the reliability of his judgment and wants to leverage his past successes to inform future investment decisions. The outcome sees John continuing  to invest based on his overconfident strategy, relying on the Illusion of Validity bias. Despite occasional market fluctuations, he attributes any success to his perceived expertise rather than considering the role of unpredictable factors or external influences.

There are many elements that could help John avoid falling in this bias like having a comprehensive historical overview of his successful stock picks, including details on stock names, purchase dates, and returns. An in-depth analysis of patterns and trends in John's past stock performance and the access to relevant financial data, market analyses, and news to support his investment decisions, could help him identify new potential indicators of success and their variability and finally validate his confidence in his ability to predict market movements.

### Classes and relative Properties:

**People**:&#x20;

This frame contains general words for Individuals, i.e. humans. The Person is conceived of as independent of other specific individuals with whom they have relationships and independent of their participation in any particular activity.

**Properties**:

**isEngagedIn**: Because an activity may engage other participants than the one performing it, engagements are in general considered individual rather than collective, therefore each participants has their own engagement and only some of them will be conscious and/or documented.&#x20;

·         Domain: **People**

·         Range: **action**, **Predicting**

**Owns**: This property can be used to link a certain NewsProvider with a Media that the NewsProvider ows, e.g. Fox News Channel is owned by Fox Entertainment Group, which also owns other Media (FXX Channel, etc.). This is an universal property, it can be also used in different context (e.g. Ruslana owns a Persian cat).

·         Domain: **People**

·         Range: **knowledge**

**Action**:&#x20;

The process of doing something. An action is performed by an agent. An action can be proposed (proposed actions make up a plan), implemented or abandoned, and it has a status and possibly one or more suspension periods.

**Properties**:

**hasConsequence**: A causal relation between actions, i.e. one action is the cause of another action. For example, the action of "swimming" is a consequence of "jumping into deep water". The property is transitive.

·         Domain: **action**

·         Range: **outcome**

&#x20;

**Knowledge**:&#x20;

Knowledge can be defined as awareness of facts or as practical skills, and may also refer to familiarity with objects or situations. Knowledge of facts, also called propositional knowledge, is often defined as true belief that is distinct from opinion or guesswork by virtue of justification.

**Properties**:

**Affects**: X \<affects> Y. Agent X acts on object Y in such a way that Y changes state or location.&#x20;

·         Domain: **knowledge**

·         Range: **Perceived Validity**

&#x20;

**PerceivedValidity**: it assess the perceived validity of an object due to a perception activity.

**Properties**:

**isParticipantIn**: Define the participation of an entity in process.

·         Domain: **PerceivedValidity**

·         Range: **Predicting**

&#x20;

**Predicting**:&#x20;

A Speaker states or makes known a future Eventuality on the basis of some Evidence.

**Properties**:

**Produces**: Define the relation between an activity and its outcome.

·         Domain: **Predicting**

·         Range: **Expectation**

&#x20;

**Expectation**:&#x20;

Words in this frame have to do with a Cognizer believing that some Phenomenon will take place in the future. Some words in the frame (e.g. foresee.v) indicate that the Phenomenon is asserted also to be true, while others do not.

**Properties**:

**hasAttribute**: connects an object to one of its attributes.

·         Domain:**Expectation**, **Outcome**

·         Range: **Identicality**

&#x20;

**Outcome**:&#x20;

The final result of an activity.

**Properties**:

**hasAttribute**: connects an obect to one of its attributes

·         Domain:**Expectation**, **Outcome**

·         Range: **Identicality**

**Identicality**: A Current\_instance of a certain Type is under discussion. This instance is evaluated as being the same instance or a different instance from a Previous\_instance encountered in a Previous\_context. Kim has a different hair color every week Kim has a different hair color every week Is this the same sofa as the one that used to be in the lobby? Is this the same sofa as the one that used to be in the lobby? Dracula and your neighbor are different  Dracula and your neighbor are different &#x20;

**Properties**:

**hasParameterDataValue**:  Parametrizes values from a datatype. For example, a Parameter AgeForDriving hasParameterDataValue 18 on datatype xsd:int, in the Italian traffic code. In this example, AgeForDriving isDefinedIn the Norm ItalianTrafficCodeAgeDriving.

·         Domain:**Identicality**

·         Range: **xsd:boolean**

### COMPETENCY QUESTIONS:

**Q1. What are the consequences of the investor’s biased behaviour?**

```sparql
SELECT ?consequence
WHERE {?consequence a activitypattern:Outcome}
```

**Q2. What knowledge instance affect the perceived validity?**

```sparql
SELECT ?knowledge
WHERE {?knowledge a dbr:Knowledge}
```

&#x20;

**Q3. Are investor's expectation and the final outcome considered different instances**?

```sparql
SELECT ?identicality
WHERE {
  ?identicality a fs:Identicality ;
               parameter:hasParameterDataValue false. }
```

### Chosen Framster Frames:

These are the framester frames used in the ontology:

* [People](https://w3id.org/framester/data/framestercore/People)
* [Predicting](https://w3id.org/framester/data/framestercore/Predicting)
* [Expectation](https://w3id.org/framester/data/framestercore/Expectation)
* [Identicality](https://w3id.org/framester/data/framestercore/Identicality)

## Entities used from other resources:

### DBpedia:

[Knowledge](https://dbpedia.org/page/Knowledge)

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

[Classification](http://ontologydesignpatterns.org/wiki/Submissions:Classification):

To represent the relations between concepts (roles, task, parameters) and entities (person, events, values), which concepts can be assigned to. To formalize the application (e.g. tagging) of informal knowledge organization systems such as lexica, thesauri, subject directories, folksonomies, etc., where concepts are first-order elements.

[Sequence](http://ontologydesignpatterns.org/wiki/Submissions:Sequence):

To represent sequence schemas. It defines the notion of transitive and intransitive precedence and their inverses. It can then be used between tasks, processes, time intervals, spatially locate objects, situations, etc.

### Conclusion:

*Illusion of validity* bias is all about an individual making predictions about future outcomes and taking them for granted. That's why I've decided to structure my ontology around the biased individual, his perception experience and following two mains branches: his expectation about the future outcome and the outcome itself.&#x20;

I've also thought that for this particular bias was possible (we could also say necessary) to give the possibility to represent the particular scenario where the individual acts in a biased and irrational way but in the end the outcome matches his expectations anyway. I guess there could have been many different ways to express the concepts of identicality and/or diversity but 've decided to model this situation by using the framester frame "Identicality" and linking it to a boolean value. It seemed the most practical and clear choice.

### &#x20;Bibliography

\[1] Penn, A. (2019). Illusion of Validity: Think You Make Good Predictions? *Shortform*. <https://www.shortform.com/blog/illusion-of-validity/&#x20>;

\[2] Kahneman, Daniel; Slovic, Paul; Tversky, Amos (1982). [*Judgment Under Uncertainty: Heuristics and Biases*](https://books.google.com/books?id=_0H8gwj4a1MC\&q=%22illusion+of+validity%22\&pg=PA9)
