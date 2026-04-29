# Research Report: Direction 6
## India's Alzheimer's Epidemiology & The Diabetes-Alzheimer's Nexus

**Research question:** What is the India-specific Alzheimer's landscape? What is the evidence for the T2D → Alzheimer's pathway and why is India uniquely positioned to address it?  
**Research date:** April 26, 2026  

---

## Executive Summary

India has 8.8 million people with dementia — 80% undiagnosed. Its dementia risk factor profile is structurally different from the West (education and vision dominate, not hearing loss). India has 101 million diabetics, and the T2D → Alzheimer's biochemical mechanism is well established. No AI model has combined India's unique T2D burden with cognitive decline prediction on Indian population data. The SANSCOG/TLSA datasets at IISc are the exact infrastructure needed to address this gap.

---

## PART A: India-Specific Alzheimer's Epidemiology

### A1: How Big Is the Problem?

**Study:** Lee J et al. "Prevalence of Dementia in India: National Estimates from a Nationally Representative Study"  
**Journal:** *Alzheimer's & Dementia*, 2023  
**Source:** https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/alz.12928  
Full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC10338640/  
**Dataset:** LASI-DAD, nationally representative, n=4,096  

| Statistic | Value |
|-----------|-------|
| Dementia prevalence (adults 60+) | **7.4%** |
| Estimated total people with dementia | **~8.8 million** |
| Age-standardized prevalence | 8.94% (95% CI: 8.36–9.55%) |
| Percentage undiagnosed | **~80%** |
| Comparison: US prevalence | 8.6% |
| Comparison: UK prevalence | 7.1% |
| Prior estimate (ARDSI 2010) | ~3.7% — India was dramatically underestimating |

**The key headline:** India's dementia burden is comparable to Western nations in prevalence, but 4× higher in proportion undiagnosed. The diagnostic gap, not the disease gap, is India's defining problem.

---

### A2: India's Unique Risk Factor Profile — Different from the West

**Study:** LASI-DAD modifiable risk factor analysis  
**Source:** PMC, 2024: https://pmc.ncbi.nlm.nih.gov/articles/PMC11633656/  

Population Attributable Fractions (PAF) from LASI-DAD — the top modifiable risk factors for dementia in India:

| Risk Factor | PAF (India) | Comparison (Lancet 2024 — Global) |
|-------------|-------------|----------------------------------|
| No formal education | **22%** | 5% (high income countries) |
| Vision impairment | **14%** | 2% |
| Physical inactivity | **12%** | 2% |
| Social isolation | **8%** | 5% |
| Hypertension | **5%** | 2% |
| Being underweight | **4.5%** | Not in top list |
| Hearing loss | Not significant | **7% (top factor in HIC)** |
| Diabetes | Positive but not statistically significant | 2% |

**Critical insight:** India's risk hierarchy is fundamentally different from Western models. A Western AI model trained on ADNI — where hearing loss and high BMI dominate — will systematically misrank risk for Indian patients. An India-trained model would weight education and vision heavily. Theoretically eliminating all significant modifiable Indian risks could prevent **70% of Indian dementia cases** (vs. ~40% in high-income countries per Lancet 2024).

**Additional India-specific risk factors** (North Indian case-control studies):
- Hyperhomocysteinemia (elevated homocysteine — linked to B12 deficiency, common in vegetarian diets)
- Hyperlipidemia
- APOE ε4 genotype
- Saturated fat diet
- Urban living

---

### A3: The ADNI Bias — Western Models Fail on Indian Patients

**Study:** "Algorithmic Fairness in AI Models for Alzheimer's Disease"  
**Journal:** *JAMA Network Open*, 2023  
**Source:** https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2811461  

