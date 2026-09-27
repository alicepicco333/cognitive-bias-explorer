> For the complete documentation index, see [llms.txt](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/recency-bias.md).

# Recency Bias

Creation and development process of Recency bias Ontology

### Visualize the ontology with [OWLGrEd](http://owlgred.lumii.lv/online_visualization/1nmh#)

### [OWL file of the ontology](https://raw.githubusercontent.com/corrado877/CognitiveBiasOntologies/main/Recency_bias/Recency_bias.owl)

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2F7nMuTrriYFOU3IIBDs1O%2FRecency_bias_modified%20(3).webp?alt=media&amp;token=461c5e79-efe9-4e47-b2a2-1185f5e7a343" alt=""><figcaption><p><em>UML of the Recency bias Ontology</em></p></figcaption></figure>

### Bias description:

The *Recency Bias* is a cognitive bias where  give greater importance to recent events and information while discounting older data. This bias can affect decision-making and judgment, as recent experiences may carry more weight in evaluations and assessments. This happens because we are better at recalling items that are stored in our short-term memory, which can only hold a small amount of information at a time. Short-term memory stores the most recent information we’ve encountered, allowing us to access it easily during recall.

The recency effect is increased when too much information is presented too quickly, and it is reduced when coupled with other tasks. With respect to jury memory, allowing note taking could also reduce both primacy and recency effects[\[1\]](#bibliography).

In practice, individuals influenced by the *Recency Bias* might be more influenced by the most recent data or news when making decisions, even if earlier data or trends provide a more comprehensive or accurate perspective.

&#x20;

### Example of a scenario for Recency bias:

In a job interview, a candidate performs exceptionally well in the final part of the interview. The interviewer, influenced by the *Recency Bias*, places disproportionate weight on this recent performance and is more likely to remember it and give it more significance in the evaluation, potentially overlooking earlier parts of the interview.

### &#x20;User Story: The job interview

In the midst of a job interview, a human resources manager faces challenges as the job applicant encounters difficulties in responding to his questions. However, as the interview progresses, the applicant gradually gains confidence and delivers strong responses, leaving a positive impression on the manager. Despite the initial setbacks, when the applicant excels in answering the final two questions, the manager succumbs to the Recency Bias. In the final stages of a job interview, the candidate has demonstrated exceptional skills and knowledge, leaving a lasting impression on the interviewer. As a result, the interviewer may unintentionally assign greater significance to the final part of the interview, potentially overshadowing or overlooking the candidate's performance in the earlier stages. This bias can impact the overall evaluation process and influence the final decision-making regarding the candidate's suitability for the job.

&#x20;

### Classes and relative properties:

**People**:

This frame contains general words for Individuals, i.e. humans. The Person is conceived of as independent of other specific individuals with whom they have relationships and independent of their participation in any particular activity.

**Properties**:

**owns**: This property can be used to link a certain NewsProvider with a Media that the NewsProvider ows, e.g. Fox News Channel is owned by Fox Entertainment Group, which also owns other Media (FXX Channel, etc.). This is an universal property, it can be also used in different context (e.g. Ruslana owns a Persian cat).

·         Domain: **People**

·         Range: **Memory**

&#x20;**IsEngagedIn**: Links the individual to the activity which he’s engaged in.

·         Domain: **People**

·         Range: **Deciding, PerceptionExperience**

**Perceptionexperience**:&#x20;

define the process of perception engaged by the individual.

**Properties**:

**Involves**: connects an activity to the entities involved in it.

·         Domain:**PerceptionExperience**

·         Range:**MemoryEncoding**

&#x20;

**Memory**:&#x20;

This frame is concerned with Cognizers remembering and forgetting mental Content. &#x20;

**Properties**:

**hasOutcome**:&#x20;

The final decision the individual reaches as ending result of the decision-making process.

·         Domain:**Memory**

·         Range:**Prominence**

**Subclasses**:

* **RecentMemory**:&#x20;

the last information memorized by the individual.

**Properties**:

**Affects:** X \<affects> Y. Agent X acts on object Y in such a way that Y changes state or location.&#x20;

·         Domain: **RecentMemory**

·         Range: **Deciding**

&#x20;

* **PastMemory**:&#x20;

the previous information memorized by the individual.

**Properties**:

**Precedes**:

A relation between entities, expressing a 'sequence' schema.

E.g. 'year 1999 precedes 2000', 'deciding what coffee to use' precedes 'preparing coffee', 'World War II follows World War I', 'in the Milan to Rome autoroute, Bologna precedes Florence', etc.

It can then be used between tasks, processes, time intervals, spatially locate objects, situations, etc.

·         Domain: **PastMemory**

·         Range: **RecentMemory**

**MemoryEncoding**:&#x20;

The process of encoding memory.

**Properties**:

**Produces**: Define the relation between an activity and its produced outcome

·         Domain:**MemoryEncoding**

·         Range:**Memory**

&#x20;

**Deciding**:&#x20;

the decision-making process carried out by the individual.

**Properties**:

**Produces**: Define the relation between an activity and its produced outcome.

·         Domain: **Deciding**

·         Range: **Decision**

**Decision**:&#x20;

The decision the individual reaches as ending result of the decision-making process.

&#x20;

**Importance**:&#x20;

A Factor affects the outcome of an Undertaking, which can be a goal-oriented activity or the maintenance of a desirable state, the work in a Field, or something portrayed as affecting an Interested\_party. A Reason may be given for the importance of the Factor. The Degree of importance may also be specified.&#x20;

**Subclasses:**

* **HighImportance:**

It defines the high degree of importance related to a particular entity.

**Properties**:

**Classifies**: A relation between a Concept and an Entity

·         Domain:**HighImportance**

·         Range:**RecentMemory**

&#x20;

**hasParameterDataValue**:&#x20;

A Concept can have a Parameter that constrains the attributes that a classified Entity can have in a certain Situation.

·         Domain:**HighImportance**

·         Range: **"High" ^^xsd:string**

* **LowImportance:**

It defines the low degree of importance related to a particular entity.

**Properties**:

**Classifies**: A relation between a Concept and an Entity

·         Domain:**LowImportance**

·         Range:**PastMemory**

&#x20;

**hasParameterDataValue**:&#x20;

A Concept can have a Parameter that constrains the attributes that a classified Entity can have in a certain Situation.

·         Domain:**LowImportance**

·         Range: **"Low" ^^xsd:string**

&#x20;

### COMPETENCY QUESTIONS:

**Q1. What is the final decision reached by the individual in the decision-making process?**

```sparql
SELECT ?decision
WHERE {?decision a cbo:Decision}
```

&#x20;

**Q2. Which memory is classified as having high importance?**

```sparql
SELECT ?memory
WHERE {?importance a cbo:HighImportance.
?memory classification:isClassifiedBy ?importance}
```

&#x20;

**Q3. Which is the past memory?**

```sparql
SELECT ?memory
WHERE { ?memory a cbo:PastMemory }
```

### Chosen Framster Frames:

These are the framester frames used in the ontology:

* [People](https://w3id.org/framester/data/framestercore/People)
* [PerceptionExperience](https://w3id.org/framester/data/framestercore/PerceptionExperience)
* [Importance](https://w3id.org/framester/data/framestercore/Importance)
* [Memory](https://w3id.org/framester/data/framestercore/Memory)
* [Deciding](https://w3id.org/framester/data/framestercore/Deciding)
* [Prominence](https://w3id.org/framester/data/framestercore/Prominence)

### Used Content ODPs

The following represent the Content Ontology Design Patterns adopted to model the Illusion of validity Ontology. Most of these ODP’s classes and properties have been used and combined during the modelling process.

[Experience and observation:](http://ontologydesignpatterns.org/wiki/Submissions:Experience_%26_Observation)

To represent the epistemological "missing link" between a cognitive activity, e.g. the interaction with a cultural object, and any evidence of the effects this activity has on the individuals that are engaged with it; what can collectively be considered as an experience

[An Ontology Design Pattern for Activity Reasoning:](http://ontologydesignpatterns.org/wiki/Submissions:An_Ontology_Design_Pattern_for_Activity_Reasoning)

To incorporate the general two perspectives of activities: a workflow perspective, which are often observed in planning-related applications, and a spatiotemporal perspective, which are often found in geographic activity analysis.

[AOS AGROVOC Concept Server fundation ontology model](http://ontologydesignpatterns.org/wiki/Submissions:AOS_AGROVOC_Concept_Server_fundation_ontology_model)

Act as a basic model for Agricultural Related Ontologies, in particular for the AGROVOC Concept Server. The model clearly identify concepts (domain concepts) from terms (which are represented as instances). Both concepts and terms have specific relationships connecting them.

[Parameter](http://ontologydesignpatterns.org/wiki/Submissions:Parameter)

To represent parameters to be used for a certain concept.

[NewsReportingEvent:](http://ontologydesignpatterns.org/wiki/Submissions:NewsReportingEvent)

The pattern can be used for modelling situations in which we are not certain that a particular actual event has the properties which were described in a news message. We want to define the properties of an actual event which were reported (time, place, actors, subevents, cause, effect etc.), but not to treat them as universal, verified knowledge. The pattern also allows to define who is responsible for a particular description of an event and how this description is dealt with.

[Participation:](http://ontologydesignpatterns.org/wiki/Submissions:Participation)

To represent participation of an object in an event.

### Conclusions:

As for the previous biases, the concept perception experience is a fundamental piece of this ontology. In this case I've connected it to the process of memory encoding and then I've defined two different classes to distinguish between past memories and recent memories. It was also fundamental to classify the latters for their importance, their sequence in time and the influence of the one classified as most relevant on the decisional process, unlike the other.

### &#x20;Bibliography

***

\[1] B.E. Turvey, J.L. Freeman, in [Encyclopedia of Human Behavior (Second Edition)](https://www.sciencedirect.com/referencework/9780080961804/encyclopedia-of-human-behavior), 2012

\ <br>
