# Research Report: Direction 5
## LLM-Powered Clinical Decision Support for Alzheimer's

**Research question:** What exists in LLM/GenAI for Alzheimer's clinical decision support? What is the multilingual gap for Indian languages?  
**Research date:** April 26, 2026  

---

## Executive Summary

LLM-based approaches for Alzheimer's assessment have advanced rapidly in 2025. Multi-agent LLM systems on EHR notes, tabular LLMs that handle missing biomarker data, and speech-based LLM scoring have all been published. However, every system has one or more fatal limitations for India: English-only, requires years of longitudinal records, uses closed APIs (GPT-4) that can't run offline, or was trained on Western data.

**The single most important finding:** LLM-based cognitive assessment in Indian languages **does not exist**. This is a fully open research gap that the BhāratBrain team — with its LLM strength — is uniquely positioned to address.

---

## Finding 1: Multi-Agent LLM Framework Outperforms Single Models on EHR-Based AD Prediction

**System:** CARE-AD (Collaborative Analysis and Risk Evaluation for Alzheimer's Disease)  
**Year:** 2025  
**Source:** *npj Digital Medicine* / PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC12375024/  
https://www.nature.com/articles/s41746-025-01940-4  
**Dataset:** US Veterans Health Administration (VHA CDW), 2000–2022; 17,488 AD cases  

**Key results:**
- Multi-disciplinary LLM agent team (neurology, psychiatry, geriatrics agents) analyzing longitudinal EHR notes
- Accuracy at **10 years pre-diagnosis:** 0.53 (vs. 0.26–0.45 for single-model baselines)
- Accuracy at **1 day pre-diagnosis:** **0.83**

**Fatal limitations for India:**
- Requires **minimum 5 years of longitudinal notes** — excludes most rural Indian patients with sparse visit histories
- **English-only** — not usable for any Indian language
- Outputs are agent reasoning traces, not clinically actionable probability scores
- Trained on US VHA data; no Indian cohort validation

**What BhāratBrain takes from this:** The multi-agent architecture principle is sound. The gap is adapting it for sparse, multilingual, variable input data.

---

## Finding 2: LLMs Can Extract Cognitive Scores From Notes — But Open-Source Models Hallucinate 4× More

**Study:** "Evaluating LLMs in Extracting Cognitive Exam Dates and Scores"  
**Year:** 2024  
**Source:** PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC10888985/  

**Key results:**
- **GPT-4:** MMSE extraction accuracy 83% (sensitivity 89.7%, precision 82.7%), CDR accuracy 87.1%
- **LLaMA-2:** MMSE accuracy only 66.4%; CDR precision drops to 48.3% due to hallucination
- LLaMA-2 produced **27 total hallucination events** vs. 3 for GPT-4 on cognitive score extraction

**Critical implication for India deployment:**
Open-source models (the only viable option for offline, low-resource deployment where cloud APIs are unavailable) hallucinate at 4× the rate of GPT-4. There is currently **no validated, deployable, open-source LLM** for clinical Alzheimer's scoring in low-resource settings.

**BhāratBrain's challenge:** Must either (1) use a closed API (GPT-4 / Claude) with connectivity requirement, or (2) develop and validate an open-source model with safety guardrails for offline use. This is a core design decision for the proposal.

---

## Finding 3: Speech-Based LLM Scoring Reaches ~87% Accuracy — English Only

**System 1:** GPT-3 embeddings on ADReSSo dataset  
**Year:** 2022  
**Source:** Agbavor & Liang, *PLOS Digital Health*: https://pmc.ncbi.nlm.nih.gov/articles/PMC9931366/  
**Result:** GPT-3 Babbage embeddings + SVM: **80.3% accuracy**, 97.1% recall  

**System 2:** ChatGPT-augmented multimodal pipeline  
**Year:** 2024  
**Source:** *ETRI Journal*: https://onlinelibrary.wiley.com/doi/full/10.4218/etrij.2023-0356  
**Result:** Speech + text + ChatGPT opinions: **87.3% accuracy**

**Benchmark dataset:** ADReSSo (Alzheimer's Dementia Recognition through Spontaneous Speech) — Cookie Theft picture description task, ~237 recordings, English speakers only, Boston clinical population.

**Fatal limitations for India:**
- The Cookie Theft task is culturally specific and not validated for Indian populations
- No non-English language work exists in this line of research
- Dataset of 237 recordings is too small for robust validation

**Key resource for BhāratBrain:** AI4Bharat's **IndicWav2Vec** covers 40 Indian languages for speech representation — this has NOT been applied to dementia detection. This is the building block for an Indian-language speech biomarker pipeline.

---

## Finding 4: Tabular LLMs Handle Incomplete Biomarker Data Without Imputation

**System:** TAP-GPT (Tabular Alzheimer's Prediction GPT)  
**Year:** 2025  
**Source:** arXiv 2603.17191: https://arxiv.org/abs/2603.17191  

**Key results:**
- Adapts TableGPT2 for AD diagnosis using heterogeneous structured biomarkers (PET, CSF, MRI-derived, cognitive, genetic)
- **Maintains stable performance under simulated and real-world missingness without imputation**
- First systematic application of a tabular-specialized LLM to multimodal biomarker-based AD prediction

**Limitations:**
- Performance degrades on high-dimensional inputs
- Trained entirely on **ADNI** (well-controlled, high-resource US dataset)
- No performance metrics on truly sparse/low-resource data profiles
- No validation outside Western clinical populations

**What BhāratBrain takes from this:** The tabular LLM approach to missing data is the right technical direction. The gap is: (1) validating on Indian cohort data, (2) using truly low-resource input profiles (not ADNI-grade data), and (3) combining structured biomarkers with unstructured speech/text inputs.

---

## Finding 5: Indian-Language Dementia Speech Research — Only One Small Pilot, No LLM

**Study:** Indic Dementia Speech Dataset pilot (Telugu, Tamil, Hindi)  
**Year:** 2023  
**Source:** ResearchGate: https://www.researchgate.net/publication/375778064_Dementia_Speech_Dataset_Creation_and_Analysis_in_Indic_Languages_-_A_Pilot_Study  

**Key findings:**
- This is the **only known work** covering Indian languages for dementia speech detection
- Method: translated the English DementiaBank dataset into Telugu, Tamil, Hindi — not a clinically collected native-language corpus
- Uses classical NLP/ML, **not LLMs**
- No validation on illiterate or low-education populations

**ICMR Neurocognitive Toolbox (ICMR-NCTB):**  
Source: *Frontiers in Neurology*: https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2021.661269/full  
- Validated across Hindi, Bengali, Telugu, Kannada, Malayalam
- Shows 81.1% sensitivity / 88.8% specificity for MCI
- But: pen-and-paper tool, no LLM integration, no AI scoring pipeline

---

## The ADReSS/ADReSSo Benchmark — What BhāratBrain Must Cite

The field's primary speech benchmarks for Alzheimer's detection are the **ADReSS** (Interspeech 2020) and **ADReSSo** (Interspeech 2021) challenges. Any speech-based component of the proposal should:
1. Reference these benchmarks as the current English-language state of the art
2. Explicitly note their English-only limitation as the motivation for Indian-language work
3. Propose an Indian equivalent benchmark using SANSCOG/TLSA cognitive assessment transcripts

**ADRD-Bench (2025):** arXiv 2602.11460 — first ADRD-specific LLM benchmark; top models hit 93% on QA but fail on reasoning about care goals. Useful citation for framing "LLM performance ≠ clinical utility."

---

## Research Gaps — The BhāratBrain Opportunity

### Gap 1 (THE BIGGEST): LLM-Based Cognitive Assessment in Indian Languages Does Not Exist

No published system processes spontaneous speech or text in Hindi, Tamil, Kannada, Telugu, or any other Indian language through an LLM pipeline for AD/MCI scoring. The only Indic-language work uses translated datasets + classical ML.

**Immediately actionable resources that exist but haven't been combined:**
- LASI-DAD: 12 Indian-language cognitive batteries (the training data)
- AI4Bharat IndicWav2Vec: 40 Indian language speech representations (the model backbone)
- ICMR-NCTB: validated Indian cognitive assessments (the ground truth labels)

**BhāratBrain's contribution:** First native Indian-language LLM pipeline for Alzheimer's cognitive scoring.

### Gap 2: No System Handles Both Variable Input AND Structured Risk Scoring for Low-Resource Settings

- TAP-GPT handles tabular missingness but requires PET and CSF (unavailable at primary care)
- CARE-AD requires 5+ years of EHR notes
- No published system outputs a calibrated, structured risk score when input is partial — a voice memo, family-reported symptoms, and one HbA1c value

**This is the defining clinical reality for India** — and no system addresses it.

### Gap 3: Open-Source Safety Gap for Offline Deployment

All robust Alzheimer's LLM systems use GPT-4 or equivalent closed APIs. No validated, open-source solution exists for offline, low-bandwidth deployment — exactly what rural India needs. A hallucination-mitigated open-source clinical LLM for Indian-language Alzheimer's screening is an unaddressed engineering and safety challenge.

---

## References

1. "CARE-AD — Collaborative Analysis and Risk Evaluation for Alzheimer's Disease." *npj Digital Medicine*, 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12375024/ and https://www.nature.com/articles/s41746-025-01940-4

2. "LLM Cognitive Exam Score Extraction (GPT-4 vs LLaMA-2)." PMC, 2024. https://pmc.ncbi.nlm.nih.gov/articles/PMC10888985/

3. Agbavor F, Liang H. "GPT-3 on ADReSSo." *PLOS Digital Health*, 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC9931366/

4. "ChatGPT-augmented multimodal Alzheimer's speech detection." *ETRI Journal*, 2024. https://onlinelibrary.wiley.com/doi/full/10.4218/etrij.2023-0356

5. "TAP-GPT: Tabular LLMs for AD Prediction." arXiv, 2025. https://arxiv.org/abs/2603.17191

6. "LLMs for Dementia Care and Research (review)." PMC, 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC11285660/

7. "ADRD-Bench." arXiv, 2025. https://arxiv.org/abs/2602.11460

8. "Cognitive Bias in Clinical LLMs." *npj Digital Medicine*, 2025. https://www.nature.com/articles/s41746-025-01790-0

9. "Hallucination in Clinical LLMs." *Nature Communications Medicine*, 2025. https://www.nature.com/articles/s43856-025-01021-3

10. "ICMR Neurocognitive Toolbox Indian Language Validation." *Frontiers in Neurology*, 2021. https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2021.661269/full

11. "Barriers in ADRD Research in LMICs." PMC, 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC11934044/

12. "Dementia Speech Dataset in Indic Languages (pilot)." ResearchGate, 2023. https://www.researchgate.net/publication/375778064_Dementia_Speech_Dataset_Creation_and_Analysis_in_Indic_Languages_-_A_Pilot_Study

13. ADReSS Challenge — Interspeech 2020. https://luzs.gitlab.io/adress/

14. ADReSSo Challenge — Interspeech 2021. https://luzs.gitlab.io/adresso-2021/
