> For the complete documentation index, see [llms.txt](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/illusory-correlation-bias.md).

# Illusory Correlation Bias

Creation and development process of Illusory Correlation bias Ontology

## Visualize the ontology with [WebVOWL](https://service.tib.eu/webvowl/#iri=https://raw.githubusercontent.com/corrado877/CognitiveBiasOntologies/main/IllusoryOfCorrelationOntology/IllusoryOfCorrelationOntology.owl)

### [OWL file of the ontology](https://raw.githubusercontent.com/corrado877/CognitiveBiasOntologies/main/IllusoryOfCorrelationOntology/IllusoryOfCorrelationOntology.owl)

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2F03RqLA6rRAGedpzqv01v%2Fillusory_Correlation_ontology.png?alt=media&amp;token=526f60ad-10e0-4f4e-a106-0c677edea9d7" alt=""><figcaption><p><em>UML of the Illusory Correlation Bias Ontology</em></p></figcaption></figure>

## Definition provided by Chat GTP of Illusory Correlation bias

*Give me a definition of Illusory correlation bias*

Illusory correlation bias refers to the tendency of individuals to perceive a relationship between two variables even when no such relationship exists or when the relationship is much weaker than assumed. This bias often occurs when people incorrectly associate two events or characteristics because they occur together in a particular pattern or sequence, leading to the erroneous belief that there is a causal connection between them.

In simpler terms, illusory correlation bias occurs when people perceive a correlation between variables that are actually unrelated or have a very weak association. This bias can arise due to cognitive processes such as selective attention, confirmation bias, or the influence of prior beliefs and stereotypes. It can lead to erroneous judgments, stereotypes, and misinterpretations of data, which can have significant implications in various contexts, including decision-making, interpersonal relations, and societal perceptions.

## Ten example scenarios of the Illusory Correlation Bias provided by Chat Gtp

*Give me ten scenarios of Illusory Correlation Bias*

1. **Superstitions**: A baseball player believes that wearing a specific pair of socks during a winning game brings good luck. However, the socks have no impact on the game's outcome, yet the player associates wearing them with success.
2. **Health Habits**: Someone may falsely believe that taking vitamin C supplements prevents colds because they happened to take them before a few cold-free winters, even though scientific evidence shows otherwise.
3. **Stereotyping**: An employer may wrongly assume that employees who wear glasses are more intelligent because they remember a few instances where intelligent colleagues happened to wear glasses.
4. **Luck and Rituals**: A person might believe that knocking on wood prevents bad luck because they recall instances where they avoided misfortune after performing the ritual, despite the lack of any causal relationship.
5. **Perception of Crime**: A neighborhood might falsely believe that people from a certain ethnic group are more likely to commit crimes because of a few highly publicized incidents involving individuals from that group.
6. **Sports Performance**: A fan might believe that wearing a particular jersey during a game boosts their team's chances of winning because they associate past victories with wearing that jersey, even though the jersey doesn't influence the game.
7. **Investment Success**: An investor may wrongly believe that checking the stock market every hour leads to better investment decisions because they remember a few instances where they made successful trades after closely monitoring the market.
8. **Examining Prejudices**: A teacher might falsely believe that students from a specific socioeconomic background are more likely to excel academically because they recall a few exceptional students from that background, overlooking other factors that contributed to their success.
9. **Relationships**: A person might wrongly assume that all individuals from a particular profession are arrogant because they encountered a few arrogant individuals from that profession.
10. **Weather and Events**: People may believe that their mood is worse on rainy days because they remember feeling down during previous rainy days, overlooking other factors that may have influenced their mood.

## User Story: *Lucky Charm Socks*

*Consider Scenario 6 and give me a user story from it*

As a dedicated baseball player, I've noticed a peculiar trend during our winning streaks: I consistently wear a specific pair of socks adorned with my team's colors. Over time, I've come to associate these socks with our victories, believing they possess some kind of lucky charm.

Despite knowing deep down that winning in baseball is about skill, teamwork, and strategy, I find myself attributing our success to the socks. Even when we win on days I forget to wear them, I still cling to the notion that they play a significant role in our performance.

The more wins we accumulate while I'm wearing the socks, the stronger my belief becomes in their magical influence. Teammates and coaches have noticed my attachment and joke about their mystical powers, but for me, it's more than just a superstition—it's become a deeply ingrained belief.

I'm starting to realize that my conviction in the socks' luckiness might be more about my mind's tendency to find patterns where none exist. It's as if my brain is creating an illusory correlation between wearing the socks and winning games, despite the lack of any real causal relationship.

