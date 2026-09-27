> For the complete documentation index, see [llms.txt](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/neglect-of-probability-bias.md).

# Neglect of Probability Bias

Creation and development process of the Neglect of Probability bias Ontology

## Visualize the ontology with [OWLGrEd](http://owlgred.lumii.lv/online_visualization/r12a)

### [OWL file of the ontology](https://raw.githubusercontent.com/corrado877/CognitiveBiasOntologies/main/Neglect_of_Probability_bias/Neglect_of_probability.owl)

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2F10O7VO7aAkKJ0P0RVA7a%2FNeglect%20of%20probability%20bias.png?alt=media&amp;token=4d9cc607-72ab-48b7-9b51-6719d18dbf7b" alt=""><figcaption><p><em>UML of Neglect of Probability Bias</em></p></figcaption></figure>

## Definition provided by Google Gemini of the Neglect of Probability bias

*Give me a definition of the Neglect of probability bias*

\
The neglect of probability bias is a type of cognitive bias that affects how we make decisions, particularly in situations with uncertainty. It boils down to this: a tendency to ignore the probabilities of different outcomes when making decisions, it happens because our brains are complex and sometimes take shortcuts. Considering probabilities takes effort, and sometimes we prioritize other factors like potential rewards or emotional impact. This bias can lead to poor decision-making, especially when dealing with risks and uncertainties. We might overlook likely negative outcomes or get overly fixated on unlikely but dramatic possibilities.

&#x20;

## Ten scenarios of Neglect of Probability bias

1. Medical decisions: Ignoring the low but possible side effects of a medication because the potential benefits seem more impactful.
2. Financial planning: Choosing an investment with high advertised returns without researching the historical success rates and risks.
3. Ignoring food allergies: Assuming a small amount of an allergen won't trigger a reaction due to past experiences, neglecting the potential for severity.
4. Ignoring early car maintenance: Overlooking recommended maintenance due to the car's current functionality, neglecting the increased risk of future breakdowns.
5. Dating based on first impressions: Dismissing someone with potential due to a minor perceived flaw, forgetting the chance that compatibility could deepen with time.
6. Skipping backup plans: Assuming an event will run smoothly and neglecting preparation for unforeseen circumstances.
7. Overusing antibiotics: Taking antibiotics for a viral infection due to fear of a potential bacterial complication, despite it being highly unlikely.
8. Procrastinating on urgent tasks: Delaying responsibilities due to the immediate comfort of avoidance, neglecting the accumulating stress and potential consequences.
9. Taking unnecessary risks in travel: Choosing dangerous activities based on thrill and neglecting safety precautions due to the perceived low risk of accidents.
10. Refusing to wear a seatbelt: Believing in personal invulnerability and neglecting the overwhelming data on the effectiveness of seatbelts in preventing serious injury.

&#x20;

## Neglect of probability User Story: *Procrastinator vs. The Improbable Dragon*

*Consider scenario 8 and give me a small user story from it*

\
The world whizzed by Amelia in a blur of emails, meetings, and looming deadlines. Each day felt like a sprint, with tasks piling up like dominoes ready to topple into chaos. But Amelia had a secret weapon - procrastination. While others fretted, she'd glide through her mornings, savoring a leisurely coffee, lost in the latest meme video. "There's plenty of time," she'd reassure herself, "the deadline is ages away."

But deadlines, like mythical dragons, had a way of sneaking up unexpectedly. One morning, the notification popped up - her major presentation, the one she'd been casually pushing off like a dusty book, was due tomorrow. Panic clawed at her throat. The Improbable Dragon, as she'd named her tendency to underestimate the urgency of tasks, had finally caught her.

Frantic typing filled the night, fuelled by cold pizza and desperation. The once manageable presentation morphed into a monster, swallowing her confidence and sleep. By morning, she was a hollow shell, her eyes bloodshot, her voice hoarse. The presentation stumbled, riddled with errors and apologies. The consequences, once improbable, materialized - a lost opportunity, a damaged reputation, and a mountain of work to fix the mess.

&#x20;

## Competency Questions

* What did Amelia decide to ignore?\
  The presentation she was assigned
* Her decision was affected by?\
  Her decision to ignore the deadline

## Classes and properties

### Classes:

