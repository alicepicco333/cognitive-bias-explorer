> For the complete documentation index, see [llms.txt](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/hot-hand-fallacy-bias.md).

# Hot Hand Fallacy Bias

Creation and development process of Hot Hand Fallacy bias Ontology

## Visualize ontology with [OWLGrEd](http://owlgred.lumii.lv/online_visualization/xekh#)

### [OWL file of the ontology](https://raw.githubusercontent.com/corrado877/CognitiveBiasOntologies/main/HotHandFallacyOntology/HotHandFallacyOntology.owl)

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FSGCPEAuplSbdEcf8fCLC%2FHot%20hand%20fallacy%20Ontology%20rewieved.png?alt=media&amp;token=789af0bd-b65a-42ac-9148-86f74f2f2f69" alt=""><figcaption><p><em>UML of the Hot Hand Fallacy Bias Ontology</em></p></figcaption></figure>

## Definition provided by Chat GTP of Hot Hand Fallacy bias

*Give me a definition of Hot Hand Fallacy Bias*

The Hot Hand Fallacy Bias, also known as the Hot Hand Fallacy, is a cognitive bias that leads people to believe that a series of successful outcomes in a random or chance-based process is more likely to continue in the short term. In other words, individuals tend to think that if they or someone else has experienced a streak of wins or successes, they are more likely to keep winning or succeeding the next time. This bias can be observed in various contexts, such as sports, gambling, or even everyday decision-making.

The Hot Hand Fallacy suggests that people may misinterpret random patterns or sequences as being influenced by skill or momentum though these events are statistically independent. In many cases, the belief in a "hot hand" can lead to poor decision-making, as individuals may overestimate their chances of success or make risky choices based on a mistaken belief in a streak of good luck.

It's important to recognize the Hot Hand Fallacy Bias to make more rational and informed decisions, especially in situations where chance and randomness play a significant role.

## Ten example scenarios of the Hot Hand Fallacy provided by Chat Gtp

*Give me ten example scenarios of Hot Hand Fallacy*

1. **Basketball Shooting**: A basketball player believes that if they've made several consecutive shots, they are more likely to make the next one, even though each shot is independent of the others.
2. **Gambling**: A person at a casino thinks that if they've won multiple hands in a row in blackjack, they are on a "hot streak" and continue to bet more recklessly, assuming they can't lose.
3. **Stock Trading**: An investor sees a series of profitable trades and becomes overconfident, believing that they have a "hot hand" and that their next investment will also be a success.
4. **Coin Flipping**: Someone flips a coin and gets heads several times in a row, leading them to believe that the next flip is more likely to be heads as well.
5. **Lottery Ticket Purchases**: A person who has won small prizes in the lottery multiple times thinks they are "on fire" and buys more tickets, assuming they have a better chance of winning big.
6. **Poker**: A poker player believes they are on a "hot streak" after winning several hands, leading them to make more aggressive bets, even with suboptimal hands.
7. **Sports Betting**: A sports bettor assumes that a team that has won several games in a row is more likely to win the next one, overlooking factors like team performance and matchups.
8. **Sequential Number Selection**: In a game like roulette, someone selects the same number that has hit a few times in a row, thinking it's more likely to hit again.
9. **Productivity at Work**: An employee completes a few successful projects consecutively and believes that they will continue to succeed without adjusting their work habits.
10. **Restaurant Choices**: A diner goes to a restaurant that served them a great meal on their last visit and expects another exceptional experience, even if it's unrelated to the quality of their past visit.

These scenarios illustrate how people might erroneously assume that a streak of success implies a higher likelihood of continued success, despite the underlying events being largely independent or chance-based. The Hot Hand Fallacy Bias can lead to unwarranted confidence and poor decision-making in such situations.

## User Story: *Betting for the next win of my favorite football team*

*Consider scenario 7, “Sports Bettings”, give me a small user story from it*

