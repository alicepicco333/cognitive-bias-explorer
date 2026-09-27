> For the complete documentation index, see [llms.txt](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/insensitivity-to-sample-size-bias.md).

# Insensitivity to sample size Bias

Creation and development process of the Neglect of the Insensitivity to sample size bias Ontology

## Visualize the ontology with [OWLGrEd](http://owlgred.lumii.lv/online_visualization/az11)

### [OWL file of the ontology](https://raw.githubusercontent.com/corrado877/CognitiveBiasOntologies/main/Insenstivity_to_sample_bias/Insentivity_to_sample_size.owl)

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FnKMvv7ISDcLZeDggapkS%2FInsensitivity%20to%20sample%20size(final).png?alt=media&amp;token=0c6b6354-3f5c-4c1a-8e56-2d0331eef399" alt=""><figcaption><p><em>UML of Insensitivy to Sample size bias</em></p></figcaption></figure>

## Definition provided by Chat GPT of the Insensitivity to sample size bias

*Give me a definition of the Insensitivity to sample size bias*

Insensitivity to sample size bias is a cognitive bias where people misjudge the reliability of information based on the sample size. In simpler terms, we often fail to consider how much a small group represents the larger population. This can lead to drawing false conclusions and making poor decisions.

People tend to treat small and large samples as equally representative, neglecting the increased accuracy of larger samples. We overgeneralize from small samples, applying their findings to the broader population without considering the margin of error.

It's related to other biases like the clustering illusion, where we underestimate randomness in small samples.

Our intuition struggles with the complex relationship between sample size and statistical uncertainty, we often lack the statistical training to analyse data critically and assess its generalizability, heuristics, which are mental shortcuts, can lead us to jump to conclusions without enough evidence.

&#x20;

## Ten scenarios of Insensitivity to sample size bias

1\. The Foodie: Sarah loves a new restaurant after having a single delicious meal. She tells all her friends it's the best in town, neglecting the possibility it was just a lucky night.

2\. The Gamer: Ben sees two streamers praising a new game and immediately buys it, ignoring hundreds of negative reviews and the limited sample size of streamer opinions.

3\. The Investor: Maria buys stock in a small tech company after reading one glowing article, missing the lack of financial data and the company's tiny user base.

4\. The Traveler: David avoids visiting a country based on a negative experience with one rude taxi driver, overlooking the vast cultural diversity and millions of potential interactions.

5\. The Recruiter: Jane rejects a candidate for a technical role based on one bad coding exercise, disregarding their impressive portfolio and limited sample size of the test.

6\. The Politician: Tom crafts a policy based on a vocal minority group's demands, forgetting the silent majority and the potential dangers of overgeneralizing.

7\. The Journalist: Maya writes a sensational article based on a few anonymous sources, leading to public outcry and accusations of biased reporting due to lack of transparency and sample size.

8\. The Teacher: David assumes a student is disruptive based on one outburst in class, overlooking their usually good behaviour and neglecting the possibility of external factors.

9\. The Doctor: Lily diagnoses a patient based on a rare symptom seen once, failing to consider the more common explanations and overlooking the limited sample size of her observation.

10\. The Influencer: Mark promotes a fad diet with dramatic before-and-after photos from a small group, misleading followers into ignoring potential health risks and individual differences.

&#x20;

## Insensitivity to sample size user story: *Influencer in the Gaming world*

*Consider scenario 10 and give me a small user story from it*

I'm excited for the upcoming release of "Nova Odyssey," an RPG lauded by several popular streamers I follow. Their glowing reviews have me hyped, but I'm worried about potentially overhyping the game based on a limited perspective. I don't want to be disappointed if the gameplay doesn't match my expectations or there are hidden issues not mentioned in the reviews. I want to avoid falling prey to insensitivity to sample size bias and make a well-rounded decision about "Nova Odyssey." I need tools and information that help me consider diverse perspectives, analyse gameplay beyond streamer opinions, and understand the potential for bias in early reviews. On the Reviewer, I find a mix of professional reviews and player feedback, offering diverse perspectives beyond the streamer hype. While some praise the game's visuals and story, others point out bugs and repetitive gameplay mechanics. This balanced view helps me manage my expectations.

&#x20;

## Competency Questions

* What knowledge do i have of Nova Odyssey?\
  That my opinion of the game can be shaped by a few reviews limiting my perspective.
* How does this affect my decision?\
  It can either influence my positively or negatively affecting my final decision.

## Classes and properties

### Classes:

* Individual: a class representing a person that is experiencing the Insensitivity to sample size Bias.
* Information: Represents the data or evidence used to form a judgment.
* Sample: A subset of a population used to gather information about the whole.
* SampleSize: The number of elements in a sample.
* Population: The entire group from which the sample is drawn.
* Generalizability: The degree to which results from a sample can be applied to the population.

### Properties:

* hasObject: Connects Bias to the Judgment that is affected by it.
* basedOn: Connects Judgment to the Information used to form it.
* hasInformationSource: Connects Information to its source (e.g., Sample, Study).
* represents: Connects Population to the Samples that represent it.

These are the properties extracted from Chat GPT, further specifications on the classes used are provided in the .owl file.

&#x20;

## Key Concepts

* Individual
* Stimuli
* Perception
* Attention
* Bias
* Misinterpretation
* Illusion
* Misconception
* Condition
* Event
* Situation
* Activity
* Overgeneralization
* Prejudice
* Unreliability

&#x20;

&#x20;

## Chosen Framster Frames

These are the framster frames used for the alignment of the ontology ‘s classes:

### [Assessing ](https://w3id.org/framester/conceptnet/5.7.0/c/en/assessing)

&#x20;

## Entities used from other resources:

### [FOAF](http://xmlns.com/foaf/spec/#term_Person)

Person: The foaf:Person class represents people. Something is a foaf:Person if it is a person. We don't nitpic about whether they're alive, dead, real, or imaginary. The foaf:Person class is a sub-class of the foaf:Agent class, since all people are considered 'agents' in FOAF.

&#x20;

&#x20;

## Used Content ODPs

The following represent the Content Ontology Design Patterns adopted to model the Pareidolia Ontology. Most of these ODP’s classes and properties have been used and combined together during the modeling process.

&#x20;

### [Affected By](http://ontologydesignpatterns.org/wiki/Submissions:AffectedBy)

To represent properties/qualities that may affect the status of a feature of interest.

### [Experience and Observation](http://ontologydesignpatterns.org/wiki/Submissions:Experience_%26_Observation)

To represent the epistemological "missing link" between a cognitive activity, e.g. the interaction with a cultural object, and any evidence of the effects this activity has on the individuals that are engaged with it; what can collectively be considered as an experience.

&#x20;

## Bibliography

Wikipedia, *Insensitivity to sample size*, <https://en.wikipedia.org/wiki/Insensitivity_to_sample_size>

Farnam Street, *Mental Model: Bias from Insensitivity to Sample Size*,

<https://fs.blog/mental-model-bias-from-insensitivity-to-sample-size/>
