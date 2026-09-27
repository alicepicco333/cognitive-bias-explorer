> For the complete documentation index, see [llms.txt](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/pareidolia-bias.md).

# Pareidolia Bias

Creation and development process of Pareidolia bias Ontology

## Visualize the ontology with [OWLGrEd](http://owlgred.lumii.lv/online_visualization/3stk)

### [OWL file of the ontology ](https://raw.githubusercontent.com/corrado877/CognitiveBiasOntologies/main/PareidoliaOntology/PareidoliaBiasOntology.owl)

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2F30nXUTasjObodCYQUy0V%2FPareidolia_ontology.png?alt=media&amp;token=a88a9500-0679-432d-be8e-fc1e6e6aa5cd" alt=""><figcaption><p><em>UML file of Pareidolia Bias Ontology</em></p></figcaption></figure>

## &#x20;Definition provided by Chat GTP of Pareidolia bias

*Give me a definition of Pareidolia bias*

Pareidolia bias is a psychological phenomenon in which individuals perceive familiar patterns, shapes, or meaningful images, such as faces or objects, where none actually exist. This tendency leads people to interpret ambiguous stimuli as something recognizable and significant, even when there is no intentional design or pattern present. Pareidolia bias can occur in various sensory modalities, including visual, auditory, and tactile, and it often influences how individuals interpret stimuli in their environment, such as seeing shapes in clouds or faces in inanimate objects. This bias reflects the brain's natural inclination to organize and make sense of sensory information, sometimes leading to the perception of patterns or meanings that are not objectively there.

&#x20;

## Ten example scenarios of the Pareidolia Bias provided by Chat Gtp

*Give me ten scenarios of Pareidolia Bias*

1. **Cloud Shapes**: Observing clouds and interpreting them as resembling animals, faces, or objects.
2. **Seeing Faces in Inanimate Objects**: Perceiving faces in items like electrical sockets, rocks, or tree bark due to the arrangement of patterns or shapes.
3. **Religious Apparitions**: Interpreting natural phenomena, such as stains on walls or marks on food, as religious symbols or figures.
4. **Rorschach Inkblot Test**: Viewing ambiguous inkblot patterns and interpreting them as meaningful shapes or objects based on personal perceptions.
5. **Lunar Pareidolia**: Observing features on the moon's surface and perceiving patterns that resemble human faces or figures.
6. **Hearing Voices in White Noise**: Listening to static noise or random sounds and interpreting them as voices or messages.
7. **Finding Messages in Music**: Listening to songs played backward and interpreting the reversed sounds as hidden messages or words.
8. **Perceiving Patterns in Random Data**: Finding order or patterns in random sequences of numbers, letters, or symbols.
9. **Seeing Religious Figures in Food**: Discovering images resembling religious figures or symbols in food items like toast, vegetables, or fruits.
10. **Shadow Pareidolia**: Observing shadows cast by objects and interpreting them as resembling recognizable shapes or figures, such as animals or people.

## User Story: *Faces Amongst Bark: Exploring Pareidolia in Nature*

*Consider Scenario 2 and give me a user story from it*

As someone intrigued by the mysteries of perception and cognition, I often find myself drawn to the curious phenomenon of pareidolia bias. During one of my walks in the local park, my attention is captured by a weather-beaten tree trunk adorned with layers of textured bark, standing proudly amidst the foliage.

Intrigued by the interplay of light and shadow, I notice a peculiar arrangement of knots and ridges that seem to form the semblance of a face. The patterns etched into the bark evoke a sense of familiarity, as if nature itself is playing a game of hide-and-seek with my perception.

Despite my rational understanding of pareidolia bias, I can't help but marvel at how effortlessly my mind constructs meaningful shapes from random stimuli. The face staring back at me from the tree trunk is a testament to the power of human cognition to find order in chaos, to see the familiar in the abstract.

Captivated by this moment of cognitive trickery, I snap a photograph, eager to capture the ephemeral beauty of pareidolia in nature. As I continue my stroll through the park, I'm reminded that the world around us is filled with hidden wonders, waiting to be revealed to those who dare to see beyond the surface.