As an avid sports bettor, I'm constantly seeking ways to increase my chances of winning and make more informed betting decisions, especially when it comes to wagering on my favorite football team matches. One challenge I've faced is falling prey to the Hot Hand Fallacy Bias, a cognitive bias that has led me to make impulsive and less rational bets.

I often found myself in situations where I believed that, after betting for my favorite football team victory, which happened several times in a row, then even the next time it would be much more likely to win the bet again by always betting on the team's victory; but on some occasions this did not come true: my team lost the match and I lost my bet. This happened because in those situations I did not consider a wide range of factors, such as player statistics, team dynamics, historical matchups, and the current conditions (injuries, home or away games, etc.). Each match also is an independent event and the result of a single match is not influenced by the previous game sequences. This means that this bias can cloud my judgment and influence my betting decisions, as I become overly optimistic about the team's prospects based solely on their recent success.

To avoid this bias and enhance my sports betting strategy, I should have sought solutions that allow me to analyze teams' performance in a more objective and data-driven manner. By doing so, I would probably have been able to base my bets on a comprehensive assessment of the situation rather than relying on streaks alone.

## Classes and properties

### Classes

Classes for the Hot Hand Fallacy Ontology extracted from the user story and readapted with the help of Chat GTP

1\. **Activity** (Sports Bets): A class representing any activities with random or chance-based outcomes, such as coin flips, dice rolls, lottery draws, or sports bets.

2\. **Next Chance-Based Occurrence** (Next Football Team Match Bet): A class representing individual occurrences within a random/chance-based process, like a coin landing on heads or tails, a dice showing a specific number, or a bet for a football team match.

3\. **Past Occurrences Series** (Football Team Match Bet Series): A series of the same recurrent events that happened in the past.

4\. **Participant** (Sports Bettor): a class representing an individual that takes part in an Activity with random or chance-based outcomes.

5\. **Probability**(ProbabilityLevel): a class representing the probability of an Event such as a Football Team Match Bet to produce a winning situation.

6\. **OutcomeEffect**(Winning Bet): a class representing an effect of the result of an Event such as a Winning Bet in a Football Team Match Bet.

### Properties

Due to their similarity, some of the properties created for the Gambler's Fallacy Ontology have been used for the Hot Hand Fallacy ontology as well. Other properties have been taken from the Content ODPs shown in “Used Content ODPs” section.

