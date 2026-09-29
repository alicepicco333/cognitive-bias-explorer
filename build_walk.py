"""
Story walkthrough data (data/walk.json, data/walk.js): each user story split into sentences, and for each
sentence the story individuals it describes. Run from the repo root after build_data.py:

    python build_walk.py

The links between sentences and individuals were made by hand, by reading each story against its graph:
CUES lists, for every individual, phrases from the story that describe it. An individual is linked to a
sentence when one of its phrases appears in it. NOTES records where the story and the ontology disagree.
Individuals no sentence describes are listed in the output and shown as such on the page.
"""
import json, os, re

ROOT = os.path.dirname(os.path.abspath(__file__))
D = json.load(open(os.path.join(ROOT, "data", "biases.json"), encoding="utf-8"))

CUES = {
    "bias-blind-spot": {
        "Emily": ["emily"], "Chris": ["chris"],
        "Decision": ["prioritizing features", "decision-making"],
        "Biased_Opinion": ["swayed by his personal interest"],
        "Superiority_of_one's_idea": ["a functionality she personally valued", "her preferences and experiences were influencing"],
        "Realization_of_bias": ["she realized the potential bias", "reflecting on this realization"],
    },
    "naive-cynicism": {
        "Chris": ["alex"],
        "Current_challenge": ["tight deadline", "workload is overwhelming", "demanding project"],
        "Offered_help": ["wants to help", "offers her assistance", "suggests collaborating", "generous offer"],
        "Naive_Cynicism": ["naive cynicism"],
        "Decline_of_offer": ["decline her offer"],
    },
    "naive-realism": {
        "Maria": ["maria"], "Akio": ["akio"],
        "Naive_Realism": ["naive realism"],
        "Target_Perspective": ["proposes a more serene", "each other's cultural traditions"],
        "Underlying_belief_(cultural_universality)": ["universally appealing", "universal truth"],
        "Perception_of_own's_belief": ["believes her proposal perfectly represents", "his cultural traditions represent an objective"],
    },
    "confabulation": {
        "Sarah": ["sarah"],
        "Night_Out": ["night out", "concert"],
        "Memory_gap": ["without a clear memory"],
        "Fabricated_story": ["fabricates a story", "confabulated narrative", "shares this story", "fabricated story"],
        "Telling_parents_fabricated_evidence": ["family asks about her whereabouts", "shares this story with her family"],
    },
    "clustering-illusion": {
        "Lottery": ["lottery"],
        "Pattern_lottery_numbers": ["pattern emerging in the winning numbers", "apparent patterns she observed"],
        "Consecutive_digits": ["consecutive digits"],
        "Illusion_pattern": ["apparent pattern", "not entirely random", "cracked the code", "clustering illusion"],
    },
    "insensitivity-to-sample-size": {
        "Me": ["i'm excited", "i want to avoid"],
        "Game_review": ["reviews", "streamer opinions", "reviewer"],
        "Game_choice": ["manage my expectations", "balanced view"],
        "Game_bought": ["well-rounded decision"],
    },
    "neglect-of-probability": {
        "Amelia": ["amelia"],
        "Deadline": ["deadline"],
        "Procrastinate": ["procrastination", "plenty of time", "pushing off"],
        "Task_management": ["tasks piling up", "urgency of tasks"],
        "Job_presentation": ["presentation"],
    },
    "anecdotal-fallacy": {
        "Subject": ["as a health-conscious individual", "i decide to follow", "i continue promoting"],
        "Losing_weight": ["weight loss goals", "change in my weight"],
        "Friend_lost_weight": ["testimonial from a friend", "success story", "friend's positive experience"],
        "friend_losing_weight": ["lost a significant amount of weight"],
        "Working_diet": ["i decide to follow", "advocating for the effectiveness"],
        "Diet_works": ["effectiveness of the", "continue promoting"],
    },
    "illusion-of-validity": {
        "Expert_investor": ["john"],
        "Investorship_knowledge": ["track record", "previous triumphs", "past successes"],
        "Investor_PerceivedValidity": ["reliability of his judgment", "perceived expertise"],
        "Investor_predicting": ["future investment decisions", "predict market movements"],
        "Positive_outcome": ["overconfident strategy"],
        "Biased_investement": ["to invest based on"],
        "Negative_outcome": ["market fluctuations"],
        "Identicality_aspect": [],
    },
    "masked-man-fallacy": {
        "Individual": ["a man overheard", "he notices", "the man continues", "the individual has fallen"],
        "John_Smith": ["john smith"],
        "Heart_surgeon": ["heart surgeon"],
        "Jazz_saxophonist": ["saxophonist", "jazz musician"],
        "Knowledge": ["name of his heart surgeon"],
        "Individual_perception_experience": ["overheard a conversation", "talking about the same person"],
        "Individual_perceived_validity": ["must be different individuals", "seemed incompatible"],
    },
    "recency": {
        "Interviewer": ["human resources manager", "the manager", "interviewer"],
        "Interview_perception_experience": ["job interview"],
        "Past_memory": ["encounters difficulties", "initial setbacks", "earlier stages"],
        "Recent_memory": ["delivers strong responses", "final two questions", "final stages"],
        "Memory_encoding": ["leaving a positive impression", "leaving a lasting impression"],
        "Memory": ["lasting impression"],
        "Importance": ["greater significance"],
        "High_importance": ["greater significance"],
        "Low_importance": ["overshadowing or overlooking"],
        "Deciding": ["evaluation process"],
        "Final_decision": ["final decision-making"],
    },
    "gamblers-fallacy": {
        "Lottery_Player": ["as a participant", "i believe"],
        "Lottery_Draw": ["lottery draw"],
        "Next_Number_Draw": ["only one number could be drawn", "the result is in"],
        "Past_Number_Draw_Series": ["draw after draw", "sequence of four consecutive black", "sequence of past draws"],
        "Red_Number": ["red number", "coloured in black and the other half red"],
        "Black_Number": ["black number", "coloured in black"],
        "ProbabilityLevel": ["more probability", "overdue"],
    },
    "hot-hand-fallacy": {
        "Sport_Bettor": ["sports bettor"],
        "Sport_Bets": ["betting decisions", "betting strategy", "base my bets"],
        "Football_Team_Match_Bet": ["football team matches", "the next time"],
        "Football_Team_Match_Bet_Series": ["several times in a row", "recent success", "streaks alone"],
        "ProbabilityLevel": ["increase my chances", "much more likely to win"],
        "Winning_Bet": ["chances of winning", "win the bet"],
    },
    "illusory-correlation": {
        "Baseball_Player": ["baseball player"],
        "Baseball_Match": ["winning in baseball", "winning games", "on the field"],
        "pair_of_socks": ["socks"],
        "Victories": ["winning streaks", "victories", "more wins"],
        "TrendAwareness": ["noticed a peculiar trend", "i'm starting to realize"],
        "VariablesPattern": ["find patterns where none exist"],
        "VariablesCorrelation": ["associate these socks with our victories", "illusory correlation between"],
        "IllusionEffect": ["lucky charm", "magical influence", "illusory correlation"],
    },
    "pareidolia": {
        "park_hiker": ["as someone intrigued", "during one of my walks"],
        "Walk": ["walks in the local park", "my stroll"],
        "weather-beaten_tree_trunk": ["tree trunk"],
        "RandomStimulus": ["knots and ridges", "random stimuli"],
        "FacialShape": ["semblance of a face", "the face staring back"],
        "FacialShapeIllusion": ["the face staring back", "cognitive trickery"],
        "SensorialPerception": ["interplay of light and shadow", "my perception"],
    },
    "anthropomorphism": {
        "Child": ["child"],
        "Puppet": ["puppet", "mr. whiskers"],
        "Child_perception_experience": ["imaginative world", "sentient being", "attributes human characteristics"],
        "Joy": ["joy"], "Sadness": ["sadness"],
    },
}
NOTES = {
    "naive-cynicism": "The story calls the developer Alex; the ontology names the same person Chris. Sarah, who offers help, has no individual of her own.",
    "clustering-illusion": "Sarah is in the file, but no property links her to the rest of the graph, so the walkthrough cannot show her.",
    "illusion-of-validity": "Identicality_aspect (the expectation and the outcome are not identical) is not described in any sentence of the story.",
    "insensitivity-to-sample-size": "The story never says the game was bought; Game_bought stands for the decision the narrator is working towards.",
}
ABBR = re.compile(r"\b(Mr|Mrs|Ms|Dr)\.\s+")


