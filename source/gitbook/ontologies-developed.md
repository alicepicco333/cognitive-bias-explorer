> For the complete documentation index, see [llms.txt](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed.md).

# Ontologies Developed

A list of the biases and their corresponding ontologies developed. The ODPs and other resources used during this phase are shown below as well.

For developing and modeling process of all 16 bias ontologies, we exploited the Ontology Design Patterns (ODPs) and framesters in Framester HUB. Below is a list of the OPDs and framesters used.

## Ontology Design Patterns

### [Activity Specification](http://ontologydesignpatterns.org/wiki/Submissions:ActivitySpecification)

**Intent**: This work is concerned with supporting a correct and meaningful representation of activities on the Semantic Web, with the potential to support tasks such as activity recognition and reasoning about causation. This requires an ontology capable of more than simply documenting and annotating individual activity occurrences; definitions of activity specifications are required. Current representations of activities in OWL do not meet the basic requirements for activity specifications. Detailed definitions of an activity's preconditions and effects are lacking, in particular with respect to a consideration of change over time. This pattern leverages existing work to fill this void with an ontology design pattern for activity specifications in OWL.

**Domains**: [Event Processing](http://ontologydesignpatterns.org/wiki/Community:Event_Processing), [General](http://ontologydesignpatterns.org/wiki/Community:General)

The Activity Specification ODP was adopted in the development of the following bias ontologies:

* [Anecdotal fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anecdotal-fallacy-bias.md)
* [Clustering Illusion](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/clustering-illusion-bias.md)

### [Action](http://ontologydesignpatterns.org/wiki/Submissions:Action)

**Intent**: The purpose of the pattern is to model actions that are proposed, planned, and performed or abandoned, together with their status and durations in time.

**Domain**: [Product development](http://ontologydesignpatterns.org/wiki/Community:Product_development), [Business](http://ontologydesignpatterns.org/wiki/Community:Business), [General](http://ontologydesignpatterns.org/wiki/Community:General)

**Description**: This pattern models an action class, and subclasses that represents different kinds of actions depending on their properties. It also includes properties of actions such as status and duration.

The Action ODP adopted in the development of the following bias ontologies:

* [Illusion of Validity](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusion-of-validity-bias.md)

### [Affected By](http://ontologydesignpatterns.org/wiki/Submissions:AffectedBy)

**Intent:** To represent properties/qualities that may affect the status of a feature of interest

**Domains**: [Building and Construction](http://ontologydesignpatterns.org/wiki/Community:Building_and_Construction), [General](http://ontologydesignpatterns.org/wiki/Community:General)

**Description:** This ODP is a reengineering of the SEAS Feature of Interest ontology (<https://ci.mines-stetienne.fr/seas/FeatureOfInterestOntology-1.0>). The constraint on the property seas:derivesFrom to be symmetric is unnecessary and sometimes innapropriate. For instance, the temperature of a room may derive from the occupancy of the room; however, it is not necessary that the occupancy derives from the temperature of the room. A new property aff:affectedBy (released from the symmetric constraint) is defined in the AffectedBy ODP to replace the role of the property seas:derivesFrom. It can be asserted that seas:derivesFrom is sub property of aff:affectedBy. The class aff:FeatureOfInterest is equivalent to seas:FeatureOfInterest, and the class seas:Property is sub class of aff:Quality. Moreover, seas:hasProperty is sub property of aff:influencedBy, and seas:isPropertyOf is sub property of aff:belongsTo. Furthermore, aff:belongsTo is defined to be functional, to support the notion that a quality is intrinsic to the feature of interest (i.e., an entity) to which it belongs (according to the conceptualization in DUL); and it is asserted that every quality belongs to a feature of interest (aff:Quality rdfs:subClassOf aff:belongsTo some aff:FeatureOfInterest).

The Affected By ODP was adopted in the development of the following bias ontologies:

* [Gambler's Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md)
* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)
* [Insesitivy  to sample size](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/insensitivity-to-sample-size-bias.md)
* [Neglect of Probability](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/neglect-of-probability-bias.md)
* [Blind Spot Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/blind-spot-bias.md)
* [Confabulation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/confabulation-bias.md)
* [Naive realism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-realism-bias.md)

### [An Ontology Design Pattern for Activity Reasoning](http://ontologydesignpatterns.org/wiki/Submissions:An_Ontology_Design_Pattern_for_Activity_Reasoning)

**Intent**: To incorporate the general two perspectives of activities: a workflow perspective, which are often observed in planning-related applications, and a spatiotemporal perspective, which are often found in geographic activity analysis.

**Domains**: [Workflow](http://ontologydesignpatterns.org/wiki/Community:Workflow), [General](http://ontologydesignpatterns.org/wiki/Community:General)

**Description**: Activity is an important concept in many fields, and a number of activity-related ontologies have been developed. While suitable for their designated use cases, these ontologies cannot be easily generalized to other applications. This work aims at providing a generic ontology design pattern to model the common core of activities in different domains. Such a pattern can be used as a building block to construct more specific activity ontologies.

The Activity Pattern was adopted in the development of the following bias ontologies:

* [Illusion of Validity](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusion-of-validity-bias.md)
* [Masked man fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/masked-man-fallacy-bias.md)
* [Recency Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/recency-bias.md)

### [Classification](http://ontologydesignpatterns.org/wiki/Submissions:Classification)

**Intent**: To represent the relations between concepts (roles, task, parameters) and entities (person, events, values), which concepts can be assigned to. To formalize the application (e.g. tagging) of informal knowledge organization systems such as lexica, thesauri, subject directories, folksonomies, etc., where concepts are first-order elements.

**Domains**: [General](http://ontologydesignpatterns.org/wiki/Community:General)

The Classification Pattern was adopted in the development of the following bias ontologies:

* [Recency Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/recency-bias.md)

### [Experience & Observation](http://ontologydesignpatterns.org/wiki/Submissions:Experience_%26_Observation)

**Intent**: to represent the epistemological "missing link" between a cognitive activity, e.g. the interaction with a cultural object, and any evidence of the effects this activity has on the individuals that are engaged with it; what can collectively be considered as an experience.

The Experience and Observation ODP was adopted in the development of the following bias ontologies:

**Domains**: [Humanities](http://ontologydesignpatterns.org/wiki/Community:Humanities), [Social Science](http://ontologydesignpatterns.org/wiki/Community:Social_Science)

* [Anecdotal fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anecdotal-fallacy-bias.md)
* [Anthropomorphism bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anthropomorphism-bias.md)
* [Clustering Illusion](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/clustering-illusion-bias.md)
* [Illusory Correlation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusory-correlation-bias.md)
* [Pareidolia Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/pareidolia-bias.md)
* [Illusion of Validity](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusion-of-validity-bias.md)
* [Insensitivity to sample size](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/insensitivity-to-sample-size-bias.md)
* [Masked man Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/masked-man-fallacy-bias.md)
* [Neglect of Probability](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/neglect-of-probability-bias.md)
* [Recency Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/recency-bias.md)
* [Blind Spot Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/blind-spot-bias.md)
* [Confabulation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/confabulation-bias.md)
* [Naive cynicism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-cynicism-bias.md)
* [Naive realism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-realism-bias.md)

### [Move](http://ontologydesignpatterns.org/wiki/Submissions:Move)

**Description**: The move content ontology design pattern. This CP represents the action of moving a physical object from a place to another. The move CP is extracted from the CIDOC ontology.

The Move ODP was adopted in the  development of the following bias ontologies:

* [Anthropomorphism bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anthropomorphism-bias.md)

### [Parameter](http://ontologydesignpatterns.org/wiki/Submissions:Parameter)

**Intent**: To represent parameters to be used for a certain concept.

**Domains:** [General](http://ontologydesignpatterns.org/wiki/Community:General)

**Description**: A basic pattern to represent parameters over concepts. Implemented with simple classes and properties.

The Parameter ODP was adopted in the development of the following bias ontologies:

* [Gambler's Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md)&#x20;
* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)
* [Illusion of Validity](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusion-of-validity-bias.md)
* [Recency Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/recency-bias.md)

### [Participation](http://ontologydesignpatterns.org/wiki/Submissions:Participation)

**Intent**: To represent participation of an object in an event.

**Domains**: [General](http://ontologydesignpatterns.org/wiki/Community:General)

**Description**: This pattern is a basic one, and enables the representation of any simple binary relation between objects and events.

* [Gambler's Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md)
* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)
* [Illusion of Validity](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusion-of-validity-bias.md)

### [Part of](http://ontologydesignpatterns.org/wiki/Submissions:PartOf)

**Intent**: To represent entities and their parts.

**Domains**: [Parts and Collections](http://ontologydesignpatterns.org/wiki/Community:Parts_and_Collections)

The Part Of ODP was adopted in the development of the following bias ontologies:

* [Gambler's Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md)
* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)
* [Illusory Correlation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusory-correlation-bias.md)

### [Provenance](http://ontologydesignpatterns.org/wiki/Submissions:Provenance)

**Intent**: Extracted core of PROV-O

The Provenance ODP was adopted in the development of the following bias ontologies:

* [Gambler's Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md)
* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)

### [Sequence](http://ontologydesignpatterns.org/wiki/Submissions:Sequence)

**Intent**: To represent sequence schemas. It defines the notion of transitive and intransitive precedence and their inverses

**Domains**: [General](http://ontologydesignpatterns.org/wiki/Community:General), [Organization](http://ontologydesignpatterns.org/wiki/Community:Organization), [Workflow](http://ontologydesignpatterns.org/wiki/Community:Workflow), [Time](http://ontologydesignpatterns.org/wiki/Community:Time)

**Description**:  This pattern is a basic one; it represents the 'path' cognitive schema, which underlies many different conceptualizations: spatial paths, timelines, event sequences, organizational hierarchies, graph paths, etc.

The Sequence ODP was adopted in the development of the following bias ontologies:

* [Recency Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/recency-bias.md)

## Framesters adopted

The following is a list of all Framesters used for developing the bias ontologies.

### [**Activity**](https://w3id.org/framester/data/framestercore/Activity)

This is an abstract frame for durative activities, in which the Agent enters an ongoing state of the Activity, remains in this state for some Duration of Time, and leaves this state either by finishing or by stopping. The Agent's Activity should be intentional. This frame is intended mostly for the inheritance of common FEs, and to provide the frame structure for the beginning, ongoing, finish, or stop stage of an Activity, each of which constitutes a subframe of this frame. This frame should be compared to the Process frame

The Activity Frameseter was used in:

* [Gambler's Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md)
* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)
* [Illusory Correlation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusory-correlation-bias.md)
* [Pareidolia Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/pareidolia-bias.md)

### [Assessing](https://w3id.org/framester/data/framestercore/Assessing)

An Assessor examines a Phenomenon to figure out its Value according to some Feature of the Phenomenon. This Value is a factor in determining the acceptability of the Phenomenon. In some cases, a Method (implicitly involving an Assessor) is used to determine the Phenomenon's Value. Each company is then evaluated for their earning potential. CNI From the evidence of the pilot studies the risk of damage to the test subjects was rated too high to continue. CNI He weighed his options carefully

The Asessing Framester was used in:

* [Insensitivity to sample size](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/insensitivity-to-sample-size-bias.md)
* [Neglect of Probability](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/insensitivity-to-sample-size-bias.md)

### [Assistance](https://w3id.org/framester/data/framestercore/Assistance)

&#x20;A Helper benefits a Benefited\_party by enabling the culmination of a Goal that the Benefited\_party has. A Focal\_entity that is involved in reaching the Goal may stand in for it. Will you help the Government find your brother? Maybe Stephen should assist him with the last manuscript. They helped me psychologically to overcome the physical loss I had suffered. You have helped him tremendously by showing him how to stand up for himself and by being his friend. By bringing assistance to his troops wherever they were in trouble he aided them greatly.&#x20;

The Assistance Framester was used in:

* [Naive cynicism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-cynicism-bias.md)

### [BecomingAware](https://w3id.org/framester/data/framestercore/BecomingAware)&#x20;

Words in this frame have to do with a Cognizer adding some Phenomenon to their model of the world. They are similar to Coming-to-believe words, except the latter generally involve reasoning from Evidence. The words in this frame take direct objects that denote entities in the world, and indicate awareness of those entities, without necessarily giving any information about the content of the Cognizer's belief or knowledge. These words also resemble perception words, since creatures often become aware of things by perceiving them. Later that night, they found the barely-alive victim inside the Red Hall estate flat. Almost immediately, the police discovered the wrought-iron crypt gate swinging open. In the bag on the tableI could vaguely discern two bottles of wine and several cartons of cakes and other goodies. People passing through recognize it from afar, by the clouds of coal dust darkening the air. General Grammatical Observations: Passive forms of the verbs in this frame can occur with extraposed clauses expressing Phenomenon: That year it was discovered that consumers preferred the older model. It is not always recognized how much work goes into a dinner party.

The BecomingAware Frameseter was used in:

* [Illusory Correlation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusory-correlation-bias.md)

### [Belief](< https://w3id.org/framester/data/framestersyn/Belief.n.1>)

A belief is a mental state or attitude where an individual holds something to be true or probable. Beliefs can range from factual assertions about the world to subjective evaluations, opinions, or attitudes about various matters. They form a fundamental part of human cognition and influence perception, decision-making, and behavior. Beliefs can be based on evidence, personal experience, cultural upbringing, social influences, or even intuition. They often shape an individual's worldview and can be deeply ingrained or subject to change over time based on new information or experiences.

The Belief Frameseter was used in:

* [Blind Spot Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/blind-spot-bias.md)
* [Naive realism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-realism-bias.md)

### [CognitiveConnection](https://w3id.org/framester/data/framestercore/CognitiveConnection)&#x20;

A concept, Concept\_1, is related causally or collocationally to another concept, Concept\_2, by means of some Evidence. They may be related only under certain Circumstances or from a certain Point\_of\_view. The two concepts may be expressed collectively as associated Concepts. Any cognizer is deprofiled.

The CognitiveConnection Frameseter was used in:

* [Illusory Correlation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusory-correlation-bias.md)

### [Deciding](https://w3id.org/framester/data/framestercore/Deciding)

This framester and its subclass [Decision ](https://w3id.org/framester/data/framestersyn/Decision.n.2)was used in the following ontologies:

* [Insensitivity to sample size](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/insensitivity-to-sample-size-bias.md)
* [Neglect of Probability](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/neglect-of-probability-bias.md)
* [Recency Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/recency-bias.md)

### [**Event** ](https://w3id.org/framester/data/framestercore/Event)

An Event takes place at a Place and Time. Big earthquakes only happen along plate boundaries. INI The party will take place on Sunday in the all-you-can-eat buffet.

The Event Frameseter was used in:

* [Gambler's Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md)
* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)
* [Confabulation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/confabulation-bias.md)
* [Naive cynicism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-cynicism-bias.md)

### [Expectation](https://w3id.org/framester/data/framestercore/Expectation)

Words in this frame have to do with a Cognizer believing that some Phenomenon will take place in the future. Some words in the frame (e.g. foresee.v) indicate that the Phenomenon is asserted also to be true, while others do not. Michael expected Abby to demand examples. From the look on her face Michael expected that she would say she got the job.

The Expectation Frameseter was used in:

* [Illusion of Validity](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusion-of-validity-bias.md)

### [ExperiencerObj](https://w3id.org/framester/data/framestercore/ExperiencerObj)

Some phenomenon (the Stimulus) provokes a particular emotion in an Experiencer. Nightmare on Elm Street scared me silly.

The ExperiencerObj Framester was used in:

* [Anectodal Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anecdotal-fallacy-bias.md)
* [Clustering Illusion](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/clustering-illusion-bias.md)

### [Evidence](https://w3id.org/framester/data/framestercore/Evidence)

The Support, a phenomenon or fact, lends support to a claim or proposed course of action, the Proposition, where the Domain\_of\_Relevance may also be expressed. Some of the words in this frame (e.g. argue) are communication words used in a non-communicative, epistemic sense. The latest poll results show that support of the president is at an all-time low. &#x20;

The Evidence Framester was used in:

* [Clustering Illusion](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/clustering-illusion-bias.md)

### [Identicality](https://w3id.org/framester/data/framestercore/Identicality)

A Current\_instance of a certain Type is under discussion. This instance is evaluated as being the same instance or a different instance from a Previous\_instance encountered in a Previous\_context. Kim has a different hair color every week Kim has a different hair color every week Is this the same sofa as the one that used to be in the lobby? Is this the same sofa as the one that used to be in the lobby? Dracula and your neighbor are different people Dracula and your neighbor are different people

The Expectation Framester was used in:

* [Illusion of Validity](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusion-of-validity-bias.md)

### [Importance](https://w3id.org/framester/data/framestercore/Importance)

A Factor affects the outcome of an Undertaking, which can be a goal-oriented activity or the maintenance of a desirable state, the work in a Field, or something portrayed as affecting an Interested\_party. A Reason may be given for the importance of the Factor. The Degree of importance may also be specified. Temperature is the most critical factor in successful storage. Timing will be critical. Heathcliff is more important to me than myself . 1992 was of great importance to the business community.

The Importance framester was used in:

* [Recency Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/recency-bias.md)

### [Memory ](https://w3id.org/framester/data/framestercore/Memory)

This frame is concerned with Cognizers remembering and forgetting mental Content.

The Memory framester was used in:

* [Recency Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/recency-bias.md)

### [Mental Property](https://w3id.org/framester/data/framestercore/MentalProperty)

MentalProperty, when used for decision-making, refers to the collection of intangible assets, including intellectual property, knowledge assets, creative outputs, innovative ideas, cognitive constructs, and personal and cultural heritage, that are considered and evaluated to inform and guide decision processes. In this context, MentalProperty serves as the foundation upon which decisions are made, providing valuable insights, perspectives, and resources that influence the course of action chosen. Decision-makers may assess and leverage MentalProperty assets to address challenges, capitalize on opportunities, mitigate risks, and achieve desired outcomes.

The Mental Property framester was used in:

* [Blind Spot Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/blind-spot-bias.md)

### [Pattern](#pattern-https-w3id.org-framester-data-framestercore-pattern)

This frame describes the interrelation of a collection of Entities; they may be physical entities or shapes in a recognizable configuration, a pattern of events, or a relation among abstract entities. The pattern is not the individual Entities nor the set of Entities, but an abstraction of their interrelations, as a gestalt. The Cougers are playing in a Wing-T formation tonight. The auditors noticed a suspicious pattern of withdrawals from the maintenance account . The digits of irrational numbers do not repeat in any kind of pattern.

The Pattern Frameseter was used in:

* [Anectodal Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anecdotal-fallacy-bias.md)
* [Clustering Illusion](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/clustering-illusion-bias.md)
* [Illusory Correlation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusory-correlation-bias.md)
* [Pareidolia Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/pareidolia-bias.md)

### [**People**](https://w3id.org/framester/data/framestercore/People)&#x20;

This frame contains general words for Individuals, i.e. humans. The Person is conceived of as independent of other specific individuals with whom they have relationships and independent of their participation in any particular activity. They may have an Age, Descriptor, Origin, Persistent\_characteristic, or Ethnicity. A man from Phoenix was shot yesterday. She gave birth to a screaming baby yesterday. I study 16-year-old female adolescents. I am dating an African-American man. She comforted the terrified child. I always thought of him as a stupid man.

The People Frameseter  and its sublcass [Person](https://w3id.org/framester/data/framestersyn/Person.n.1) was used in:

* [Gambler's Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md)
* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)
* [Illusory Correlation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusory-correlation-bias.md)
* [Pareidolia Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/pareidolia-bias.md)
* [Blind Spot Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/blind-spot-bias.md)
* [Anectodal Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anecdotal-fallacy-bias.md)
* [Clustering Illusion](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/clustering-illusion-bias.md)
* [Neglect of Probability](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/neglect-of-probability-bias.md)
* [Illusion of Validity](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusion-of-validity-bias.md)
* [Masked man Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/masked-man-fallacy-bias.md)
* [Recency Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/recency-bias.md)
* [Anthropomorphism bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anthropomorphism-bias.md)
* [Confabulation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/confabulation-bias.md)
* [Naive cynicism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-cynicism-bias.md)
* [Naive realism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-realism-bias.md)

### [PerceptionExperience ](https://w3id.org/framester/data/framestercore/PerceptionExperience)

This frame contains perception words whose Perceivers have perceptual experiences that they do not necessarily intend to. For this reason we call the Perceiver role Perceiver\_passive. Comparing the Perception\_experience frame to the Perception\_active frame, we note that for some modalities there are different lexical items in each frame. For instance, whereas Perception\_experience has see, Perception\_active has look at. For other sense modalities, we find the same lexical items in both frames. To illustrate, consider the verb smell where I smell something rotten exemplifies its Perception\_experience use and Smell this to see if it's fresh exemplifies its Perception\_active sense. This frame also includes words which are not specific to any sense modality, including detect, perceive, perception, sense.

The PerceptionExperience Frameseter was used in:

* [Anectodal Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anecdotal-fallacy-bias.md)
* [Anthropomorphism bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anthropomorphism-bias.md)
* [Pareidolia Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/pareidolia-bias.md)
* [Masked man Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/masked-man-fallacy-bias.md)
* [Recency Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/recency-bias.md)
* [Naive realism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-realism-bias.md)

### [Predicting](https://w3id.org/framester/data/framestercore/Predicting)

A Speaker states or makes known a future Eventuality on the basis of some Evidence. The Weather Centre predicted that it would be warmer but wet for the weekend. The OECD forecast that UK interest rates would be 13 per cent by the end of 1989. Another seer who forecast a Tory majority -- without compromising his impartiality -- was Sir Robin Day . The European market is forecast to grow 18.1% by the end of next fiscal year.

The Predicting Frameseter was used in:

* [Illusion of Validity](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusion-of-validity-bias.md)

### [**Probability**](https://w3id.org/framester/data/framestercore/Probability)

This frame characterizes the likelihood that a Hypothetical\_event will happen as a position on a scale of impossible to inevitable. The likelihood can expressed as numerical Odds or a metaphorical representation of the Position on a scale. There's a 20 % chance that you'll succeed. The odds that he'll actually do it are one in a million.

The Probability Frameseter was used in:

* [Gambler's Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md)
* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)

### [**Sequence**](https://w3id.org/framester/data/framestercore/Sequence)

The words in this frame describe entities that occur in some temporally-ordered sequence. The entities thus have some sort of relation between them that might be described by the Relative\_time frame. However, at this time, this frame has no Frame Relation with that frame (though this is still under discussion). Additionally, it should be noted that the words in this frame have a metaphorical link to the words in Shape. Describe in detail the sequence of steps taken during an emergency.

The Sequence Frameseter was used in:

* [Anectodal Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anecdotal-fallacy-bias.md)
* [Gambler's Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md)
* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)

### [Statement](https://w3id.org/framester/data/framestercore/Statement)

The Statement Framester was used in:

* [Naive realism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-realism-bias.md)

## &#x20;Other resources&#x20;

Apart from Frameser entities and ODPs, on some occasions we exploited resources contained in **Dbpedia** and [**The Cognitive Characteristics Ontology**](https://smiy.sourceforge.net/cco/spec/cognitivecharacteristics.html) to align certain classes and properties. Here there is what we used for our work. [FOAF](http://xmlns.com/foaf/spec/) ontology was used during the realization of UML graphical models as well.

### Classes

### [DBpedia](https://www.dbpedia.org/about/)

**DBpedia** is a crowd-sourced community effort to extract structured content from the information created in various Wikimedia projects. This structured information resembles an **open knowledge graph (OKG)** which is available for everyone on the Web. A knowledge graph is a special kind of database which stores knowledge in a machine-readable form and provides a means for information to be collected, organised, shared, searched and utilised. Google uses a similar approach to create those knowledge cards during search. We hope that this work will make it easier for the huge amount of information in Wikimedia projects to be used in some new interesting ways.&#x20;

DBpedia data is served as Linked Data, which is revolutionizing the way applications interact with the Web. One can navigate this Web of facts with standard Web browsers, automated crawlers or pose complex queries with SQL-like query languages (e.g. SPARQL). Have you thought of asking the Web about all cities with low criminality, warm weather and open jobs? That’s the kind of query we are talking about.

#### About: [Animal](http://dbpedia.org/resource/Animal) <a href="#title" id="title"></a>

Animals are multicellular, eukaryotic organisms in the biological kingdom Animalia. With few exceptions, animals consume organic material, breathe oxygen, are able to move, can reproduce sexually, and go through an ontogenetic stage in which their body consists of a hollow sphere of cells, the blastula, during embryonic development. Over 1.5 million living animal species have been described—of which around 1 million are insects—but it has been estimated there are over 7 million animal species in total. Animals range in length from 8.5 micrometres (0.00033 in) to 33.6 metres (110 ft). They have complex interactions with each other and their environments, forming intricate food webs. The scientific study of animals is known as zoology.

The **Animal** resource was used in:

* [Anthropomorphism bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anthropomorphism-bias.md)

#### About: [Concept](http://dbpedia.org/resource/Concept) <a href="#title" id="title"></a>

Concepts are defined as abstract ideas. They are understood to be the fundamental building blocks of the concept behind principles, thoughts and beliefs.They play an important role in all aspects of cognition. As such, concepts are studied by several disciplines, such as linguistics, psychology, and philosophy, and these disciplines are interested in the logical and psychological structure of concepts, and how they are put together to form thoughts and sentences. The study of concepts has served as an important flagship of an emerging interdisciplinary approach called cognitive science.

The **Concept** resource was used in:

* [Anthropomorphism bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anthropomorphism-bias.md)

#### About: [Entity](http://dbpedia.org/resource/Entity) <a href="#title" id="title"></a>

An entity is something that exists as itself, as a subject or as an object, actually or potentially, concretely or abstractly, physically or not. It need not be of material existence. In particular, abstractions and legal fictions are usually regarded as entities. In general, there is also no presumption that an entity is animate, or present. The adjectival form is entitative.

The **Entity** resource was used in:

* [Masked man Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/masked-man-fallacy-bias.md)

#### About: [Illusion](https://dbpedia.org/page/Illusion)&#x20;

An illusion is a distortion of the senses, which can reveal how the mind normally organizes and interprets sensory stimulation. Although illusions distort the human perception of reality, they are generally shared by most people. Illusions may occur with any of the human senses, but visual illusions (optical illusions) are the best-known and understood. The emphasis on visual illusions occurs because vision often dominates the other senses. For example, individuals watching a ventriloquist will perceive the voice is coming from the dummy since they are able to see the dummy mouth the words.

The **Illusion** resource was used in:

* [Clustering Illusion](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/clustering-illusion-bias.md)
* [Illusory Correlation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusory-correlation-bias.md)
* [Pareidolia Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/pareidolia-bias.md)

#### About:[Knowledge](http://dbpedia.org/resource/Knowledge)

Knowledge can be defined as awareness of facts or as practical skills, and may also refer to familiarity with objects or situations. Knowledge of facts, also called propositional knowledge, is often defined as true belief that is distinct from opinion or guesswork by virtue of justification. While there is wide agreement among philosophers that propositional knowledge is a form of true belief, many controversies in philosophy focus on justification: whether it is needed at all, how to understand it, and whether something else besides it is needed. These controversies intensified due to a series of thought experiments by Edmund Gettier and have provoked various alternative definitions. Some of them deny that justification is necessary and replace it, for example, with reliability or the man

The Knowledge class was used in:

* [Anthropomorphism bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anthropomorphism-bias.md)
* [Illusion of Validity](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusion-of-validity-bias.md)
* [Masked man Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/masked-man-fallacy-bias.md)

#### About:[Success](http://dbpedia.org/resource/Success)

Success is the state or condition of meeting a defined range of expectations. It may be viewed as the opposite of failure. The criteria for success depend on context and may be relative to a particular observer or belief system. One person might consider a success what another person considers a failure, particularly in cases of direct competition or a zero-sum game. Similarly, the degree of success or failure in a situation may be differently viewed by distinct observers or participants, such that a situation that one considers to be a success, another might consider to be a failure, a qualified success or a neutral situation. For example, a film that is a commercial failure or even a box-office bomb can go on to receive a cult following, with the initial lack of commercial success even.

The **Success** resource was used in:

* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)

#### About: [Plant](http://dbpedia.org/resource/Plant) <a href="#title" id="title"></a>

Plants are predominantly photosynthetic eukaryotes of the kingdom Plantae. Historically, the plant kingdom encompassed all living things that were not animals, and included algae and fungi; however, all current definitions of Plantae exclude the fungi and some algae, as well as the prokaryotes (the archaea and bacteria). By one definition, plants form the clade Viridiplantae (Latin name for "green plants") which is sister of the Glaucophyta, and consists of the green algae and Embryophyta (land plants). The latter includes the flowering plants, conifers and other gymnosperms, ferns and their allies, hornworts, liverworts, and mosse

The **Plant** resource was used in:

* [Anthropomorphism bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anthropomorphism-bias.md)

### [FOAF](http://xmlns.com/foaf/spec/)

FOAF is a project devoted to linking people and information using the Web. Regardless of whether information is in people's heads, in physical or digital documents, or in the form of factual data, it can be linked. FOAF integrates three kinds of network: *social networks* of human collaboration, friendship and association; *representational networks* that describe a simplified view of a cartoon universe in factual terms, and *information networks* that use Web-based linking to share independently published descriptions of this inter-connected world. FOAF does not compete with socially-oriented Web sites; rather it provides an approach in which different sites can tell different parts of the larger story, and by which users can retain some control over their information in a non-proprietary format.

[foaf:Person](http://xmlns.com/foaf/spec/#term_Person)

The [`Person`](http://xmlns.com/foaf/spec/#term_Person) class represents people. Something is a [`Person`](http://xmlns.com/foaf/spec/#term_Person) if it is a person. We don't nitpic about whether they're alive, dead, real, or imaginary. The [`Person`](http://xmlns.com/foaf/spec/#term_Person) class is a sub-class of the [`Agent`](http://xmlns.com/foaf/spec/#term_Agent) class, since all people are considered 'agents' in FOAF.

The **foaf:Person** class was used for the realization of UML models in:

* [Insesitivy  to sample size](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/insensitivity-to-sample-size-bias.md)

## Properties

### [DBpedia](https://www.dbpedia.org/about/)

About:[produces](http://dbpedia.org/ontology/produces)

An Entity of Type: [Property](http://www.w3.org/1999/02/22-rdf-syntax-ns#Property), from Named Graph: <http://dbpedia.org/resource/classes#>, within Data Space: [dbpedia.org](http://dbpedia.org/)

The **produces** property was used in:

* [Gambler's Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md)
* [Confabulation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/confabulation-bias.md)

### [The Cognitive Characteristics Ontology](https://smiy.sourceforge.net/cco/spec/cognitivecharacteristics.html)

The *Cognitive Characteristics Ontology* specification provides a vocabulary for describing *cognitive pattern* within contexts, their temporal dynamics and their origins, on/ for the Semantic Web. The *Cognitive Characteristics Ontology* is built on top of the [*Weighted Interests Vocabulary v0.5* ](http://purl.org/ontology/wi/weightedinterests.html)and should probably substitute this ontology in the near future. That means all concepts and properties are imported from this ontology. Some of them are also redefined and renamed to broaden their meaning. Furthermore, the *Cognitive Characteristics Ontology* is inspired by the [*Unified User Context Model*](http://bit.ly/9WiJ5g), the [*General User Model Ontology*](http://www.inf.unibz.it/~ricci/ATIS/papers/UM05_Gumo.pdf), the [*User Modelling for Information Retrieval Language*](http://www.media.mit.edu/~chaiwei/papers/usermodeling.pdf) and all their fundamental sources, and finally, the discussions on the [*FOAF developers mailing list*](http://lists.foaf-project.org/mailman/listinfo/foaf-dev).

#### cco:[belief](https://smiy.sourceforge.net/cco/spec/cognitivecharacteristics.html#belief)

*has belief* - An uncertain relation for competence representation. That means beliefs, persuasions or opinions, which can also be misconceptions.

The **cco:belief** property was used in:

* [Anectodal Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anecdotal-fallacy-bias.md)
* [Gambler's Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md)
* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)
* [Blind Spot Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/blind-spot-bias.md)
* [Confabulation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/confabulation-bias.md)
* [Naive realism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-realism-bias.md)

### [Pattern NewsReportingEvent](http://semantic.cs.put.poznan.pl/ontologies/newsreportingevent.owl#owns)

The pattern can be used for modelling situations in which we are not certain that a particular actual event has the properties which were described in a news message. We want to define the properties of an actual event which were reported (time, place, actors, subevents, cause, effect etc.), but not to treat them as universal, verified knowledge. The pattern also allows to define who is responsible for a particular description of an event and how this description is dealt with

**news**[:owns](< http://semantic.cs.put.poznan.pl/ontologies/newsreportingevent.owl#owns>)

NewsProvider ows, e.g. Fox News Channel is owned by Fox Entertainment Group, which also owns other Media (FXX Channel, etc.). This is an universal property, it can be also used in different context (e.g. Ruslana owns a Persian cat).

The **news**[:owns](< http://semantic.cs.put.poznan.pl/ontologies/newsreportingevent.owl#owns>) property was used in:

* [Illusion of Validity](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusion-of-validity-bias.md)
* [Masked man Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/masked-man-fallacy-bias.md)
* [Recency Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/recency-bias.md)

### Properties Created *ad hoc*

Here are shown the properties we created from scratch to be used in the different ontologies. Most of them are quite general in order to be reused in many ways.

1\. **hasBiasedOpinion**: a property connecting a Person who has a biased opinion about something eg the possible outcome of an Event such as a Random or Chance-based Occurrence  or a person who has a biased Opinion about a Bias.

* [Blind Spot Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/blind-spot-bias.md)
* [Gambler's Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md)
* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)
* [Naive cynicism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-cynicism-bias.md)

2\. **hasOutcome(**&#x69;nvers&#x65;**:isOutcomeOf)**: A property linking an entity that produces an Outcome. Eg: a series of events to the same Outcome or the final decision produces by a decision-making process.

* [Gambler's fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md)
* [Recency illusion](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/recency-bias.md)
* [Naïve cynicism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-cynicism-bias.md)

3\. **hasOutcomeEffect(**&#x69;nvers&#x65;**:isOutcomeEffectOf)**: A property linking a series of events which Outcome brings to the same effect&#x20;

* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)

4.**ProduceOutcomeEffect(**&#x69;nvers&#x65;**:isProducedEffectBy)**: a property linking an event which Outcome will produce an effect

* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)

5\. **creates**: a property connecting an entity and the cognitive effect that creates.

* [Anecdotal fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anecdotal-fallacy-bias.md)
* [Clustering illusion](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/clustering-illusion-bias.md)

7\. **isBiasedBy**: a property that connects a Person that is biased by the idea of seeing a Pattern such as meaningful shapes made by a visual stimulus.

* [Pareidolia Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/pareidolia-bias.md)

8\. **isPerceivedAs**: a property that links the cognitive process of perceiving something in a specific way. E.g. a person being aware of a trend in an activity that is perceived as a pattern in that activity. E.g. an assistance process being perceived as Malicious.

* [Illusory correlation](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusory-correlation-bias.md)
* [Naïve realism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-realism-bias.md)
* [Naïve cynicism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-cynicism-bias.md)

9\. **decide**: a property that links the cognitive process of deciding how to act after receiving information.

* [Neglect of Probability](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/neglect-of-probability-bias.md)

10\. **haveKnowledge**: a property that links the cognitive process of storing some information regarding a topic.

* [Neglect of Probability](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/neglect-of-probability-bias.md)
* [Insensitivity to sample size](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/insensitivity-to-sample-size-bias.md)

11\. **involves**: involves: a property connecting an entity to any kind of thing that is related to that Entity. E.g.: an Activity and what is involved during the execution of that Activity.

* [Clustering illusion](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/clustering-illusion-bias.md)
* [Pareidolia Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/pareidolia-bias.md)
* [Recency illusion](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/recency-bias.md)
* [Anthropomorphism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anthropomorphism-bias.md)
* [Anecdotal fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anecdotal-fallacy-bias.md)
* [Masked man Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/masked-man-fallacy-bias.md)

12\. **misjudged**: a property that links the cognitive process of misinterpreting information.

* [Naïve cynicism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-cynicism-bias.md)

13\. **hasEffect**: A property linking an Entity (a perceived correlation between two variables in a pattern or a perceived pattern due to any kind of external stimulus) and the illusory effect that this Entity produces.

* [Pareidolia Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/pareidolia-bias.md)
* [Illusory correlation](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusory-correlation-bias.md)

14\. **hasInfluence**: A property connecting an Entity that affects in different ways another entity.

* [Pareidolia ](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/pareidolia-bias.md)
* [Gambler's fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md)
* [Hot Hand Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md)

15.**HasAttribute**: Connects an object to one of its attributes.

* [Illusion of validity](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusion-of-validity-bias.md)&#x20;

16.**hasFeature**: Connects an entity to its relative feature or intention.&#x20;

* [Masked man Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/masked-man-fallacy-bias.md)

17\. **hasEffect**: A property connecting an Entity that affects in different ways another entity.

* [Pareidolia Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/pareidolia-bias.md)
* [Illusory correlation](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusory-correlation-bias.md)

18. **rejects**: The act of denying a particular intention in favour of one or more others.

* [Masked man Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/masked-man-fallacy-bias.md)

19. **supports**: The act of confirming a particular intention at the expense of one or more others.

* [Masked man Fallacy](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/masked-man-fallacy-bias.md)

20. &#x20;**receives**: denotes the capability of an entity to accept or obtain information, data, or objects from another source.

* [Naïve cynicism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-cynicism-bias.md)

21. **focusesOn**: describes the primary subject or area of attention associated with an entity or concept.

* [Blind Spot Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/blind-spot-bias.md)

22. **isUnawareOf**: indicates the lack of knowledge or awareness of a particular entity or concept by another entity.

* [Blind Spot Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/blind-spot-bias.md)

23. &#x20;**hasMemoryGap**: signifies a period or instance where an entity lacks recall or memory of specific information or events.

* [Confabulation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/confabulation-bias.md)

24. **fillsMemoryGap**: represents the action or process of replenishing or restoring missing or incomplete memory or information within an entity or system.

* [Confabulation Bias](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/confabulation-bias.md)

25. **ignores**: denotes the deliberate disregard or lack of attention to a particular entity, concept, or information by another entity.

* [Naïve realism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-realism-bias.md)

26. **hasBias**: Indicates an individual possesses Naive Realism Bias

* [Naïve realism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-realism-bias.md)

27. **hasPerspective**: this property connect a perspective that a person or a group of Persons has about an aspect of the real world.

* [Naïve realism](/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/naive-realism-bias.md)
