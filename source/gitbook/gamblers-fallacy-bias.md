> For the complete documentation index, see [llms.txt](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/ontologies-developed/gamblers-fallacy-bias.md).

# Gambler's Fallacy Bias

Creation and development process of Gambler's Fallacy bias Ontology

## Visualize the ontology with [OWLGrEd](http://owlgred.lumii.lv/online_visualization/rzbl#)

### [OWL file of the ontology](https://raw.githubusercontent.com/corrado877/CognitiveBiasOntologies/main/GamblersFallacyOntology/GamblersFallacyOntology.owl)

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FgzuLc4znmNSxowjJ3TJJ%2FGambler's%20Fallacy%20rewieved%20V.%201.0.png?alt=media&amp;token=9f556f68-b26a-43ef-bd48-d3b2ced46533" alt=""><figcaption><p><em>UML of the  Gambler's Fallacy Bias Onotolgy</em></p></figcaption></figure>

## Definition provided by Chat GTP of Gambler's fallacy bias

*Give me a definition of Gambler's Fallacy bias*

The Gambler's Fallacy bias, also known as the Fallacy of the Maturity of Chances, is a cognitive bias that occurs when an individual believes that past events in a random or chance-based process can influence the likelihood of future events in the same process. It is a mistaken belief that, because a certain outcome has occurred frequently or infrequently in the past, the probability of that outcome occurring again in the future is somehow altered or "due" to happen.

For example, in gambling, someone might think that if a coin has landed on heads multiple times in a row, it is more likely to land on tails in the next flip. Each coin flip is an independent event, and the probability of heads or tails remains 50% regardless of past outcomes.

The Gambler's Fallacy bias can lead people to make poor decisions, especially in games of chance or gambling, where they might increase their bets based on the mistaken belief that a certain outcome is more likely to happen due to perceived patterns in previous results. Such reasoning is flawed as random processes do not have a memory and each event is unaffected by past outcomes.

## Ten example scenarios of the Gambler's Fallacy provided by Chat Gtp

*Give me ten example scenarios of Gambler's Fallacy*

1. In a casino, a person playing roulette notices that the ball has landed on red for the last ten spins. They start believing that black is "due" and place a large bet on black, thinking it is now more likely to occur.
2. While playing a slot machine, a gambler sees that the jackpot has not been won for a long time. They assume that the machine is "due" for a payout and keep playing with the expectation of hitting the jackpot soon.
3. During a game of poker, a player has been dealt a bad hand repeatedly. They convince themselves that the next hand is bound to be a good one, leading them to make bigger bets in hopes of recovering their losses.
4. At a sports event, a fan believes that their favourite team is more likely to win because they have lost the last few games in a row, assuming that they are "due" for a victory.
5. In a lottery, a person thinks that a certain number is more likely to be drawn next because it hasn't been drawn in a long time.
6. Someone playing a dice game keeps rolling the dice and getting low numbers. They begin to expect higher numbers in the next rolls, assuming that the probabilities will "even out."
7. A gambler at a horse race notices that a particular horse has been consistently winning recently. They believe that it's unlikely for the same horse to win again and decide to bet on another horse.
8. While flipping a coin, a person sees that it has landed on heads multiple times in a row. They start predicting that the next flip will be tails because they believe it's "time" for the pattern to change.
9. A gambler playing blackjack believes that the dealer is more likely to bust (go over 21) because they have been dealt good cards in the last few hands.
10. In a game of chance involving a numbered wheel, a player notes that certain numbers haven't come up in a while. They assume these numbers are now "due" and start betting on them with higher stakes.

These scenarios illustrate how the Gambler's Fallacy can lead people to make irrational decisions based on perceived patterns in random events, leading to potential losses or poor judgment in various situations.

## User Story: *Participation in a Lottery draw game at the Casino*

*Consider scenario 5 and give me a small user story from it*

As a participant in a captivating lottery draw game, I find myself seated before a numbered board, where each draw was shrouded in expectation and uncertainty. The board adorned with a spectrum of numbers, half of them coloured in black and the other half red, has been the focal point of my attention; during each round only one number could be drawn and that would be the winning number for that round. I observe that red numbers have conspicuously eluded the winning draw for a considerable period of time, and a notion begins to take hold in my mind.

As I watch draw after draw, I can't help but notice the absence of any red number after a sequence of four consecutive black numbers. It feels as if they are overdue, as if the board owes them a turn in the spotlight. In the midst of this observation, a peculiar belief emerges—an echo of the gambler's fallacy. I believe that there will be a change in the pattern and a red number has now more probability to make an appearance. I'm convinced that on one of these red numbers will be the key to a substantial win.

My heart races with excitement as the numbers were shuffled inside the sphere from which they were drawn, and I watch with bated breath, hoping to witness the long-awaited appearance of one of these red numbers.

The sphere comes to a halt, and the result is in. But the outcome is not as I had expected. It's not one of the red "due" numbers but another black number. The wave of disappointment washes over me as I realize that my belief in the gambler's fallacy has led me astray.