* Bias: Represents the general concept of the bias.
* Decision: Represents a decision subject to the bias.
* Outcome: Represents a possible outcome of a decision.
* Probability: Represents the likelihood of an outcome occurring.
* Heuristic: Represents a mental shortcut used in decision-making.
* Emotion: Represents an emotional state influencing decision-making.
* Context: Represents the circumstances surrounding a decision.

### Properties:

* has\_outcome: Links a Decision to its possible Outcomes.
* probability\_of: Links an Outcome to its associated Probability.
* is\_influenced\_by: Links a Decision to the Bias and other influencing factors like Heuristics, Emotions, and Context.
* ignores: Links the Bias to the Probability that is being neglected.
* focuses\_on: Links the Bias to the aspect of the decision (e.g., potential reward, emotional impact) that is being given undue weight.
* severity\_of: Links the Bias to its impact on the quality of the decision.
* triggered\_by: Links the Bias to the specific conditions or cues that activate it.

### Additional Classes and Properties:

* Cognitive process: Refine Heuristic to include different types of mental shortcuts involved (e.g., availability heuristic, anchoring bias).
* Information type: Differentiate between the type of information being neglected (e.g., statistical data, expert opinion) and the type of information being focused on (e.g., anecdotal evidence, vivid stories).
* Individual factors: Capture personal characteristics that contribute to susceptibility to the bias (e.g., risk tolerance, optimism bias).
* Mitigation strategy: Represent methods to overcome the bias (e.g., seeking additional information, considering alternative perspectives).

These classes and properties have been extracted from Gemini, further specifications for the classes and properties used are shown in the .owl file.

&#x20;

## Key Concepts

* Individual
* Stimuli
* Attention
* Bias
* Illusion
* Condition
* Event
* Situation
* Activity
* Unreliability
* Overlooking

&#x20;

## Chosen Framster Frames

These are the framster frames used for the alignment of the ontology ‘s classes:

[PerceptionExperience ](https://w3id.org/framester/data/framestercore/PerceptionExperience)

This frame contains perception words whose Perceivers have perceptual experiences that they do not necessarily intend to. For this reason we call the Perceiver role Perceiver\_passive. Comparing the Perception\_experience frame to the Perception\_active frame, we note that for some modalities there are different lexical items in each frame. For instance, whereas Perception\_experience has see, Perception\_active has look at. For other sense modalities, we find the same lexical items in both frames. To illustrate, consider the verb smell where I smell something rotten exemplifies its Perception\_experience use and Smell this to see if it's fresh exemplifies its Perception\_active sense. This frame also includes words which are not specific to any sense modality, including detect, perceive, perception, sense.

Perception=>fs:PerceptionExperience

&#x20;

## Entities used from other resources:

### [FOAF](http://xmlns.com/foaf/spec/#term_Person)

Person: The foaf:Person class represents people. Something is a foaf:Person if it is a person. We don't nitpic about whether they're alive, dead, real, or imaginary. The foaf:Person class is a sub-class of the foaf:Agent class, since all people are considered 'agents' in FOAF.

Participant=>foaf:Person

&#x20;

&#x20;

## Used Content ODPs

The following represent the Content Ontology Design Patterns adopted to model the Pareidolia Ontology. Most of these ODP’s classes and properties have been used and combined together during the modeling process.

&#x20;

&#x20;

### [Affected By](http://ontologydesignpatterns.org/wiki/Submissions:AffectedBy)

To represent properties/qualities that may affect the status of a feature of interest.

&#x20;

### [Experience and Observation](http://ontologydesignpatterns.org/wiki/Submissions:Experience_%26_Observation)

To represent the epistemological "missing link" between a cognitive activity, e.g. the interaction with a cultural object, and any evidence of the effects this activity has on the individuals that are engaged with it; what can collectively be considered as an experience.

&#x20;

&#x20;

## Bibliography

Wikipedia, *Neglect of proability bias*, <https://en.wikipedia.org/wiki/Neglect_of_probability#:~:text=The%20neglect%20of%20probability%2C%20a,neglected%20entirely%20or%20hugely%20overrated>.

Springer Link, *Neglect of probability bias*,

<https://link.springer.com/chapter/10.1007/978-981-16-0143-9\\_38#:\\~:text=Neglect%20of%20probability%20is%20a,positive%20solution)%20%5B3%5D>.