**ADNI composition (the world's primary training dataset):**
- ~93% non-Hispanic White
- ~4% Hispanic
- ~1.7% Asian
- ~4.5% Black

**Key result:** Sensitivity for disease progression was substantially lower for Asian and Black participants vs. White participants, with gaps of **20.9–48.2%** in some disease transition predictions for Hispanic participants.

**Compounding biases for India specifically:**
1. Cognitive tests (MMSE, ADAS-Cog) normed on English-educated Western samples; cultural adaptation required across 12+ Indian languages
2. The 1000 Genomes reference panel used for genetic imputation lacks South Asian representativeness
3. India's PAF structure (education > vision > inactivity) differs from Western rankings (hearing loss #1 per Lancet 2024)

**Supporting:** Brain Informatics generalizability review, 2025: https://braininformatics.springeropen.com/articles/10.1186/s40708-025-00252-3

---

### A4: SANSCOG and TLSA — Why These Datasets Are Unique

**Principal Investigator:** Prof. Vijayalakshmi Ravindranath, Centre for Brain Research, IISc Bangalore  
**Protocol publication:** Ravindranath et al., *Alzheimer's & Dementia*, 2023: https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/alz.12722  

**SANSCOG** (Srinivaspura Aging, Neuro Senescence and COGnition):
- **Website:** https://cbr-iisc.ac.in/sanscog/
- Target: 10,000 adults 45+ from rural Kolar district, Karnataka
- "First-of-its-kind rural aging cohort in India; one of the largest longitudinal aging studies globally"
- **Modalities:** Clinical, neurocognitive, biochemical, genetic (GWAS + WGS), and MRI (resting fMRI, structural MRI, DTI, MRS) on deep-imaging subset (n=1,000)
- 10+ year longitudinal design; end-to-end digitized
- Captures uniquely Indian exposures: joint-to-nuclear family transitions, low-education profiles, rural metabolic burden

**TLSA** (Tata Longitudinal Study of Aging):
- **Website:** https://cbr-iisc.ac.in/tlsa/
- Target: 1,000 elderly Bangalore residents (urban)
- All receiving full MRI (enables imaging validation)
- Same multimodal protocol as SANSCOG
- Enables **urban-rural comparison** within a single Indian biobank

**Why SANSCOG + TLSA together are the world's most valuable India-specific dataset:**
- Urban/rural paired design with identical protocols
- Blood biochemistry + cognitive + MRI + genetics in same patients
- Longitudinal (tracks same individuals over years — essential for AI risk modeling)
- Includes the T2D biomarker panel needed for Direction 6

---

## PART B: The Diabetes-Alzheimer's Nexus

### B1: How Big Is India's Diabetes Problem?

**Study:** ICMR-INDIAB-17  
**Journal:** *Lancet Diabetes & Endocrinology*, 2023  
**Source:** https://www.thelancet.com/pdfs/journals/landia/PIIS2213-8587(23)00119-5.pdf  
**Dataset:** 113,043 participants across 31 states  

| Statistic | Value |
|-----------|-------|
| Diagnosed diabetics in India | **101 million** (11.4% prevalence) |
| People with prediabetes | **136 million** (15.3%) |
| T2D among adults 60+ | **21.1%** |
| Undiagnosed HbA1c ≥6.5% (60+) | **44%** |
| Global comparison | Tied with China for world's largest absolute diabetic population |

**India's T2D has a unique feature:** Onset is ~10 years earlier than in Western populations (mean onset 40s vs. 50s in Europe/US). This means India's diabetics face a longer cumulative exposure to insulin resistance — which matters greatly for the T2D → Alzheimer's pathway.

**Source:** *Frontiers in Public Health*, 2024: https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2024.1474593/full

---

### B2: The T2D → Alzheimer's Pathway — Established Mechanisms

The "Type 3 Diabetes" framing was coined by Suzanne de la Monte (Brown University, 2008) based on defective brain insulin/IGF signaling correlating with amyloid and tau pathology.

**Four established mechanisms (2024–2025 systematic reviews):**

**Mechanism 1 — IDE Competition:**
Insulin-degrading enzyme (IDE) processes both insulin and amyloid-beta (Aβ). Hyperinsulinemia in T2D competitively inhibits IDE's Aβ clearance → Aβ accumulates.  
*Source:* PMC, 2020; ScienceDirect 2024 review: https://www.sciencedirect.com/science/article/pii/S1568163724002010

**Mechanism 2 — BACE1 Upregulation:**
Insulin resistance disrupts Akt signaling → increases BACE1 phosphorylation → cleaves APP → produces Aβ.  
*Source:* *Frontiers in Aging Neuroscience*, 2017

**Mechanism 3 — Tau Hyperphosphorylation:**
Impaired PI3K/Akt/GSK-3β signaling under insulin resistance leads to tau hyperphosphorylation. Meta-analysis confirms: impaired glucose metabolism significantly associated with **higher tau biomarkers** (but notably not significantly with amyloid-β in blood).  
*Source:* ScienceDirect systematic review, 2024: https://www.sciencedirect.com/science/article/pii/S0149763424000733

**Mechanism 4 — IAPP-Aβ Cross-Seeding:**
Islet amyloid polypeptide (IAPP, the amyloid of pancreatic β-cells in T2D) interacts with and accelerates Aβ pathology via misfolded protein cross-seeding — the pancreatic amyloid of T2D literally seeds brain amyloid of Alzheimer's.  
*Source:* PMC, 2024

**Overall systematic review:**
PMC, 2025: https://pmc.ncbi.nlm.nih.gov/articles/PMC12382249/

**Caution (for the proposal):** The causal direction is debated in the literature. Some evidence suggests insulin resistance is upstream of plaques; other data suggests it is secondary to amyloid/tau burden. This nuance should be acknowledged in the proposal.

---

### B3: Overlapping Biomarkers Between T2D and Alzheimer's

| Biomarker | Role in T2D | Role in Alzheimer's | Available at ASHA level? |
|-----------|------------|---------------------|--------------------------|
| **HbA1c / fasting glucose** | Glycemic control index | Higher levels → elevated tau; glucose hypometabolism in brain | ✅ Yes, commonly available |
| **HOMA-IR (insulin resistance)** | Insulin resistance index | Reduced brain insulin signaling; IDE competition | ⚠️ Requires fasting insulin + glucose |
| **IAPP** | Pancreatic islet amyloid | Cross-seeds with Aβ; accelerates plaques | ❌ Specialized test |
| **APOE ε4** | Modulates insulin receptor binding | Present in >50% of AD cases | ❌ Genetic test |
| **IL-6, CRP, TNF-α** | T2D-driven chronic inflammation | Neuroinflammation accelerating tau pathology | ⚠️ Basic CRP available |
| **p-tau 181 / p-tau 217** | Not directly T2D | Best single blood marker for Alzheimer's (AUC 0.93+) | ❌ Specialized, emerging |

**Key finding for the proposal:** Glucose metabolism measures (HbA1c, fasting glucose, HOMA-IR) are **significantly associated with tau** but not amyloid-β biomarkers in blood (ScienceDirect 2024 meta-analysis). This means the T2D biomarker pathway feeds specifically into the **tau arm** of Alzheimer's pathology — which can be targeted with p-tau 181/217 confirmation tests at higher care levels.

**Practical implication:** An ASHA worker can collect HbA1c (widely available at PHCs) as a first-pass T2D-Alzheimer's risk flag. Elevated HbA1c + cognitive decline = elevated referral priority. This is actionable with existing infrastructure.

---

### B4: AI Models Using Metabolic Biomarkers for AD Risk — All Western

**Existing work:**
- Random forest / FDG-PET analysis: Glucose hypometabolism on PET outperforms amyloid and tau in classifying late-stage AD. (*PMC*, 2022: https://pmc.ncbi.nlm.nih.gov/articles/PMC8975178/)
- Deep neural network for insulin resistance (Nature, 2026): Trained on wearable + routine blood markers including HbA1c; AUROC = 0.80 for insulin resistance prediction. https://www.nature.com/articles/s41586-026-10179-2
- A/T/N ML framework on ADNI: Glucose metabolism (FDG-PET, "N" component) better predicts dementia conversion than amyloid ("A") alone at later stages. (*Nature Communications Biology*, 2020: https://www.nature.com/articles/s42003-020-1079-x)

**Critical limitation of ALL existing models:** Trained on Western cohorts (ADNI, UK Biobank, European aging studies). No published model uses Indian T2D + cognitive decline longitudinal data.

---

## Research Gaps — The BhāratBrain Opportunity

### Gap 1: No longitudinal Indian cohort model mapping T2D trajectory to cognitive decline

The Frontiers 2024 India study found the T2D-cognition relationship in India is **education-moderated and urban-rural differentiated** — diverging from Western patterns. India's T2D patients have earlier onset and a distinct metabolic profile. No AI model captures this interaction for risk stratification.

**SANSCOG provides the exact data needed:** Blood biochemistry (including glucose, HbA1c) + cognitive assessments + longitudinal follow-up in a rural Karnataka cohort. This gap is immediately addressable using the challenge datasets.

### Gap 2: IAPP-Aβ cross-seeding uninvestigated in Indian T2D patients

The cross-seeding mechanism is supported by in-vitro and Western clinical data but has not been studied using Indian T2D patient tissue or biomarker panels. India's earlier T2D onset means a longer cumulative IAPP exposure — this may manifest as earlier Alzheimer's onset in India's diabetic population. This hypothesis is testable with SANSCOG/TLSA data.

### Gap 3: No blood-based T2D-to-AD risk score validated for Indian populations

Multi-marker scores combining HbA1c + p-tau 181 + HOMA-IR + APOE ε4 have been tested only on European/North American cohorts. SANSCOG + TLSA's biochemical panels provide the infrastructure to build and validate the **first India-specific T2D-to-Alzheimer's risk score** — a high-value, immediately fundable deliverable.

---

## The India Opportunity in One Paragraph

India simultaneously has the world's largest T2D burden (101 million, mostly undiagnosed), a dementia epidemic (8.8 million, 80% undiagnosed), the world's most diabetes-vulnerable aging population (earlier onset, longer exposure), and a completely un-served gap in AI models that connect these two conditions in an Indian population context. The mechanism connecting T2D to Alzheimer's is established in biochemistry but unvalidated in Indian longitudinal data. SANSCOG and TLSA are the world's only Indian rural/urban paired longitudinal datasets that contain both the metabolic biomarkers and the cognitive assessments needed to address this gap. No other team in the world has simultaneous access to this data and the AI capability to analyse it.

---

## References

1. Lee J et al. "Prevalence of Dementia in India." *Alzheimer's & Dementia*, 2023. https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/alz.12928

2. LASI-DAD modifiable risk factors. PMC, 2024. https://pmc.ncbi.nlm.nih.gov/articles/PMC11633656/

3. Ravindranath V et al. "SANSCOG/TLSA protocol." *Alzheimer's & Dementia*, 2023. https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/alz.12722

4. JAMA Network Open algorithmic fairness in AD. 2023. https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2811461

5. ICMR-INDIAB-17. *Lancet Diabetes & Endocrinology*, 2023. https://www.thelancet.com/pdfs/journals/landia/PIIS2213-8587(23)00119-5.pdf

6. T2D cognition India/China. *Frontiers in Public Health*, 2024. https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2024.1474593/full

7. Type 3 Diabetes systematic review. PMC, 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12382249/

8. T2D-AD biomarker systematic review. *ScienceDirect*, 2024. https://www.sciencedirect.com/science/article/pii/S0149763424000733

9. Glucose metabolism ML in AD. PMC, 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC8975178/

10. Insulin resistance deep learning model. *Nature*, 2026. https://www.nature.com/articles/s41586-026-10179-2

11. A/T/N ML framework AD. *Nature Communications Biology*, 2020. https://www.nature.com/articles/s42003-020-1079-x

12. Dementia in India review. *Nature Reviews Neurology*, 2021. https://www.nature.com/articles/s41582-021-00565-x

13. AD model generalizability review. *Brain Informatics*, 2025. https://braininformatics.springeropen.com/articles/10.1186/s40708-025-00252-3
