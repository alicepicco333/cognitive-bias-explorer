> For the complete documentation index, see [llms.txt](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/blind-spot-bias.md).

# Blind Spot Bias

Creation and development process of  Blind Spot Bias Ontology

### Visualize the ontology with [OWLGrEd](http://owlgred.lumii.lv/online_visualization/fkj3#)

### [OWL of the ontology](https://raw.githubusercontent.com/corrado877/CognitiveBiasOntologies/main/Bias%20Blind%20Spot/BiasBlindSpot.owl)

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2F19aqsItGGZg0PlmZHly6%2Fbiasblindspot.png?alt=media&amp;token=dcb94a45-b73c-4feb-8594-513d3d9618e1" alt=""><figcaption><p><em>UML of Blind Spot Bias Ontology</em></p></figcaption></figure>

## Definition provided by Chat GTP of **Blind Spot Bias:**

*Give me a definition of Blind Spot Bias*

Bias Blind Spot refers to a cognitive bias where individuals recognize and easily identify biases in others but fail to acknowledge or perceive their own cognitive biases. It involves the tendency to believe that one is less susceptible to biases than other people, leading individuals to overlook their own subjective judgments and assumptions. The bias blind spot can hinder self-awareness and critical reflection, potentially influencing decision-making, problem-solving, and interpersonal relationships. Recognizing and addressing the bias blind spot is essential for fostering a more accurate and unbiased understanding of one's own thought processes and behaviors.

### Ten example scenarios of the Illusory Correlation Bias provided by Chat Gt&#x70;**:**

1.**Performance Evaluation**:

Emma, a manager, readily identifies biases in her colleagues' performance evaluations but fails to see how her personal preferences and experiences might influence her own assessments.

2\. **Political Opinions**:

James believes he is immune to political biases, criticizing others for being politically biased. However, he fails to recognize how his own political beliefs shape his judgments and interpretations.

3\. **Hiring Decisions**:

Sarah claims objectivity in hiring decisions, yet she is unconsciously influenced by a bias toward candidates who share similar hobbies and interests as her.

4\. **Product Preferences**:

Mark, a product manager, accuses his team of being influenced by personal biases in product design. However, he overlooks his own bias toward features he personally likes.

5\. **Team Assignments**:

In distributing tasks to her team, Amanda criticizes other managers for favoring certain team members. Meanwhile, she fails to notice her inclination to assign challenging tasks to those she personally trusts.

6\. **Customer Complaints**:

David, a customer support representative, believes he handles customer complaints objectively. However, he overlooks how his mood and personal experiences impact his responses to different customer issues.

7\. **Project Prioritization**:

Alex advocates for objective project prioritization but fails to recognize his inclination to prioritize projects aligned with his personal interests over others.

8\. **Feedback Reception:**

Rachel, during a team feedback session, points out biases in others' feedback. However, she struggles to acknowledge her own defensiveness and selective acceptance of feedback.

9\. **Investment Choices**:

Olivia criticizes colleagues for being swayed by emotions in investment decisions. Simultaneously, she doesn't realize her own bias toward investment strategies that align with her risk tolerance.

10\. **Meeting Contributions**:

During team meetings, Tom accuses others of only considering their perspectives. Yet, he fails to notice his own tendency to dismiss ideas that don't align with his viewpoints.

## **User Story: "Feature Selection Dilemma"**

As a product manager, Emily was tasked with prioritizing features for the upcoming software update. Wanting to ensure an objective and user-centric approach, she initiated a team discussion to gather input.

Emily noticed that her colleague, Chris, passionately advocated for a feature related to data visualization, emphasizing its impact on user engagement. As the discussion progressed, Emily felt increasingly convinced that Chris's viewpoint was swayed by his personal interest in data visualization.

However, during a later discussion, when Emily found herself advocating for a feature that streamlined workflow processes—a functionality she personally valued—she realized the potential bias in her own decision-making. It struck her that, just like Chris, her preferences and experiences were influencing her choices.

Reflecting on this realization, Emily became more mindful of her own bias blind spot. She acknowledged the need to consider a broader range of user perspectives and experiences, recognizing that her personal preferences might not align with the diverse needs of the entire user base. This awareness prompted her to implement a more inclusive decision-making process for feature prioritization, ensuring a balanced consideration of different user needs and preferences.