Nevertheless, the socks provide a sense of comfort and confidence, a psychological boost that helps me perform at my best when the pressure is on. Even as I acknowledge the irrationality of my belief, I can't seem to shake the feeling that those socks hold the key to our success on the field.

## Classes and properties

Classes for the Illusory of Correlation Ontology extracted from the user story and readapted with the help of Chat GPT.

### Classes

1. **Person**: (Baseball Player): a class representing a person that has the Illusory Correlation Bias.
2. **Variables**: Represents the variables or attributes that individuals mistakenly perceive to be correlated. **Subclasses**: VariableEntity1 (pair of socks); VariableEntity2(Victories).
3. **CorrelationRelationship**(VariablesCorrelation): a class defining the correlation that should be between the variables.
4. **VariablesPattern**: a class representing a trend where, in the individual’s mind, two variables tend to occur together frequently in a situation, an event or an activity. **SuperClass**: Pattern
5. **Perception** (TrendPerception): Represents the cognitive process by which individuals perceive a potential trend in a situation, event or activity.
6. **Activity** (Baseball Match): A class representing the activity affected by or in which is involved a cognitive process.

### &#x20;Properties

Most of the properties of the Illusory Correlation bias have been first extracted using chat GTP and then readapted considering the content ODPs in the “Used content ODP section”. The following are created ad-hoc properties for the ontology.

1. **isPerceivedAs**: a property that links the cognitive process of being aware of something like a trend in activity and what is perceived as part of the trend.
2. **hasEffect**: a property linking an Entity (a perceived correlation between two variables in a pattern or a perceived pattern due to any kind of external stimulus) and the illusory effect that this Entity produce.

## Competency Questions

1\) *What is the effect caused by the perceived correlation between the variables?*

The effect is an illusory effect.

```sparql
SELECT ?Effect
          WHERE {
                 ?Correlation rdf:type fs:CognitiveConnection;
                              cbo:hasEffect ?Effect. 
}
```

&#x20;

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FhAoL0xH5TuWwT7hVGdDI%2FPicture1.png?alt=media&amp;token=e613568c-536d-43a1-8dd6-ea9ae442ff2e" alt=""><figcaption><p><em>Sparql Query n.1</em></p></figcaption></figure>

&#x20;

2\) *Due to the mind’s tendency how the trend is perceived by the Baseball player?*

The trend is perceived as sort of Pattern.

```sparql
Select ?Pattern
WHERE {?Trend rdf:type fs:BecomingAware;
              cbo:isPercievedAs ?Pattern.
                                              
}
```

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FklTbLILXPWzsNampk1VB%2Fimage.png?alt=media&amp;token=9fbabfef-5f5f-40bf-a9e3-8668a590f973" alt=""><figcaption><p><em>Sparql Query n.2</em></p></figcaption></figure>

3\) *What are the elements that characterize the pattern of the trend noticed by the player?*

The elements are a pair of socks and the victories obtained while wearing them.

```sparql
SELECT ?variables
WHERE {?variables partof:isPartOf ?Pattern.
 } 
```

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FIVrUbzNmCcVa8631JydA%2Fimage.png?alt=media&amp;token=5d13ba54-cc4a-49af-9675-2e6958f3bf82" alt=""><figcaption><p><em>Sparql Query n.3</em></p></figcaption></figure>

## Key Concepts

The following represent some of the key concepts extracted from the user story that have been used to align some of the classes of Illusory Correlation bias Ontology with the semantic frames contained in the Framester Hub.

* Correlation
* Individual
* Relationship
* Belief
* Pattern
* Variable
* Sequence
* Situation
* Association
* Activity
* Event

## Chosen Framster Frames

These are the framester frames used for the alignment of the ontology ‘s classes:

### [**Activity**](https://w3id.org/framester/data/framestercore/Activity)

This is an abstract frame for durative activities, in which the Agent enters an ongoing state of the Activity, remains in this state for some Duration of Time, and leaves this state either by finishing or by stopping. The Agent's Activity should be intentional. This frame is intended mostly for the inheritance of common FEs, and to provide the frame structure for the beginning, ongoing, finish, or stop stage of an Activity, each of which constitutes a subframe of this frame. This frame should be compared to the Process frame

Activity(Baseball\_Match)=>fs:Activity.

### [BecomingAware](https://w3id.org/framester/data/framestercore/BecomingAware)&#x20;