As I reflect on this experience, I begin to contemplate the role of randomness and probability that characterize games of chance such as a Lottery draw. I remind myself that each draw is an independent event, and the outcome of the game is not influenced by the sequence of past draws. I now grasp the importance of understanding the gambler's fallacy and recognizing its influence on decision-making and how it can cloud your judgement. This experience serves as a compelling reminder of the biases that can affect our choices in games of chance.

## Classes and properties

### Classes

Classes for the Gambler’s Fallacy Ontology were extracted from the user story and readapted with the help of Chat GPT.

1. **Activity** (Lottery Draw): A class representing any activity with random or chance-based outcomes, such as coin flips, dice rolls, lottery draws, or sports events.
2. **NextRandomOccurrence** (Next Number Draw): A class representing individual occurrences within a random/chance-based activity, like a coin landing on heads, a dice showing a specific number, or a team winning a game.
3. **Participant** (LotteryParticipant): a class representing an individual that takes part in a random or chance-based activity
4. **Probability**: a class representing the probability of an Event such as a Number Draw to produce a certain outcome.
5. **Past Occurrences Series** (Number Draw Series): A series of the same recurrent events that happened in the past.
6. **Outcome**: a class representing the outcome of an event such as a Number Draw. Subclass: OutcomeColorNumber(Red/Black Number)

### Properties

Properties for the Gambler’s Fallacy ontology extracted from the user story and created with the help of Chat GPT. Other properties have been taken and used from the Content ODPs shown in “Used Content ODPs” section.

1. [**hasBelief**](https://smiy.sourceforge.net/cco/spec/cognitivecharacteristics.html#belief): An uncertain relation for competence representation. That means beliefs, persuasions or opinions, which can also be misconception. In Gamberl’s Fallacy Bias it was used for defining a Person who believes that a sequence of past events with the same outcome can change the probability of the outcome of the same event in the future.
2. **hasBiasedOpinion**: a property connecting a Person who has a biased opinion about the possible outcome of a Future Event such as a Random/Chance-based Occurrence, because he/she thinks that there is a correlation between this future event and a series of past events.
3. **hasOutcome**: A property linking a series of events to the same Outcome.
4. [**produces**](http://dbpedia.org/ontology/produces): a property taken from Dbpedia Ontology. It connects an event such as NextRandomOccurence to the Outcome that it will produce.

## Competency Questions

1\) *Which game the contestant is participating in?*

The game is a Lottery draw

```sparql
SELECT ?game ?label
	WHERE {?participant participation:isParticipantIn ?game.
               ?game rdfs:label ?label.
}
```

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FyAxG4oHncNj6sYNzoD6Q%2Fimage.png?alt=media&amp;token=7f58eb76-b1a6-4483-b917-d469b6703fee" alt=""><figcaption><p><em>Sparql Query  n. 1</em></p></figcaption></figure>

2\) *According to the user story, what can influence the probability level of the next number draw outcome?*

The probability will be affected by the sequence of the past number draws.

```sparql
SELECT ?sequence
WHERE {?probability rdf:type fs:Probability.
       ?event parameter:hasParameter ?probability.
       ?sequence cbo:hasInfluence ?probability.
}
```

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2Ff0ve18zf74UypB1cEYPN%2Fimage.png?alt=media&amp;token=353e43af-d780-47bf-a63f-3f3a59db5b56" alt=""><figcaption><p><em>Sparql Query  n. 2</em></p></figcaption></figure>

3\) *According to the user story, what should be the probability level that the outcome in the next number draw will be red?*

The probability level will be higher.

```sparql
SELECT ?EventOutcome ?ProbabilityLevel
WHERE {
    ?event dbo:produces ?EventOutcome.
    ?event parameter:hasParameter ?Probability.
    ?Probability parameter:hasParameterDataValue. 
    FILTER (
        CONTAINS(LCASE(STR(?EventOutcome)), "red") &&
        (LCASE(?ProbabilityLevel) = "high")
    )
}          
```

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FjD3hWGrBmpFX9h5TDg3x%2Fimage.png?alt=media&amp;token=98a43b52-43dd-43bd-b219-af6ce9d08c54" alt=""><figcaption><p><em>Sparql Query  n. 3</em></p></figcaption></figure>

## Key Concepts

The following represent some of the key concepts extracted from the user story that have been used to align some of the classes of Gambler's Fallacy Ontology with the semantic frames contained in the Framester Hub.

* Event
* Randomness
* Belief
* Pattern
* Influence
* Outcome
* Chance
* Participant
* Gambler
* Probability
* Past
* Present
* Independent
* Decision-making
* Process
* Sequence

## Chosen Framster Frames

These are the framester used for the alignment of the ontology's classes:

### [**Event** ](https://w3id.org/framester/data/framestercore/Event)

An Event takes place at a Place and Time. Big earthquakes only happen along plate boundaries. INI The party will take place on Sunday in the all-you-can-eat buffet.