def sentences(paras):
    out = []
    for p in paras:
        p = ABBR.sub(lambda m: m.group(1) + "․ ", p.strip())  # keep "Mr. Whiskers" in one sentence
        for s in re.split(r"(?<=[.!?])\s+(?=[A-Z“\"'])", p):
            if s.strip():
                out.append(s.strip().replace("․", "."))
    return out


def local(iri):
    return re.split(r"[#/]", iri)[-1]


result, report = {}, []
for b in D["biases"]:
    connected = set(x for e in b["instances"]["edges"] for x in (e["source"], e["target"]))
    nodes = [n for n in b["instances"]["nodes"] if n["id"] in connected]
    cues = CUES[b["id"]]
    missing = [local(n["id"]) for n in nodes if local(n["id"]) not in cues]
    assert not missing, (b["id"], "no cues for", missing)
    steps, seen = [], set()
    for s in sentences(b["userStory"]):
        low = s.lower().replace("’", "'")
        hit = [n["id"] for n in nodes if any(c in low for c in cues[local(n["id"])])]
        seen.update(hit)
        steps.append({"text": s, "nodes": hit})
    unused = [c for n in nodes for c in cues[local(n["id"])] if not any(c in st["text"].lower().replace("’", "'") for st in steps)]
    assert not unused, (b["id"], "cues that match nothing", unused)
    result[b["id"]] = {"steps": steps, "coverage": [len(seen), len(nodes)], "note": NOTES.get(b["id"], ""),
                       "unmentioned": [n["id"] for n in nodes if n["id"] not in seen]}
    report.append(f"{b['id']:30s} {len(steps):2d} sentences, individuals described {len(seen)}/{len(nodes)}"
                  + ("" if len(seen) == len(nodes) else "  not described: " + ", ".join(local(n['id']) for n in nodes if n['id'] not in seen)))
json.dump(result, open(os.path.join(ROOT, "data", "walk.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
open(os.path.join(ROOT, "data", "walk.js"), "w", encoding="utf-8").write("window.CBO_WALK = " + json.dumps(result, ensure_ascii=False) + ";\n")
print("\n".join(report))