1\. **hasBelief** ([The Cognitive Characteristics Ontology 0.2](http://purl.org/ontology/cco/core)): An uncertain relation for competence representation. That means beliefs, persuasions or opinions, which can also be misconceptions. In the Hot Hand Fallacy Bias it was used for defining a Person who believes that a sequence of past events with the same outcome can change the probability of the outcome of the same event in the future.

2\. **hasBiasedOpinion**: a property connecting a Person who has a biased opinion about the possible outcome of a Future Event such as a Random/Chance-based Occurrence because he/she thinks that there is a correlation between this future event and a series of past events.

3\. **hasOutcomeEffect**: A property linking a series of events which Outcome brings to the same effect.&#x20;

4\. **ProduceOutcomeEffect**: a property linking an event which Outcome will produce an effect.

## Competency Questions

1\. *What the sports bettor believes about betting for his favourite football team victory?*

He believes that, having won the bet several games in a row, this will affect upward the probability of winning again in the next match bet.

```sparql
SELECT ?event ?eventOutcome
WHERE {?participant cco:belief ?sequence.
       ?sequence cbo:hasInfluence ?probability.
       ?probability rdf:type fs:Probability.
       ?probability parameter:hasParameterDataValue "High"^^xsd:string;
                                       parameter:isParameterFor ?event.
        ?event cbo:producesOutcomeEffect ?eventOutcome.
}
```

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FRAtz8W8cTriwkCtxH4KT%2Fimage.png?alt=media&amp;token=bebe68aa-1a2d-4199-acef-94088e3ec537" alt=""><figcaption><p><em>Sparql Query  n. 1</em></p></figcaption></figure>

2\. *What is the outcome effect that a sequence of past Football Team Match bets has?*

```sparql
The outcome effect is a Winning Bet.
SELECT ?sequence ?Outcome
WHERE {?sequence prov:wasGeneratedBy ?activity.
       ?sequence cbo:hasOutcomeEffect ?Outcome.
}
```

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FvJ7cA3aoetEivgtDC58f%2Fimage.png?alt=media&amp;token=8f6d9ed0-549a-4f84-9460-3d8fba65fa41" alt=""><figcaption><p><em>Sparql Query  n. 2</em></p></figcaption></figure>

3\. *According to the user story, how likely the next football team match bet will be a winning bet?*

The probability of winning will be higher.

```sparql
SELECT ?eventOutcome ?probabilityLevel
WHERE {?event cbo:producesOutcomeEffect ?eventOutcome.
       ?event parameter:hasParameter ?probability.
       ?probability rdf:type fs:Probability.
       ?probability parameter:hasParameterDataValue ?probabilityLevel.
      FILTER (LCASE(?probabilityLevel) = "high")     
}
```

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FsbJDgdg8cSdGIoyGBmro%2Fimage.png?alt=media&amp;token=a61b4a57-48b6-4aeb-9c12-4d44e0e04e2f" alt=""><figcaption><p><em>Sparql Query  n. 3</em></p></figcaption></figure>

## Key Concepts

The following represent some of the key concepts extracted from the user story that have been used to align some of the classes of Hot Hand Fallacy Ontology with the semantic frames contained in the Framester Hub.

* Bettor
* Bet
* Event
* Independent
* Sequence
* Victory
* Previous
* Next
* Belief
* Influence
* Judgment
* Result
* Likelihood
* Success
* Streaks

## Chosen Framster Frames

These are the framester used for the alignment of the ontology's classes:

### [**Event** ](https://w3id.org/framester/data/framestercore/Event)

An Event takes place at a Place and Time. Big earthquakes only happen along plate boundaries. INI The party will take place on Sunday in the all-you-can-eat buffet.

Next Chance-Based Occurence(Football Team Match Bet): cbo:Next Chance-Based Occurrence=>rdfs:subClassOf=> fs:FutureEvent=> fs:Event.

### [**Activity**](https://w3id.org/framester/data/framestercore/Activity)

This is an abstract frame for durative activities, in which the Agent enters an ongoing state of the Activity, remains in this state for some Duration of Time, and leaves this state either by finishing or by stopping. The Agent's Activity should be intentional. This frame is intended mostly for the inheritance of common FEs, and to provide the frame structure for the beginning, ongoing, finish, or stop stage of an Activity, each of which constitutes a subframe of this frame. This frame should be compared to the Process frame

Activity(Sports Bets)=> fs:Activity

### [**Sequence**](https://w3id.org/framester/data/framestercore/Sequence)

The words in this frame describe entities that occur in some temporally-ordered sequence. The entities thus have some sort of relation between them that might be described by the Relative\_time frame. However, at this time, this frame has no Frame Relation with that frame (though this is still under discussion). Additionally, it should be noted that the words in this frame have a metaphorical link to the words in Shape. Describe in detail the sequence of steps taken during an emergency.

Past Occurrences Series (Football Team Match Bet Series)=> fs:Sequence

### [**Probability**](https://w3id.org/framester/data/framestercore/Probability)

This frame characterizes the likelihood that a Hypothetical\_event will happen as a position on a scale of impossible to inevitable. The likelihood can expressed as numerical Odds or a metaphorical representation of the Position on a scale. There's a 20 % chance that you'll succeed. The odds that he'll actually do it are one in a million.

Probability=> fs:Probability

### [**People**](https://w3id.org/framester/data/framestercore/People)&#x20;

This frame contains general words for Individuals, i.e. humans. The Person is conceived of as independent of other specific individuals with whom they have relationships and independent of their participation in any particular activity. They may have an Age, Descriptor, Origin, Persistent\_characteristic, or Ethnicity. A man from Phoenix was shot yesterday. She gave birth to a screaming baby yesterday. I study 16-year-old female adolescents. I am dating an African-American man. She comforted the terrified child. I always thought of him as a stupid man.

Participant(Sport\_Bettor)=> fsyn:Bettor=>rdfs:subClassOf fs:People

## Used Content ODPs

The following represent the Content Ontology Design Patterns adopted to model the Hot Hand Fallacy Ontology. Most of these ODP’s classes and properties have been used and combined during the modelling process.

### [Affected By](http://ontologydesignpatterns.org/wiki/Submissions:AffectedBy)

To represent properties/qualities that may affect the status of a feature of interest.

### [Parameter](http://ontologydesignpatterns.org/wiki/Submissions:Parameter)

To represent parameters to be used for a certain concept.

### [Participation](http://ontologydesignpatterns.org/wiki/Submissions:Participation)

To represent participation of an object in an event.

### [Part Of](http://ontologydesignpatterns.org/wiki/Submissions:PartOf)

To represent entities and their parts.

## [Provenance](http://ontologydesignpatterns.org/wiki/Submissions:Provenance)

Extracted core of PROV-O

## Entities and properties used from other resources

### DBpedia

[**Success**](http://dbpedia.org/resource/Success)

Success is the state or condition of meeting a defined range of expectations. It may be viewed as the opposite of failure. The criteria for success depend on context and may be relative to a particular observer or belief system. One person might consider a success what another person considers a failure, particularly in cases of direct competition or a zero-sum game. Similarly, the degree of success or failure in a situation may be differently viewed by distinct observers or participants, such that a situation that one considers to be a success, another might consider to be a failure, a qualified success or a neutral situation. For example, a film that is a commercial failure or even a box-office bomb can go on to receive a cult following, with the initial lack of commercial success even.

OutcomeEffect(Winning Bet)=> dbr:Success

### [The Cognitive Characteristics Ontology](https://smiy.sourceforge.net/cco/spec/cognitivecharacteristics.html)

#### cco:[belief](https://smiy.sourceforge.net/cco/spec/cognitivecharacteristics.html#belief)

*has belief* - An uncertain relation for competence representation. That means beliefs, persuasions or opinions, which can also be misconceptions.

## Final comments

The Hot Hand Fallacy is similar in many of its aspects to the Gambler's Fallacy Bias so the corresponding ontologies also have many similarities, both in the classes and in the properties used. However, the main difference between the two lies in the fact that the Gambler's fallacy bias is more focused on the influence that the result per se of an event can have on a person's judgment, while the Hot Hand refers more to the person and the effects that the result of an event can have on their decision-making abilities. In the Hot Hand Fallacy Bias, consideration is not given to the frequency with which an outcome of a single event occurs or its probability, but simply to whether it leads for example to a win or lose situation for the person concerned.

As with Gambler's fallacy bias the Hot hand fallacy also has its opposite, namely the *stock of luck*. In the Hot hand fallacy bias the player believes, for example, that if he has managed to win three times in a row then he is more likely to still have luck and win the next time as well. On the contrary, in the stock of luck the chance of winning in the next round is lower precisely because the player does not believe that he will continue to have the same luck again. In both cases the probability of winning and losing are not directly related to whether one has luck or not but to external and/or internal factors of the game.

## Bibliography

The following resources have been used to have a better understanding of the Hot Hand Fallacy Bias:

Wikipedia, *Hot Hand Fallacy*, (<https://en.wikipedia.org/wiki/Hot_hand>);

James Sundali, Rachel Croson, *Biases in casino betting: The hot hand and the gambler’s fallacy* in *Judgment and Decision Making*, Vol. 1, Issue 1 (2006), pp. 1 – 12, (DOI:<https://doi.org/10.1017/S1930297500000309> )