## Competency Questions

*1) During the walk in the park, what attracts the attention of the story's protagonist?*

An ambiguous Stimulus

```sparql
SELECT ? stimulus
            WHERE {?activity rdf:type fs:Activity;
                           cbo:involves ?Stimulus.
}
```

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2F6r4BW5Dcu8dQfQV9DCty%2Fimage.png?alt=media&amp;token=4b657094-f7a8-4664-a3b3-2dd38f8be20d" alt=""><figcaption><p><em>Sparql query n.1</em></p></figcaption></figure>

&#x32;*) According to the user story, during the walk what kind of stimulus induce the mind in the creation of meaningful shapes?*

&#x20;A visual Stimulus

```sparql
SELECT ?stimulusType ?stimuluslabel
            WHERE {?activity rdf:type fs:Activity;
                                                cbo:involves ?stimulus.
                            ?stimulus rdf:type cbo:AmbiguousoStimulus.
                            ?stimulusType rdfs:subClassOf cbo:AmbiguousStimulus.
                            ?stimulusLabel rdf:type ?stimulusType.
 FILTER (?stimulusType!=cbo:AmbiguousStimulus)
}
```

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FjLWdSWEtZOvLodRcQkFt%2Fimage.png?alt=media&amp;token=917320cc-8f26-4e85-b3b6-2cdf338c4166" alt=""><figcaption><p><em>Sparql query n.2</em></p></figcaption></figure>

3\) *By what elements is the perception of the protagonist of the story deceived?*

It is deceived by seeing human shapes in a tree-trunk.

```sparql
SELECT ?element
WHERE {?person rdf:type fs:People;
                                   cbo:isBiasedBy ?element.
            ?element cbo:hasInfluence ?perception.
            ?perception rdf:type fs:PerceptionExperience.
} 
```

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2F7PmaHs6XaIgDrZu2NlNA%2Fimage.png?alt=media&amp;token=a3fc78fe-ea31-4125-adde-a5c8dc579627" alt=""><figcaption><p><em>Sparql query n.3</em></p></figcaption></figure>

## Classes and properties

### Classes

Classes for the Pareidolia Bias Ontology extracted from the user story and readapted with the help of Chat GPT.

1. **Person**(Hiker): a class representing a person who is experiencing the Pareidolia Bias.
2. **Perception**(SensorialPerception): Represents the cognitive process by which an individual perceives something that captures his/her attention.
3. **PerceptionConditio**n(Walk): Represents instances of classes such as events, activities or situations where perception occurs.
4. **AmbiguousStimulus:** Any kind of Stimuli that lacks clear or distinct features, leading to potential misinterpretation. **Subclass**: VisualStimulus
5. **RecognizablePattern**(FaceShape): Represents patterns or shapes that are identifiable or interpretable by individuals. **SuperClass**: Pattern
6. **IllusoryEffect**: represents the misinterpretation during the cognitive process caused by the recognized pattern.

### Properties

&#x20;The following are created ad-hoc properties for the ontology. Other properties of the Pareidolia bias ontology have been extracted using chat GTP and then readapted considering the content ODPs in the “Used content ODP section”.

**isBiasedBy**: a property that connects a Person that is biased by the idea of perceiving a pattern such as meaningful shapes made by a stimulus.

**involves**: a property connecting an entity such as Activity to any kind of thing that is involved during the execution of that Activity.

**hasInfluence**: A property connecting an Entity (Pattern) that affects in different ways another entity (PerceptionExperience).

## Key Concepts

The following represent some of the key concepts extracted from the user story that have been used to align some of the classes of Pareidolia Bias Ontology with the semantic frames contained in the Framester Hub.

* Pattern
* Person
* Stimuli
* Perception
* Attention
* Resemblance
* Semblance
* Misinterpretation
* Illusion
* Misconception
* Condition
* Situation
* Activity

## Chosen Framster Frames

These are the framester frames used for the alignment of the ontology's classes:

