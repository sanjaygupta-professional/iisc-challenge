# Research Report: Direction 2
## Frugal AI — No-MRI Multimodal Alzheimer's Early Detection

**Research question:** What is the state of the art in Alzheimer's/dementia detection without MRI? What gaps remain for an India-deployable system?  
**Research date:** April 26, 2026  

---

## Executive Summary

The research on non-MRI Alzheimer's detection has accelerated dramatically in 2025–2026. A blood test for Alzheimer's was FDA-approved in May 2025. An Indian population study already demonstrated AUC 0.95 using only cognitive + clinical data. A literacy-independent 5-minute cognitive app achieved AUC 0.93 in a community setting.

**However, a critical gap remains:** No published work combines blood + cognitive + speech data with missing-modality robustness on an Indian cohort. Every missing-modality model in Alzheimer's AI uses MRI/PET. This gap is the exact space BhāratBrain addresses.

---

## Finding 1: FDA-Approved Blood Test Achieves AUC 0.93–0.96 Without MRI

**Study:** "Plasma phospho-tau217 for Alzheimer's disease diagnosis in primary and secondary care using a fully automated platform"  
**Journal:** *Nature Medicine*, 2025  
**DOI:** https://www.nature.com/articles/s41591-025-03622-w  
**Dataset:** 1,767 participants across 4 secondary care cohorts + 1 Swedish primary care cohort  

**Key results:**
- Plasma p-tau217 achieved **AUC 0.93–0.96** in secondary care (accuracy 89–91%)
- **85% accuracy** in primary care settings
- A two-cutoff approach raised accuracy to **92–94%**, flagging ~15% as indeterminate for further testing
- The US FDA **approved** the Lumipulse pTau217/Aβ1-42 ratio blood test in **May 2025** — the first blood AD diagnostic approved

