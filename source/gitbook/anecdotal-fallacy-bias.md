> For the complete documentation index, see [llms.txt](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/anecdotal-fallacy-bias.md).

# Anecdotal Fallacy Bias

Creation and development process of Anecdotal Fallacy bias Ontology

## Visualize the ontology with[ OWLGrEd](http://owlgred.lumii.lv/online_visualization/9qj4#)

### [OWL file of the ontology](https://raw.githubusercontent.com/corrado877/CognitiveBiasOntologies/main/Anecdotal_fallacy/Anecdotal_fallacy.owl)

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FzsbVMwgNCAWiQu9PboH7%2FAnecdotal_fallacy.png?alt=media&amp;token=a31c8971-44a5-490c-9e57-4f1d1817ddd1" alt=""><figcaption><p><em>UML of Anectodal Fallacy Bias</em></p></figcaption></figure>

&#x20;

## Definition provided by Chat GPT of Anecdotal fallacy bias

*Give me a definition of Anecdotal Fallacy bias*

The anecdotal fallacy, also known as the anecdotal evidence or personal anecdote fallacy, occurs when someone relies on personal experiences or isolated examples instead of considering a broader range of evidence or statistical data. This bias involves drawing conclusions based on a single or a few examples rather than looking at the larger picture.

While anecdotes can be powerful and emotionally compelling, they are not necessarily representative of the general reality or the overall trend. It's important to recognize that individual experiences can vary widely, and relying solely on anecdotes may lead to inaccurate or biased conclusions.

&#x20;

## Ten example scenarios of the Anecdotal Fallacy provided by Chat GPT

*Give me ten example scenarios of Anecdotal Fallacy*

1. Health and Wellness: Someone claiming that a specific diet is universally effective because they know a single person who lost a significant amount of weight on that diet.
2. Product Endorsements: A person endorsing a beauty product solely based on their personal experience, without considering the diverse range of skin types and individual reactions.
3. Weather Beliefs: Believing that global warming isn't real because it's currently cold in a particular region, ignoring the broader scientific consensus on climate change.
4. Investment Decisions: Investing in a stock solely because a friend or family member made a significant profit from it without considering the overall market trends.
5. Educational Strategies: Arguing that a particular teaching method is ineffective because one person didn't succeed in a class, ignoring the potential impact of various factors on learning outcomes.
6. Traffic Routes: Refusing to take a particular route to work because of one bad experience with traffic, without considering other factors that may have influenced that specific incident.
7. Political Beliefs: Forming political opinions based on personal encounters or stories without considering broader historical, economic, or sociopolitical contexts.
8. Technology Preferences: Dismissing a smartphone brand as inferior because one person had a negative experience, without considering the overall reputation and reviews.
9. Fitness Programs: Believing that a specific exercise routine guarantees results because a friend achieved success with it, without considering individual variations in fitness levels and goals.
10. Educational Policies: Opposing a new school policy because one parent had a negative experience, without considering the potential benefits or the perspectives of other parents and students.

&#x20;

## User Story: Weight loss journey

*Consider scenario 1 and give me a small user story from it*

As a health-conscious individual, I want to adopt a new diet plan, so that I can achieve my weight loss goals. I will start researching different diet plans available in the market. I come across a testimonial from a friend who claims to have lost a significant amount of weight using the "SuperShred" diet plan. Intrigued by the success story, I decide to follow the "SuperShred" diet plan based on my friend's positive experience. I diligently adhere to the diet plan for a month, documenting my meals and progress.

At the end of the month, I notice a minimal change in my weight, and I share my experience with others, advocating for the effectiveness of the "SuperShred" diet. However, I fail to consider that individual responses to diet plans can vary, and factors such as metabolism, lifestyle, and overall health play a significant role. Without consulting broader nutritional guidelines or seeking professional advice, I continue promoting the "SuperShred" diet solely based on my personal experience. Over time, I encounter challenges or negative effects that were not apparent in the short term, but I attribute these solely to individual variations rather than considering a more comprehensive understanding of nutrition.

&#x20;

## Competency questions

* **What influenced my diet choice?**\
  The story of my friend losing weight.
* **How did this influence my view on the diet plan?**\
  My perception in the activity of losing weight was influenced by the Bias because it made me perceive the diet plan as something that could work for evreyone and it didn't make me see it as something that works only on a specific individual level.

&#x20;

## Classes and properties

### Classes:

Evidence: A class representing different types of evidence, including anecdotal evidence.

PersonalExperience: A subclass of Evidence representing individual experiences or anecdotes.

StatisticalData: A subclass of Evidence representing data derived from statistical analyses.

### Properties:

reliesOnEvidence: A property linking instances of Conclusion to the evidence on which they are based, connecting instances of PersonalExperience, StatisticalData, or ScientificStudy.

isBasedOn: A property linking instances of PersonalExperience, StatisticalData, or ScientificStudy to the broader concept of Evidence.