## **Competency Questions:**

1. What was Emily tasked with?
2. What did she advocate for?
3. What did Chris advocate for?
4. What is Emily’s opinion about Chris’ proposal?
5. What did Emily eventually realize?

## **Classes and properties:**

### **Classes**

* **Agent**: Individual who performs the Bias Blind Spot
* **Target**: A target is the object or person selected for the aim or focus of an action, often at the receiving end of its outcome or effect.
* **Belief**: A mental attitude or acceptance that something is true or exists, often without direct proof or evidence
* **Outcome**: Refers to the result, effect, or consequence of a particular action, event, process, or situation
* **DecisionMaking**: the act of coming to conclusion or determination reached after careful consideration of available information, options, and factors

### **Properties**

* **hasBias**
* **focusesOn**
* **ignores**
* **hasBelief**
* **hasOutcome**
* **influencedBy**

## **Key Concepts:**

Self-awareness

Bias

Perception

Judgment

Assumptions

Objectivity

Critical thinking

Decision-making

Relationships

Preferences

Experiences

Beliefs

Emotional influences

Social factors

Feedback

Open-mindedness

Accountability

Inclusivity

Diversity

## **Chosen Content ODPs and resources**

[**Experience and Observation**](http://ontologydesignpatterns.org/wiki/Submissions:Experience_%26_Observation)\
to represent the epistemological "missing link" between a cognitive activity, e.g. the interaction with a cultural object, and any evidence of the effects this activity has on the individuals that are engaged with it; what can collectively be considered as an experience.

* **isEngagedIn** (owl:ObjectProperty) Because an activity may engage other participants than the one performing it, engagements are in general considered individual rather than collective, therefore each participants has their own engagement and only some of them will be conscious and/or documented.

[**AffectedBy**](http://ontologydesignpatterns.org/wiki/Submissions:AffectedBy)\
To represent properties/qualities that may affect the status of a feature of interest.

### [The Cognitive Characteristics Ontology](https://smiy.sourceforge.net/cco/spec/cognitivecharacteristics.html)

#### cco:[belief](https://smiy.sourceforge.net/cco/spec/cognitivecharacteristics.html#belief)

*has belief* - An uncertain relation for competence representation. That means beliefs, persuasions or opinions, which can also be misconceptions.

## **Chosen Framester Frames**

**fs:People:** This frame contains general words for Individuals, i.e. humans. The Person is conceived of as independent of other specific individuals with whom they have relationships and independent of their participation in any particular activity. They may have an Age, Descriptor, Origin, Persistent\_characteristic, or Ethnicity. A man from Phoenix was shot yesterday. She gave birth to a screaming babyyesterday. I study 16-year-old female adolescents. I am dating an African-American man. She comforted the terrified child. I always thought of him as a stupid man.&#x20;

<https://w3id.org/framester/data/framestercore/People>

**fs:MentalProperty** (Decision)

MentalProperty, when used for decision-making, refers to the collection of intangible assets, including intellectual property, knowledge assets, creative outputs, innovative ideas, cognitive constructs, and personal and cultural heritage, that are considered and evaluated to inform and guide decision processes. In this context, MentalProperty serves as the foundation upon which decisions are made, providing valuable insights, perspectives, and resources that influence the course of action chosen. Decision-makers may assess and leverage MentalProperty assets to address challenges, capitalize on opportunities, mitigate risks, and achieve desired outcomes.

<https://w3id.org/framester/data/framestercore/MentalProperty>

**fsyn:Belief**

A belief is a mental state or attitude where an individual holds something to be true or probable. Beliefs can range from factual assertions about the world to subjective evaluations, opinions, or attitudes about various matters. They form a fundamental part of human cognition and influence perception, decision-making, and behavior. Beliefs can be based on evidence, personal experience, cultural upbringing, social influences, or even intuition. They often shape an individual's worldview and can be deeply ingrained or subject to change over time based on new information or experiences.

<https://w3id.org/framester/data/framestersyn/Belief.n.1>

## **Bibliography:**

Pronin, E., Lin, D. Y., & Ross, L. (2002). The bias blind spot: Perceptions of bias in self versus others. Personality and Social Psychology Bulletin, 28(3), 369-381.