**For India:** The instrument cost (~$50K) is the current barrier. However, a **dried blood spot version** was published in 2025 (Nature Medicine, https://www.nature.com/articles/s41591-025-04080-0) — minimally invasive, no venepuncture required, feasible at PHC level.

**Supporting study:** "Blood-based biomarkers of Alzheimer's disease and incident dementia in the community" (*Nature Medicine*, 2025, https://www.nature.com/articles/s41591-025-03605-x) — plasma p-tau181, p-tau217, NfL, and GFAP predicted **10-year AD dementia risk with AUC 71–83%** in a community-dwelling population.

---

## Finding 2: India Population Data Already Shows AUC 0.95 Without Imaging

**Study:** "Learning From Clinical Consensus Diagnosis in India to Facilitate Automatic Classification of Dementia: Machine Learning Study"  
**Authors:** Jin H, Chien S, Meijer E, Khobragade P, Lee J  
**Journal:** *JMIR Mental Health*, 2021  
**URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC8145077/  
**Dataset:** LASI-DAD (n=2,528 labeled; 4,096 total), ages 60+, nationally representative India sample  

**Key results:**
- SVM model using **sociodemographic data, health history, and cognitive screening** (no MRI, no blood tests) reached:
  - **AUC 0.95**, sensitivity 0.81, specificity 0.97, accuracy 0.96
  - Comparable to individual clinician performance

**2023 extension:** Semi-supervised approach (Jin et al., PMC, https://pmc.ncbi.nlm.nih.gov/articles/PMC10038923/) estimated national Indian dementia prevalence at 8.94% using AUC 0.87 on unlabeled LASI Wave 1 data (n=31,477).

**Significance for BhāratBrain:** This is the Indian-specific baseline the team should aim to improve upon by adding blood biomarkers and speech features.

---

## Finding 3: Literacy-Independent 5-Minute Cognitive App — AUC 0.93

**Study:** "PENSIEVE-AI: a brief cognitive test to detect cognitive impairment across diverse literacy"  
**Lead PI:** A/Prof. Liew, Singapore General Hospital / Duke-NUS  
**Journal:** *Nature Communications*, March 2025  
**DOI:** https://www.nature.com/articles/s41467-025-58201-x  
**Dataset:** 1,758 community-dwelling adults aged 65+, nationwide Singapore cohort  

**Key results:**
- A **drawing-based, self-administered app** (<5 minutes) detected clinically adjudicated MCI and dementia
- **AUC = 0.93**, functions across diverse literacy levels
- Developed by SGH + GovTech Singapore

**For India:** This is the closest published analogue to what BhāratBrain needs at the ASHA level. A literacy-independent 5-minute assessment that runs on a phone. The key gap is Indian-language support and Indian cohort validation — neither of which PENSIEVE-AI has.

---

## Finding 4: Non-Imaging Digital Biomarkers Achieve Average AUC 0.887

**Study:** "Alzheimer's disease digital biomarkers multidimensional landscape and AI model scoping review"  
**Authors:** Qi, Zhu, Wang et al.  
**Journal:** *npj Digital Medicine*, 2025  
**URL:** https://www.nature.com/articles/s41746-025-01640-z  
**Dataset:** 86-study scoping review, including ADNI-3 validation  

**Key results:**
- Across 86 studies using exclusively non-MRI digital biomarkers (motor, cognitive, eye tracking, speech):
  - Average AUC for AD vs. healthy controls: **0.887** (range 0.76–1.0)
  - Average AUC for MCI vs. healthy controls: **0.821** (range 0.62–0.97)
- SVMs dominated (49/86 studies)
- **No single study combined all modalities without imaging**

**Retinal imaging:** Eye-AD model (retinal OCTA) achieved AUC 0.94 for early-onset AD, 0.86 for MCI (*npj Digital Medicine*, 2024, https://www.nature.com/articles/s41746-024-01292-5). Retinal photography is relatively low-cost and could be a feasible MBBS-level input.

---

## Finding 5: Missing Modality in AD — Active in Imaging, ABSENT for Non-Imaging

**Key paper:** "Joint Robust Imputation and Classification for Early Dementia Detection Using Incomplete Multi-modality Data"  
**Authors:** Thung KH, Yap PT, Shen D  
**Journal:** PMC, 2021  
**URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC8386184/  
**Dataset:** ADNI (MRI + PET + clinical)  

**Key result:** Joint low-rank imputation + classification (JRIC) on MRI+PET+clinical data with arbitrary missing modalities outperformed separate imputation-then-classify approaches.

**Critical survey finding (arXiv 2409.07825, 2025):** A 180-paper survey on deep multimodal learning with missing modality explicitly identifies **zero published work** combining AD blood biomarkers + cognitive + speech with missing-modality robustness. All missing-modality AD research uses imaging modalities.

**MICCAI 2025:** "A Unified Missing Modality Imputation Model with Inter-Modality Contrastive and Consistent Learning" (Qi et al., https://papers.miccai.org/miccai-2025/0031-Paper1980.html) — applied to brain tumor MRI, not AD blood/cognitive.

---

## State-of-the-Art Summary Table

| Modality | Best AUC | Study | Year |
|----------|----------|-------|------|
| Plasma p-tau217 alone | 0.93–0.96 | Nature Medicine | 2025 |
| Drawing/cognitive app (PENSIEVE-AI) | 0.93 | Nature Communications | 2025 |
| Cognitive + clinical (India, LASI-DAD) | **0.95** | JMIR Mental Health | 2021 |
| Digital biomarkers (motor/speech/eye avg) | 0.887 (AD), 0.821 (MCI) | npj Digital Medicine | 2025 |
| Dried blood spot p-tau217 | ~0.93 | Nature Medicine | 2025 |
| Retinal OCTA (Eye-AD model) | 0.94 (EOAD), 0.86 (MCI) | npj Digital Medicine | 2024 |
| Blood biomarkers 10-year community risk | AUC 71–83% | Nature Medicine | 2025 |

---

## Research Gaps — The BhāratBrain Opportunity

### Gap 1 (PRIMARY — NOVEL): No missing-modality model combining blood + cognitive + speech for AD on an Indian cohort

Every missing-modality paper in Alzheimer's AI uses MRI/PET as its modalities. No published work builds a model that gracefully degrades when p-tau217 is unavailable (cost barrier) but retains diagnostic utility from speech and a 5-minute cognitive test. This is the defining clinical reality for India — and it has not been solved.

**BhāratBrain's contribution:** A model trained on SANSCOG/TLSA data with modality dropout training, designed so that ASHA workers can enter whatever they have and receive a calibrated risk score regardless of which inputs are present.

### Gap 2: No India-specific multimodal fusion model benchmarked against LASI-DAD

All India-specific ML work (Jin et al.) uses cognitive + clinical features only. The arrival of affordable dried blood spot p-tau217 tests creates a new viable modality for Indian primary care that has never been integrated into an Indian cohort model.

### Gap 3: No frugal-AI architecture for ASHA/ANM-level community health workers

The combination of: (a) offline-capable phone app, (b) <5-min cognitive test, (c) optional dried blood spot input, and (d) missing-modality robustness has never been built or validated as a unified deployable system for India's community health infrastructure.

---

## References

1. Hansson O et al. "Plasma phospho-tau217 for Alzheimer's disease diagnosis in primary and secondary care." *Nature Medicine*, 2025. https://www.nature.com/articles/s41591-025-03622-w

2. "Blood-based biomarkers of Alzheimer's disease and incident dementia in the community." *Nature Medicine*, 2025. https://www.nature.com/articles/s41591-025-03605-x

3. Liew SL et al. "PENSIEVE-AI: a brief cognitive test to detect cognitive impairment across diverse literacy." *Nature Communications*, 2025. https://www.nature.com/articles/s41467-025-58201-x

4. Qi Z et al. "Alzheimer's disease digital biomarkers multidimensional landscape and AI model scoping review." *npj Digital Medicine*, 2025. https://www.nature.com/articles/s41746-025-01640-z

5. Jin H et al. "Learning From Clinical Consensus Diagnosis in India to Facilitate Automatic Classification of Dementia." *JMIR Mental Health*, 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8145077/

6. Jin H et al. Semi-supervised dementia prevalence India, 2023. https://pmc.ncbi.nlm.nih.gov/articles/PMC10038923/

7. Thung KH et al. "Joint Robust Imputation and Classification for Early Dementia Detection." PMC, 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8386184/

8. "Missing modality deep learning survey." arXiv, 2025. https://arxiv.org/html/2409.07825v3

9. "Trustworthy AI in retinal imaging for dementia." *npj Digital Medicine*, 2024. https://www.nature.com/articles/s41746-024-01292-5

10. "Dried blood spot p-tau217 minimally invasive test." *Nature Medicine*, 2025. https://www.nature.com/articles/s41591-025-04080-0

11. "AI-first framework multimodal ADRD." PMC, 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12453944/

12. Qi et al. "Unified Missing Modality Imputation Model." MICCAI, 2025. https://papers.miccai.org/miccai-2025/0031-Paper1980.html