### [Pattern](#pattern-https-w3id.org-framester-data-framestercore-pattern)

This frame describes the interrelation of a collection of Entities; they may be physical entities or shapes in a recognizable configuration, a pattern of events, or a relation among abstract entities. The pattern is not the individual Entities nor the set of Entities, but an abstraction of their interrelations, as a gestalt. The Cougers are playing in a Wing-T formation tonight. The auditors noticed a suspicious pattern of withdrawals from the maintenance account . The digits of irrational numbers do not repeat in any kind of pattern.

RecognizablePattern(Faceshape)=>cbo:RecognizablePattern rdfs:subClassOf fs:Pattern

### [PerceptionExperience ](https://w3id.org/framester/data/framestercore/PerceptionExperience)

This frame contains perception words whose Perceivers have perceptual experiences that they do not necessarily intend to. For this reason we call the Perceiver role Perceiver\_passive. Comparing the Perception\_experience frame to the Perception\_active frame, we note that for some modalities there are different lexical items in each frame. For instance, whereas Perception\_experience has see, Perception\_active has look at. For other sense modalities, we find the same lexical items in both frames. To illustrate, consider the verb smell where I smell something rotten exemplifies its Perception\_experience use and Smell this to see if it's fresh exemplifies its Perception\_active sense. This frame also includes words which are not specific to any sense modality, including detect, perceive, perception, sense.

Perception=>fs:PerceptionExperience

### [**Activity**](https://w3id.org/framester/data/framestercore/Activity)

This is an abstract frame for durative activities, in which the Agent enters an ongoing state of the Activity, remains in this state for some Duration of Time, and leaves this state either by finishing or by stopping. The Agent's Activity should be intentional. This frame is intended mostly for the inheritance of common FEs, and to provide the frame structure for the beginning, ongoing, finish, or stop stage of an Activity, each of which constitutes a subframe of this frame. This frame should be compared to the Process frame

PerceptionCondition(Walk)=>fs:Activity.

### [**People**](https://w3id.org/framester/data/framestercore/People)&#x20;

This frame contains general words for Individuals, i.e. humans. The Person is conceived of as independent of other specific individuals with whom they have relationships and independent of their participation in any particular activity. They may have an Age, Descriptor, Origin, Persistent\_characteristic, or Ethnicity. A man from Phoenix was shot yesterday. She gave birth to a screaming baby yesterday. I study 16-year-old female adolescents. I am dating an African-American man. She comforted the terrified child. I always thought of him as a stupid ma

Person(Hiker)=> fsyn:Hiker=>rdfs:subClassOf fs:People

## Used Content ODPs

The following represent the Content Ontology Design Patterns adopted to model the Pareidolia Ontology. Most of these ODP’s classes and properties have been used and combined during the modeling process.

### [Experience and Observation](http://ontologydesignpatterns.org/wiki/Submissions:Experience_%26_Observation)

To represent the epistemological "missing link" between a cognitive activity, e.g. the interaction with a cultural object, and any evidence of the effects this activity has on the individuals that are engaged with it; what can collectively be considered as an experience.

### Entities used from other resources

### [DBpedia](https://www.dbpedia.org/about/)

#### [Illusion](https://dbpedia.org/page/Illusion)&#x20;

An illusion is a distortion of the senses, which can reveal how the mind normally organizes and interprets sensory stimulation. Although illusions distort the human perception of reality, they are generally shared by most people. Illusions may occur with any of the human senses, but visual illusions (optical illusions) are the best-known and understood. The emphasis on visual illusions occurs because vision often dominates the other senses. For example, individuals watching a ventriloquist will perceive the voice is coming from the dummy since they are able to see the dummy mouth the words.

## Bibliography

Wikipedia, *Pareidolia*, <https://en.wikipedia.org/wiki/Pareidolia>

Muhammad Rahman, Jeroen J.A. van Boxtel, *Seeing faces where there are none: Pareidolia correlates with age but not autism traits*, Vision Research,Vol. 199,2022.

&#x20;
