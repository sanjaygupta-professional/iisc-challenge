# IISc AI Challenge — Strategy Brief
## Team Decision Record & Vision Statement

**Challenge:** 2026 AI Challenge for Healthy Brain Aging — IISc Bangalore, Centre for Brain Research  
**Deadline:** May 20, 2026 (Proposal submission)  
**Prize:** ₹2 crore  
**Date of this document:** April 26, 2026  

---

## How This Document Was Created

This document captures the structured discovery session conducted before any research began. Six deliberate questions were asked and answered to arrive at a shared understanding of the team's vision, constraints, and strategic direction. All decisions below are the team's own — not assumed.

---

## Decision Record — Six Questions, Six Answers

### Q1: What is the team's PRIMARY goal?

> **Options considered:** Win prize | Build something real | Publish/get recognized | Learning exercise  
> **Team decision:** **Build something real — swing hard, even if riskier.**

*Rationale:* The team explicitly chose the highest-ambition path. The research direction and proposal framing follow from this: we are not optimizing for "safe and fundable" but for "genuinely novel and impactful." This shapes every subsequent decision.

---

### Q2: What are the actual skills on the team?

| Skill | Team Status |
|-------|-------------|
| Generative AI / LLMs | ✅ Core strength — all team members |
| System architecture | ✅ Strong |
| Statistics (theory) | ✅ Solid theoretical base |
| Deep learning (practical) | ⚠️ Self-taught, some practical exposure |
| Tabular ML | ⚠️ Some practical exposure |
| NLP / Language models | ✅ Strong |
| Project/program management | ✅ All members, IT professionals |
| Neuroscience / Clinical domain | ❌ Absent — actively recruiting a neurologist |

> **Team decision:** **Leverage LLM/GenAI strength; build toward domain gap by recruiting a clinical collaborator.**

*Implication:* The proposal should be architecturally LLM-native, using the team's real superpower. Clinical domain gaps should be framed as a collaboration plan, not hidden.

---

### Q3: Proposal or working model by May 20?

> **Team decision:** **Proposal only — no working model required.**

*Key insight:* This is a 3-page proposal evaluated on innovation, usability, impact, and relevance. Judges want to see deep research grounding, a credible methodology, and a compelling vision — not code. This means the next 24 days are for thinking deeply, not building hastily.

---

### Q4: Who uses the solution and where?

> **Deployment pyramid decided:**

```
Level A (Validate):   Hospital Neurologist — confirms, provides ground truth
Level B (Triage):     MBBS / Primary Care Doctor — interprets risk, decides referral  
Level C (Screen):     ASHA / Community Health Worker — frontline, mass deployment
```

> **Team decision:** **Primary users are B (MBBS) and C (ASHA). Level A validates and approves.**

*Why this matters:* An MRI-based system designed for Level A neurologists reaches ~0.1% of at-risk India. A system designed for Level C ASHA workers, using whatever data they already have, reaches potentially 100 million people. This is the India-first design constraint that shapes the entire technical approach.

---

### Q5: What data inputs are realistically available at B and C level?

> **Team decision:** **Record-assisted intake — ASHA enters whatever health records exist, plus observational data. System works with whatever is available.**

*Key insight from this decision:* The system must be **missing-modality robust**. An ASHA worker in rural Karnataka may have a blood test from the local PHC, a family's description of memory lapses, and a 5-minute cognitive assessment. Some may have more, some less. The AI must work with all of it.

| Data Type | ASHA (C) | MBBS (B) | Neurologist (A) |
|-----------|----------|----------|-----------------|
| Cognitive tests (verbal, memory recall) | ✅ | ✅ | ✅ |
| Voice / speech in local language | ✅ Phone mic | ✅ | ✅ |
| Basic demographics + family history | ✅ | ✅ | ✅ |
| Blood biochemistry (basic: HbA1c, glucose) | ✅ If PHC records exist | ✅ | ✅ Full panel |
| p-tau217 / amyloid blood test | ❌ Not yet | ⚠️ Emerging | ✅ |
| Audiometry (hearing tests) | ⚠️ Basic device | ✅ | ✅ |
| MRI neuroimaging | ❌ | ❌ | ✅ |

---

### Q6: What is India's unique research advantage?

> **Team's chosen advantages:**

| Advantage | Why It Matters |
|-----------|----------------|
| **C — Frugal AI constraint breeds innovation** | Designing for zero-MRI forces architectural innovation that Western teams, working in resource-rich hospitals, never face. The resulting system is more robust, more generalizable, and ultimately more globally exportable. |
| **D — ASHA flywheel** | India's 1 million+ ASHA workers are an unmatched deployment channel. Every interaction generates training data. The more ASHA workers use it, the better it gets. This creates a compounding improvement loop that no Western study can replicate. |
| **E — Multilingual cognitive assessment** | All existing Alzheimer's tests (MMSE, MoCA, CDR) are translated from English with known cultural and linguistic bias. India has 22 official languages and hundreds of dialects. Building natively multilingual cognitive AI is a problem only India needs to solve — and only India has the data to solve it. |

> **Team's core insight, stated plainly:**  
> *"We are designing for a deployment context that Western AI ignores. The constraints we face force us to solve problems that will eventually matter everywhere."*

---

## Team Vision Statement

> **"Build an India-first, community-deployable AI system for early Alzheimer's detection — designed for ASHA workers, trained on India's only rural/urban longitudinal cohort, and capable of working with whatever data is available — no MRI required."**

This system will:
- Reach India's **8.8 million undiagnosed dementia patients** (80% remain undetected)
- Serve through **1 million+ ASHA workers** as the primary distribution channel
- Work in **Indian languages** (not English cognitive tests)
- Improve continuously through a **federated learning flywheel**
- Address India's unique T2D-Alzheimer's intersection (**101 million diabetics**)

---

## What This Is NOT

To stay focused, the team explicitly decided this is NOT:
- A hospital MRI analysis system (Level A only, low reach)
- A pure academic benchmark paper (needs clinical deployment design)
- A translated Western model (must be India-native, not adapted)
- A safe, incremental proposal (swing hard was the directive)

---

*Next document: [01_research_direction_overview.md](01_research_direction_overview.md) — Six directions evaluated, one combination recommended.*