NextRandomOccurence(Next Number Draw): cbo: NextRandomOccurrence=>rdfs:subClassOf=> cbo:FutureEvent=> rdfs:subClassOf=> fs:Event.

### [**Activity**](https://w3id.org/framester/data/framestercore/Activity)

This is an abstract frame for durative activities, in which the Agent enters an ongoing state of the Activity, remains in this state for some Duration of Time, and leaves this state either by finishing or by stopping. The Agent's Activity should be intentional. This frame is intended mostly for the inheritance of common FEs, and to provide the frame structure for the beginning, ongoing, finish, or stop stage of an Activity, each of which constitutes a subframe of this frame. This frame should be compared to the Process frame

Activity(Lottery Draw)=>fs:Activity

### [**Sequence**](https://w3id.org/framester/data/framestercore/Sequence)

The words in this frame describe entities that occur in some temporally-ordered sequence. The entities thus have some sort of relation between them that might be described by the Relative\_time frame. However, at this time, this frame has no Frame Relation with that frame (though this is still under discussion). Additionally, it should be noted that the words in this frame have a metaphorical link to the words in Shape. Describe in detail the sequence of steps taken during an emergency.

Past Occurrences Series (Number Draw Series)=> fs:Sequence

### [**Probability**](https://w3id.org/framester/data/framestercore/Probability)

This frame characterizes the likelihood that a Hypothetical\_event will happen as a position on a scale of impossible to inevitable. The likelihood can expressed as numerical Odds or a metaphorical representation of the Position on a scale. There's a 20 % chance that you'll succeed. The odds that he'll actually do it are one in a million.

Probability=> fs:Probability

### [**People**](https://w3id.org/framester/data/framestercore/People)&#x20;

This frame contains general words for Individuals, i.e. humans. The Person is conceived of as independent of other specific individuals with whom they have relationships and independent of their participation in any particular activity. They may have an Age, Descriptor, Origin, Persistent\_characteristic, or Ethnicity. A man from Phoenix was shot yesterday. She gave birth to a screaming baby yesterday. I study 16-year-old female adolescents. I am dating an African-American man. She comforted the terrified child. I always thought of him as a stupid man.

Participant(LotteryParticipant)=> fsyn:Player=>rdfs:subClassOf fs:People

## Used Content ODPs

The following represent the Content Ontology Design Patterns adopted to model the Gambler’s Fallacy Ontology. Most of these ODP’s classes and properties have been used and combined during the modeling process.

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

## Other used resources

### [The Cognitive Characteristics Ontology](https://smiy.sourceforge.net/cco/spec/cognitivecharacteristics.html)

#### cco:[belief](https://smiy.sourceforge.net/cco/spec/cognitivecharacteristics.html#belief)

*has belief* - An uncertain relation for competence representation. That means beliefs, persuasions or opinions, which can also be misconceptions.

### [DBpedia](https://www.dbpedia.org/about/)

About:[produces](http://dbpedia.org/ontology/produces)

An Entity of Type: [Property](http://www.w3.org/1999/02/22-rdf-syntax-ns#Property), from Named Graph: <http://dbpedia.org/resource/classes#>, within Data Space: [dbpedia.org](http://dbpedia.org/)

## Final comments

Chat GPT sometimes makes confusion between Hot hand fallacy and Gambler’s fallacy or mix up them without not considering their differences. Gambler’s fallacy is related to a random event observed by a player: the same event happen different times in a row so the next time is “due” to change according to the probability(GF) or instead It will happen again (*hot outcome*); the Hot Hand fallacy instead is more related to a person involved in a series of same events happened in a row, such as winning/losing situations in a game: if I win three times in a row in a card game probably I will win the fourth time(hot hand) and so I can consider to bet more money the next time or I can think that I had enough luck so I want to low my bet because next time probably I cannot win (stock of luck).

Another thing to consider is the opposite effect of the Gambler’s fallacy bias, namely the *hot outcome*: in the Gambler’s fallacy bias if a series of previous draws has produced as an outcome always a black number, the probability that a black number will also come out in the next draw is lower, so consequently a red number is more likely to be drawn. In the hot outcome, on the other hand, it is the opposite: if a series of previous draws produced a black number then the probability that in the next draw the number will be black is higher. In both cases the player's perception of probability is incorrect because each draw is unrelated to the previous or next draw and the probability of drawing a red or black number always remains the same.

## Bibliography

The following resources have been used to have a better understanding of the Gambler's Fallacy Bias:

Wikipedia, *Gambler's Fallacy*, ([https://en.wikipedia.org/wiki/Gambler%27s\_fallacy](https://en.wikipedia.org/wiki/Gambler's_fallacy));

James Sundali, Rachel Croson, *Biases in casino betting: The hot hand and the gambler’s fallacy* in *Judgment and Decision Making*, Vol. 1, Issue 1 (2006), pp. 1 – 12, (DOI:<https://doi.org/10.1017/S1930297500000309> )