Words in this frame have to do with a Cognizer adding some Phenomenon to their model of the world. They are similar to Coming-to-believe words, except the latter generally involve reasoning from Evidence. The words in this frame take direct objects that denote entities in the world, and indicate awareness of those entities, without necessarily giving any information about the content of the Cognizer's belief or knowledge. These words also resemble perception words, since creatures often become aware of things by perceiving them. Later that night, they found the barely-alive victim inside the Red Hall estate flat. Almost immediately, the police discovered the wrought-iron crypt gate swinging open. In the bag on the tableI could vaguely discern two bottles of wine and several cartons of cakes and other goodies. People passing through recognize it from afar, by the clouds of coal dust darkening the air. General Grammatical Observations: Passive forms of the verbs in this frame can occur with extraposed clauses expressing Phenomenon: That year it was discovered that consumers preferred the older model. It is not always recognized how much work goes into a dinner party.

Perception(TrendPercetpion)=>fs:BecomingAware

### [CognitiveConnection](https://w3id.org/framester/data/framestercore/CognitiveConnection)&#x20;

A concept, Concept\_1, is related causally or collocationally to another concept, Concept\_2, by means of some Evidence. They may be related only under certain Circumstances or from a certain Point\_of\_view. The two concepts may be expressed collectively as associated Concepts. Any cognizer is deprofiled.

CorrelationRelationship (Variables Correlation)=>fs:CognitiveConnection

### [Pattern](#pattern-https-w3id.org-framester-data-framestercore-pattern)

This frame describes the interrelation of a collection of Entities; they may be physical entities or shapes in a recognizable configuration, a pattern of events, or a relation among abstract entities. The pattern is not the individual Entities nor the set of Entities, but an abstraction of their interrelations, as a gestalt. The Cougers are playing in a Wing-T formation tonight. The auditors noticed a suspicious pattern of withdrawals from the maintenance account . The digits of irrational numbers do not repeat in any kind of pattern.

VariablesPattern=>cbo:VariablesPattern rdfs:subClassOf fs:Pattern

### [**People**](https://w3id.org/framester/data/framestercore/People)&#x20;

This frame contains general words for Individuals, i.e. humans. The Person is conceived of as independent of other specific individuals with whom they have relationships and independent of their participation in any particular activity. They may have an Age, Descriptor, Origin, Persistent\_characteristic, or Ethnicity. A man from Phoenix was shot yesterday. She gave birth to a screaming baby yesterday. I study 16-year-old female adolescents. I am dating an African-American man. She comforted the terrified child. I always thought of him as a stupid ma

Person(BaseballPlayer)=> fsyn:Player=>rdfs:subClassOf fs:People

## Used Content ODPs

The following represent the Content Ontology Design Patterns adopted to model the Illusory Correlation Ontology. Most of these ODP’s classes and properties have been used and combined during the modeling process.&#x20;

### [Experience and Observation](http://ontologydesignpatterns.org/wiki/Submissions:Experience_%26_Observation)

To represent the epistemological "missing link" between a cognitive activity, e.g. the interaction with a cultural object, and any evidence of the effects this activity has on the individuals that are engaged with it; what can collectively be considered as an experience

### [Part Of](http://ontologydesignpatterns.org/wiki/Submissions:PartOf)

To represent entities and their parts.

### Entities used from other resources

### [DBpedia](https://www.dbpedia.org/about/)

#### [Illusion](https://dbpedia.org/page/Illusion)&#x20;

An illusion is a distortion of the senses, which can reveal how the mind normally organizes and interprets sensory stimulation. Although illusions distort the human perception of reality, they are generally shared by most people. Illusions may occur with any of the human senses, but visual illusions (optical illusions) are the best-known and understood. The emphasis on visual illusions occurs because vision often dominates the other senses. For example, individuals watching a ventriloquist will perceive the voice is coming from the dummy since they are able to see the dummy mouth the words.

## Bibliography

The following resources have been used to have a better understanding of the Illusory of Correlation Bias

Wikipedia, *Illusory of Correlation*, <https://en.wikipedia.org/wiki/Illusory\\_correlation>

David L. Hamilton, Robert K. Gifford, *Illusory correlation in interpersonal perception: A cognitive basis of stereotypic judgments,* in Journal of Experimental Social Psychology, Volume 12, Issue 4, 1976, pp. 392-407.

Carter, Rachel A., *Illusory correlation and perceived criminality*. (2018). College of Arts & Sciences Senior Honors Theses. Paper 179 (<https://ir.library.louisville.edu/honors/179>).
