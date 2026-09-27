> For the complete documentation index, see [llms.txt](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://the-bias-project.gitbook.io/cognitive-bias-ontologies-project-documentation/the-cognitive-bias-ontology-introduction/the-cognitive-bias-ontologies-project-an-overview/workflow-and-methodology.md).

# Workflow and Methodology

Description of the workflow and methodology adopted for the development of the project

## I**ntroduction**

This section is devoted to explaining the working process and methodology used in the different steps that led to the creation of a specific ontology for each chosen bias. For all of them, the same approach composed of several steps was employed: first, an initial activity of research and documentation, then, following a particular type of technique (*eXtreme Design*), an ideation and design phase, a development, modelling and implementation phase, and finally a presentation and visualization phase. Although an attempt was made to follow a certain order of execution, on more than one occasion there were jumps between phases, often to modify choices made in the design phase to have a more accurate modelling activity. Each of the individual phases will be presented in detail in the following paragraphs.

## Research and understanding of the topic

The first step was to gain a general idea of what cognitive biases were by taking advantage of the documentation provided to us by our tutor Stefano de Giorgis. This allowed us to understand how essentially our mind is often affected by these biases, which constitute a universal psychological phenomenon that is most evident in the activity of human judgment and decision-making\[[1](#references)]. Every individual in daily life often makes judgments and decisions, both unconsciously and consciously, that are potentially influenced by one or more different types of cognitive biases.

As a first approach to a general understanding of the biases, the **Cognitive Bias Codex**\[[2](#references)] was consulted: this is a kind of wheel in which 188 cognitive biases have been identified and divided into 4 main macro categories\[[3](#references)] then grouped in turn into 20 subcategories, to create individual clusters containing different biases with similar characteristics.

Our group chose 3 biases belonging to the "**Too Mutch information**" macro category and 13 biases to the "**Not Enough Meaning**" category, for a total of 16 biases. The biases were then divided equally among the four group members, and each person then individually engaged in more in-depth research on their biases. A variety of resources were examined: from generalist websites to academic articles publicized in peer-reviewed journals to have a comprehensive understanding of how each bias works and its specifics.

## Conception and design phase: The eXtreme Design approach

Once the basic aspects of bias were apprehended, we moved on to the ideation and design phase of each ontology. To do so, on the advice of our tutor, the eXtreme Design\[[4](#references)] methodology was adopted, and this made it possible to delineate the individual steps to be followed, starting precisely from ideation and design to the actual development of the ontology itself.

The eXtreme Design methodology consists of several Tasks that can be summarized mainly in 4 points:

1. Identification of the main requirements and characteristics for the ontology design process and formulation of a set of Competency Questions (CQs) that the ontology should be able to answer.
2. Assessment at the modelling stage whether existing Ontology Design Patterns (ODPs) in the Content ODPs2 repository can be reused to develop the module of each bias.
3. Validate ontology modules through error provocation, inference checking, and basic inconsistency checking.
4. Integrate the modelled and tested ontologies into a single closure module that incorporates them all and populate it with domain entities extracted from specific knowledge graphs.

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FQQoGDYYwvCJ2y1AWHXBr%2Fcap.png?alt=media&amp;token=3d53da89-9e20-437d-9167-9b3b2e7d2249" alt=""><figcaption></figcaption></figure>

To follow the eXtreme Design approach more specifically, the first step was to get into the context of the project, i.e., to get in touch with the so-called domain experts (*customer representative*), represented in our case by[ Chat GPT](https://chat.openai.com/) (but in some occasions we used [Google Gemini](https://gemini.google.com/app) as well) to have a structured and common basis for all the biases to start from and a general view of the task at hand.

The interaction with Chat GPT was done by asking the AI a series of questions in natural languages about each bias: for example, it started by first asking for a simple definition of the bias under consideration.

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FI670bFSCdDxRsevpfcNA%2Fcap1.png?alt=media&amp;token=dbfc14d0-f337-4b23-afe9-9f5c6381833c" alt=""><figcaption><p><em>Definition of Pareidolia Bias</em></p></figcaption></figure>

After that, we moved on to the request to create 10 real scenarios (*requirement stories*) in which it was possible to have a manifestation of the bias.

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FQ1tAkqBocPsBRfbPe2wJ%2Fimage.png?alt=media&amp;token=d152c5f8-6981-4d9b-941d-bc6104ece250" alt=""><figcaption><p><em>Ten scenarios for the Pareidolia Bias</em></p></figcaption></figure>

From these scenarios one was selected - generally the one most explanatory of the bias itself although several scenarios were explored before choosing a final one - from which a user story was then derived. This was useful not only to have a clearer idea of the actual application in a potentially real case of the bias itself but also to have a context from which to extrapolate the key concepts that compose the bias under analysis. Under certain circumstances, Chat GPT was asked to rephrase the user story both for the sake of comprehensiveness and to accommodate the subsequent modelling phase. The user stories of each bias were then assigned a title.

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2F0DG0bYozyq2B1QfufRL8%2Fimage.png?alt=media&amp;token=b7792573-5b13-484e-8423-2e271a8c069e" alt=""><figcaption><p><em>User story made from the second scenario:"Seeing Faces in Inanimate Objects"</em></p></figcaption></figure>

ChatGPT was then asked to formulate the skeleton of a possible ontology of the bias while also taking into consideration the user story; this was done to have a clearer idea of the possible classes and properties to be used in the next development and modelling phase.

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FyaMmXAFSWaP5Vw3zwEPL%2Fimage.png?alt=media&amp;token=3037d463-f9b5-4e59-b36a-cff46fc92a2b" alt=""><figcaption><p><em>Classes and Properties for a potential ontology</em></p></figcaption></figure>

Finally, some *competency questions* in natural language were derived from the user story, (questions that the ontology should be able to answer\[[5](#references)]), which were also useful for delineating the focus and field of operation of the ontology itself and what information could be extracted from it. In addition, competency questions can also be used to conduct tests on the actual functionality of the ontology through, for example, SPARQL queries to be executed subsequently.

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FYcbPAmUCqSlX9hdBln0q%2Fimage.png?alt=media&amp;token=f95d4c41-b5ec-4578-9071-011b1c90b10f" alt=""><figcaption><p><em>A possible conpetency question for the Pareidolia Bias</em></p></figcaption></figure>

## Development phase

Once the basic conceptual framework was outlined and a possible real-world case of the manifestation of the bias under consideration was defined through the user story, we moved on to the next phase of development, always taking into consideration the eXtreme Design approach.

First, also taking advantage of the competency questions, concepts and keywords proper to the bias and expressed through the user story were outlined. Therefore, an attempt was made to identify keywords or short phrases that could best represent these concepts.

Then, considering the key concepts identified, the classes previously created by Chat GPT were in turn readjusted and modified to be more in line with the bias itself, and thus have at least starting classes for development.

As suggested by our tutor, we then used the [Framester Hub](https://framester.github.io/) to align our ontologies with the semantic frames on Framester\[[6](#references)]: semantic frames are schematizations of recurring situations, organizing knowledge in terms of entities and fulfilling a role in a given situation. Essentially, the key concepts identified for each bias were entered in the form of keywords within the [QUOKKA](http://etna.istc.cnr.it/quokka/concepts) tool\[[7](#references)] linked with the Framester HUB, and then from a long list of possible Framester, those closest to our concepts were selected.

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FiguhHdNUlKSOr2CdDskI%2Fimage.png?alt=media&amp;token=66427b7d-df41-4e80-a177-cbde03b57672" alt=""><figcaption><p><em>List of framesters extracted from Framester HUB</em></p></figcaption></figure>

Then the extracted framesters were compared with the source classes previously made through Chat GPT and a conceptual alignment was made between them and the framesters themselves. Where suitable framesters could not be found, again through QUOKKA it was decided to use the resources on [Dbpedia](https://www.dbpedia.org/) and always do the alignment with the entities obtained from it.

Finally, to perform the actual modeling activity, [Ontology Design Patterns (ODPs)](http://ontologydesignpatterns.org/wiki/Ontology_Design_Patterns_._org_%28ODP%29), i.e., basic patterns already assembled and reusable in modeling any ontology were used as a reference point. Ontology Design Patterns are divided into several categories but in our case the patterns available in the "Content Patterns" section were reused.  In this section there is a list from which the most convenient patterns were chosen depending on the type of bias and aspects within it that best suited a specific type of Content Pattern.

Framesters and Content ODPs were applied in the realization, through [Graffoo](< https://essepuntato.it/graffoo/>), of a graphical model of the possible ontology\[[8](#references)]. Classes and the relationships between them were shown in the graph: framesters were used to indicate classes while ODPs, in addition to exploiting the conceptual structure, were used in defining properties. Where appropriate classes and properties could not be found between framesters and ODPs, it was decided to create them ad hoc again exploiting DBpedia and other external resources.

Due to the similarities between different biases, during this phase we tried where it was possible to reuse the same ODPs, classes and properties to ensure interchangeability between them and possibly to make the next modeling phase easier to perform.&#x20;

We felt it was right to make this choice because it would not have made sense to use different classes and properties to express similar or completely the same concepts and relationships in the creation of the ontology, and it would certainly have been more complicated for the modeling phase as well.

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FKmGlEqArbimcN6XfrkpH%2Fimage.png?alt=media&amp;token=1e1c1713-adc3-45ae-a70f-699a04efb1e9" alt=""><figcaption><p><em>A modeling graph of Pareidolia Bias made with Graffoo</em></p></figcaption></figure>

## Modelling and implementation phase

For the modelling and implementation phase, the open-source editor [Protégé](https://protege.stanford.edu/.) was used, leveraging RDF/XML syntax formatting. Through the editor for each ontology, classes and properties (*object properties* and *data properties*) were created, domains and ranges were defined for each property, as well as any restrictions and individuals taken from the user story for each class. Once the ontology was completed, the reasoner was launched to check for inconsistencies. All ontologies were saved individually in a .OWL file and hosted on GitHub, so that there was a deferencable URI for the modules of each bias. Each of these modules then was imported and collected under a closure module as a sort of single umbrella ontology, the Cognitive Bias Ontologies.

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2FRwn4eSAFB1HJGb735Cqv%2Fimage.png?alt=media&amp;token=2b477664-bef6-40e5-afe4-b3282674aef0" alt=""><figcaption><p><em>Modeling phase on Protégé editor</em></p></figcaption></figure>

## Presentation and Visualization

GitBook, a platform for presenting project documentation, was used to present the work done, while the [Online Ontology Visualization](http://owlgred.lumii.lv/.) (OWLGrEd) tool was mainly used to visualize each ontology but in some cases [WebVOWL ](https://service.tib.eu/webvowl/)was used as well.

<br>

<figure><img src="https://3715292082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F69TpXcnhHK5qcm12xmil%2Fuploads%2Fcx2w0G1nzFGxdlitMxxc%2Fimage.png?alt=media&amp;token=28254c9c-1880-4ea0-b09a-e5b3a5713f22" alt=""><figcaption><p><em>Visualization of Pareidolia Bias Ontology</em></p></figcaption></figure>

***

### References

\[1] JE (Hans) Korteling, Alexander Toet, Cognitive Biase&#x73;*,* in *Reference Module in Neuroscience and Biobehavioral Psychology*, Elsevier, 2020.

\[2] Wikipedi&#x61;*, The Cognitive Bias Codex*, <https://de.m.wikipedia.org/wiki/Datei:Cognitive_bias_codex_en.svg>.

\[3] The 4 main macro-categories are: 1) “What should we remember”, 2) “Need to Act Fast”, 3) “Too Much Information”, 4) “Not Enough Meaning”.

\[4] Valentina Presutti, Enrico Daga, Aldo Gangemi, Eva Blomqvist, eXtreme Design with Content Ontology Design Patterns, in *Workshop on Ontology Patterns* (WOP), 2009.

\[5] Natalya F. Noy, Deborah L. McGuinness, *Ontology Development 101: A Guide to Creating Your First Ontology*

\[6] Framester is a frame-based ontological resource acting as a hub between linguistic resources such as FrameNet, WordNet, VerbNet, BabelNet, DBpedia, Yago, DOLCE-Zero, and leveraging this wealth of links to create an interoperable predicate space formalized according to frame semantics and semiotics. Framester uses WordNet and FrameNet at its core, expands it to other resources transitively, and represents them in a formal version of frame semantics (<https://framester.github.io/>).

\[7] The QUOKKA tool is a tool used to query ontological resources and knowledge bases to extract and produce additional knowledge (<http://etna.istc.cnr.it/quokka/concepts>).

\[8] Graffoo is a Graphical Framework for OWL Ontologies, is an open-source tool that can be used to present the classes, properties and restrictions within OWL ontologies, or sub-sections of them, as clear and easy-to-understand diagrams. The advantages of using such a Grafoo diagram are thus that it displays the logical relationships between elements of an ontology, or a sub-section of an ontology, in a manner that is relatively straightforward to understand, once one has grasped the meaning of the different elements of a Graffoo diagram (<https://essepuntato.it/graffoo/>).
