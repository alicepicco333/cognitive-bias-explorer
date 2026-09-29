"""
Quiz data (data/quiz.js): for each bias, a short excerpt of its user story that never names a bias,
and two other biases to offer as wrong answers. Run from the repo root after build_walk.py:

    python build_quiz.py

Each excerpt is two or three sentences picked by hand (EXCERPT) that show the bias at work; the build
checks that none of them names a bias. Wrong
answers come from the same cluster where possible, so the choice is not obvious from the setting alone;
Gambler's fallacy and Hot-hand fallacy are always offered against each other, since they mirror each other.
"""
import json, os, re

ROOT = os.path.dirname(os.path.abspath(__file__))
D = json.load(open(os.path.join(ROOT, "data", "biases.json"), encoding="utf-8"))
W = json.load(open(os.path.join(ROOT, "data", "walk.json"), encoding="utf-8"))

NAMES = r"fallacy|cynicism|naive realism|confabulat|clustering|illusion of validity|illusory|pareidolia|anthropomorph|recency|sample size|neglect|anecdot|blind spot|masked"
MIRROR = {"gamblers-fallacy": "hot-hand-fallacy", "hot-hand-fallacy": "gamblers-fallacy"}
# the sentences of each story that show the bias at work without naming it, picked by reading the stories
EXCERPT = {
    "bias-blind-spot": ["Emily noticed that her colleague", "As the discussion progressed", "However, during a later discussion"],
    "naive-cynicism": ["Enter Sarah", "Sarah, having experienced", "He questions her motives"],
    "naive-realism": ["Maria, rooted in her cultural", "Akio, on the other hand", "Maria and Akio struggle"],
    "confabulation": ["The next morning, Sarah returns", "When her concerned family asks"],
    "clustering-illusion": ["Over the past month", "She observes that the winning", "Excited by this apparent pattern"],
    "insensitivity-to-sample-size": ["I'm excited for the upcoming", "Their glowing reviews"],
    "neglect-of-probability": ["\"There's plenty of time", "But deadlines, like mythical", "The Improbable Dragon"],
    "anecdotal-fallacy": ["I come across a testimonial", "Intrigued by the success story", "At the end of the month"],
    "illusion-of-validity": ["As an experienced investor", "Inspired by his previous triumphs", "Despite occasional market"],
    "masked-man-fallacy": ["As a curious individual", "He notices that", "The man continues"],
    "recency": ["In the midst of a job interview", "However, as the interview progresses", "As a result, the interviewer"],
    "gamblers-fallacy": ["As I watch draw after draw", "It feels as if they are overdue", "I believe that there will be a change"],
    "hot-hand-fallacy": ["I often found myself in situations"],
    "illusory-correlation": ["As a dedicated baseball player", "Over time, I've come to associate", "Despite knowing deep down"],
    "pareidolia": ["During one of my walks", "Intrigued by the interplay", "The patterns etched"],
    "anthropomorphism": ["He has a beloved puppet", "The child attributes human"],
}

quiz = []
for b in D["biases"]:
    sents = [s["text"] for s in W[b["id"]]["steps"]]
    run = []
    for start in EXCERPT[b["id"]]:
        hits = [s for s in sents if s.replace("’", "'").startswith(start)]
        assert len(hits) == 1, (b["id"], start, len(hits))
        assert not re.search(NAMES, hits[0], re.I), (b["id"], "names a bias", hits[0])
        run.append(hits[0])
    same = [x["id"] for x in D["biases"] if x["cluster"] == b["cluster"] and x["id"] != b["id"]]
    quiz.append({"id": b["id"], "excerpt": run, "mirror": MIRROR.get(b["id"]), "sameCluster": same})
print(len(quiz), "excerpts,", sum(len(q["excerpt"]) for q in quiz), "sentences")
open(os.path.join(ROOT, "data", "quiz.js"), "w", encoding="utf-8").write("window.CBO_QUIZ = " + json.dumps(quiz, ensure_ascii=False) + ";\n")