leadsToBelief: A property linking instances of Evidence to Conclusions, representing the relationship between the information and the beliefs drawn from it.

These are the properties extracted from Chat GPT, all of the further specifications of the classes and properties are present in the .owl file.

&#x20;

## Key Concepts

The following represent some of the key concepts extracted from the user story that have been used to align some of the classes of Anecdotal Fallacy Ontology with the semantic frames contained in the Framester Hub.

* Pattern
* Individual
* Stimuli
* Selective Perception
* Attention
* Bias
* Illusion
* Misconception
* Condition
* Event
* Situation

&#x20;

&#x20;

## Chosen Framster Frames

These are the framster frames used for the alignment of the ontology ‘s classes:

[**Pattern**](https://w3id.org/framester/data/framestercore/Pattern)&#x20;

This frame describes the interrelation of a collection of Entities; they may be physical entities or shapes in a recognizable configuration, a pattern of events, or a relation among abstract entities. The pattern is not the individual Entities nor the set of Entities, but an abstraction of their interrelations, as a gestalt. The Cougers are playing in a Wing-T formation tonight. The auditors noticed a suspicious pattern of withdrawals from the maintenance account . The digits of irrational numbers do not repeat in any kind of pattern.

RecognizablePattern=>fs:Pattern

[**PerceptionExperience**](https://w3id.org/framester/data/framestercore/PerceptionExperience)&#x20;

This frame contains perception words whose Perceivers have perceptual experiences that they do not necessarily intend to. For this reason we call the Perceiver role Perceiver\_passive. Comparing the Perception\_experience frame to the Perception\_active frame, we note that for some modalities there are different lexical items in each frame. For instance, whereas Perception\_experience has see, Perception\_active has look at. For other sense modalities, we find the same lexical items in both frames. To illustrate, consider the verb smell where I smell something rotten exemplifies its Perception\_experience use and Smell this to see if it's fresh exemplifies its Perception\_active sense. This frame also includes words which are not specific to any sense modality, including detect, perceive, perception, sense.

Perception=>fs:PerceptionExperience

[**ExperiencerObj**](https://w3id.org/framester/data/framestercore/ExperiencerObj)**:**

Some phenomenon (the Stimulus) provokes a particular emotion in an Experiencer. Nightmare on Elm Street scared me silly.

AmbiguousStimulus=> fs:ExperiencerObj

&#x20;

## Entities used from other resources:

[**FOAF**](http://xmlns.com/foaf/spec/#term_Person)

Person: The foaf:Person class represents people. Something is a foaf:Person if it is a person. We don't nitpic about whether they're alive, dead, real, or imaginary. The foaf:Person class is a sub-class of the foaf:Agent class, since all people are considered 'agents' in FOAF.

Participant=>foaf:Person

&#x20;

&#x20;

## Used Content ODPs

The following represent the Content Ontology Design Patterns adopted to model the Pareidolia Ontology. Most of these ODP’s classes and properties have been used and combined together during the modelling process.

&#x20;

[ActivitySpecification](http://ontologydesignpatterns.org/wiki/Submissions:ActivitySpecification)&#x20;

This work is concerned with supporting a correct and meaningful representation of activities on the Semantic Web, with the potential to support tasks such as activity recognition and reasoning about causation. This requires an ontology capable of more than simply documenting and annotating individual activity occurrences; definitions of activity specifications are required. Current representations of activities in OWL do not meet the basic requirements for activity specifications. Detailed definitions of an activity's preconditions and effects are lacking, in particular with respect to a consideration of change over time. This pattern leverages existing work to fill this void with an ontology design pattern for activity specifications in OWL.

&#x20;

[Experience and Observation](http://ontologydesignpatterns.org/wiki/Submissions:Experience_%26_Observation)

To represent the epistemological "missing link" between a cognitive activity, e.g. the interaction with a cultural object, and any evidence of the effects this activity has on the individuals that are engaged with it; what can collectively be considered as an experience.

&#x20;

[Cognitive Characteristics Ontology](http://purl.org/ontology/cco/core)

The Cognitive Characteristics Ontology is built on top of the Weighted Interests Vocabulary v0.5 and should probably substitute this ontology in the near future. That means all concepts and properties are imported from this ontology. Some of them are also redefined and renamed to broaden their meaning. Furthermore, the Cognitive Characteristics Ontology is inspired by the Unified User Context Model, the General User Model Ontology, the User Modelling for Information Retrieval Language and all their fundamental sources, and finally, the discussions on the FOAF developers mailing list.

&#x20;

&#x20;

## Bibliography

The following resources have been used to have a better understanding of the Anecdotal Fallacy Bias:

Wikipedia, *Argument from anecdote*, <https://en.wikipedia.org/wiki/Argument_from_anecdote>

Intelligent speculation, Johnatan Maloney, Anecdotal fallac&#x79;*,* <https://www.intelligentspeculation.com/blog/anecdotal-fallacy>
