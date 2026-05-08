# Research Foundation: Idea 3 — Low-Resource / Low-Cost Screening Pipeline

> **Scope:** Build an AI model using only low-cost inputs (cognitive test scores, blood pressure,
> blood glucose, sociodemographic variables, activity questionnaires). No MRI, no PET, no expensive
> biomarkers. Validate against SANSCOG ground truth. Target: rural India deployment via ASHA workers.

---

## 1. Global Foundational Research

### 1.1 Low-Cost Cognitive Screening Tools

**PHC-CS (Primary Health Care Cognitive Screen)**
The strongest candidate for the BharatBrain low-cost pipeline. Developed specifically for PHC
settings in rural Karnataka. Validation at cutoff <45 showed:
- Sensitivity: 95%, Specificity: 92%
- PPV: 96%, NPV: 92%
- AUC: 0.957 (95% CI: 0.922–0.992)

*Critique flag:* The Gemini source attributed this to "Gowda, M. et al. (2026)" — a suspicious
future date. The tool is associated with Shaji KS and colleagues working in Karnataka. The
performance numbers are consistent with known PHC-CS literature but the exact citation must be
verified before quoting in the proposal. The validation sample size is not reported in the brief;
this is a critical gap since small n inflates AUC estimates.

**CSI-D (Community Screening Instrument for Dementia)**
Used by the 10/66 Dementia Research Group and validated in Ballabgarh and Chennai. The combined
algorithm (cognitive + informant scores) achieved:
- Sensitivity: 94%, Specificity: 94%
- AUROC: 0.94–1.00

The informant component requires a knowledgeable informant to be present — a real-world constraint
for ASHA administration that is often not mentioned in validation papers. The Ballabgarh study
finding of very low AD prevalence (0.62% in ≥55) using CSI-D is notable: it may reflect genuine
population differences or high test specificity, not a methodology failure.

**RUDAS (Rowland Universal Dementia Assessment Scale)**
Designed to minimize literacy and cultural bias. Indian validation (Iype et al., 2006, Kerala) at
cutoff ≤23:
- Sensitivity: 88%, Specificity: 76%
- Study: n=116 (58 dementia, 58 controls), clinic-based
- Meta-analysis (LMIC data): pooled sensitivity 89% (95% CI: 82–94%), specificity 78% (95% CI: 71–84%)

*Critique flag:* The Kerala validation is small (n=116) and clinic-based. Community performance in
heterogeneously literate rural populations (not just illiterate vs. literate) is not established.
RUDAS is available in Kannada and other Dravidian languages but not all 22 official Indian languages.

**HMSE (Hindi Mental State Examination)**
Culturally adapted MMSE for Hindi-speaking populations. In LASI-DAD analysis (n=2,528):
- AUC: 0.77–0.86 across studies
- Recommended cutoff for illiterate rural populations: ≤17 (to reduce false positives)
- Coverage: Hindi belt states only; not applicable to Kannada/Tamil/Telugu regions

**MMSE — Why It Fails**
The standard MMSE should not be used in rural India screening. Studies document that 100% of
illiterate subjects score below the dementia cut-off, making it inapplicable for community
screening. This is not a marginal limitation — it is a disqualifying failure mode.

### 1.2 Non-Imaging, Non-Biomarker Predictive Features

Evidence from Indian cohorts for non-imaging risk factors (all with source caveats):

| Feature | Effect Size | Cohort / n | Notes |
|---|---|---|---|
| Hypertension | RR 1.36 (95% CI: 1.02–1.75) | LASI-DAD, n=4,096 | Mild effect; CI barely excludes 1.0 |
| Diabetes (MCI→dementia) | HR 2.9 (95% CI: 1.1–7.3) | Kolkata longitudinal (2007) | Wide CI; small study |
| Depression + frailty | OR ~3.0 for dementia | LASI-DAD (2026?) | Date suspicious; needs verification |
| Physical inactivity | 12% PAF | LASI/LASI-DAD pooled | PAF depends on prevalence assumption |
| Diet (traditional Indian) | ~50% risk reduction vs Western | Sub-cohort analysis | Very strong claim; no CI provided |

*Critical note on the diabetes paradox:* LASI cohort analysis found that rural Indians with
diagnosed diabetes sometimes scored higher on cognition (by ~0.24 SD) than those without. This
likely reflects survival bias or healthcare-access selection rather than a protective effect.
Models using diabetes as a simple binary risk factor must be built with this nuance in mind —
uncontrolled diabetes in low-awareness settings is different from diagnosed/managed diabetes.

### 1.3 Machine Learning Models for Low-Cost Dementia Screening

Best published performance for non-imaging ML models:
- Neural Network using 70 non-imaging features (MMSE + BP + glucose + BMI + demographics):
  AUC 0.94 (*Frontiers in Aging Neuroscience*, 2022)
- XGBoost on same feature set: AUC 0.93
- Models without cognitive scores (cardiometabolic + demographics only): AUC 0.70–0.78
- Sydney Memory and Ageing Study 10-year risk model (age + global cognition + glucose + CV risk):
  AUC 0.752

*Critique flag (logical rigor):* The AUC 0.93–0.94 figures are almost certainly from internal
test-set validation on a single dataset. No external validation on an independent Indian cohort is
cited. These figures should be treated as upper bounds, not expected performance in deployment.
Models trained on Western cohorts with different base rates and feature distributions will show
significant AUC degradation when applied to Indian rural populations. The 0.70–0.78 range for
cardiometabolic-only models is more realistic as a benchmark for what we can expect before adding
Indian-validated cognitive scores.

---

## 2. India-Specific Evidence

### 2.1 What Has Been Validated in India

**Tools with Indian validation data:**
- PHC-CS: rural Karnataka, excellent performance, but citation needs verification
- CSI-D: Ballabgarh (Haryana) and Chennai — multi-region validation exists
- RUDAS: Kerala (Malayalam); Kannada translation likely available given CBR/IISc location
- HMSE: Hindi belt states
- MMSE adapted versions: multiple states, but consistently problematic for low literacy

**The 10/66 program's legacy:**
The 10/66 Dementia Research Group's India sites (Ballabgarh, Chennai, Mumbai) produced the most
rigorous cross-cultural validation work for CSI-D. Their finding of lower-than-expected AD
prevalence (relative to Europe/US) in rural India is the most important external validity signal —
our model should not import Western prevalence priors.

### 2.2 SANSCOG Dataset

**Study:** Srinivaspura Aging, Neuro-senescence and COGnition (SANSCOG), Centre for Brain Research,
IISc Bangalore.

**Location:** Srinivaspura taluk, Kolar district, Karnataka — a defined rural block.

**Scale:** Approximately 10,000 participants enrolled in a longitudinal cohort design.

**Purpose:** Designed to identify genetic, lifestyle, and environmental risk factors for dementia
in the Indian rural population. This is the primary validation ground for Idea 3.

**Known/expected variable domains based on study design:**
- Cognitive assessments (likely HMSE, PHC-CS, and/or similar instruments in Kannada)
- Sociodemographic variables: age, sex, education (years and literacy level), occupation, income
- Vascular risk factors: blood pressure (systolic/diastolic), fasting blood glucose, BMI, waist circumference
- Lifestyle: physical activity (questionnaire), diet patterns, smoking, alcohol use
- Depression screen (likely GDS or similar)
- Activities of Daily Living (ADL, IADL)
- Sleep quality (questionnaire)
- Family history of dementia

*Limitation note:* The exact variable list for SANSCOG has not been published in a data paper as of
available evidence. The proposal should explicitly request confirmation of available features from
CBR collaborators before finalizing the feature set.

### 2.3 LASI-DAD (National Benchmark)

The Longitudinal Ageing Study in India — Diagnostic Assessment of Dementia (LASI-DAD) is the
national comparator dataset:
- Representative of 45+ age group across India
- Validated cognitive battery (HMSE, strand of CERAD, ADL, IADL, depression screens)
- n=4,096 (diagnostic subsample) with n=~70,000 in parent LASI study
- Publicly accessible to researchers

LASI-DAD provides the national-level ground truth and feature benchmarks against which SANSCOG
models can be stress-tested for generalizability.

---

## 3. Data Landscape

### 3.1 Feature Set for the Low-Cost Pipeline

Based on the evidence above, the realistic feature set available from SANSCOG for a low-cost
screening model:

**Tier 1 — Core (always available, directly measurable by ASHA):**
- Age (years)
- Sex
- Education level (years of schooling + literacy status as binary)
- Systolic blood pressure (measured)
- Diastolic blood pressure (measured)
- Fasting blood glucose or random glucose (if PHC point-of-care test available)
- BMI or weight + height
- RUDAS score or PHC-CS score (administered by ASHA with training)

**Tier 2 — Questionnaire (ASHA-administrable in 5–10 min):**
- PHQ-2 or GDS-4 (depression proxy — 2–4 question screens)
- Katz ADL score (6 questions)
- Physical activity (single GPPAQ-style question: days active per week)
- Sleep disturbance (1–2 questions)
- Diet quality proxy (frequency of vegetables, pulses, non-vegetarian)
- Smoking status (never/former/current)
- Alcohol use (never/current)
- Family history of memory problems (single question to patient or informant)

**Total estimated administration time:** 15–25 minutes for Tier 1 + 2 combined.

**Tier 3 — Available at PHC (not ASHA-collected but linkable):**
- HbA1c or fasting glucose from PHC blood draw
- Blood pressure trend (multi-visit average from PHC register)
- Medication use (antihypertensives, antidiabetics)

### 3.2 Ground Truth Labels

SANSCOG provides the validation ground truth:
- Likely: MCI vs. normal cognition vs. dementia classification by neurologist review
- The model's performance metric: **AUC against SANSCOG neurologist-consensus labels**
- Secondary metric: sensitivity at fixed specificity (e.g., sensitivity at 90% specificity to
  minimize over-referral burden on PHC system)

---

## 4. Research Gaps

### 4.1 Critical Gaps for This Proposal

**Gap 1: ASHA-administration inter-rater reliability**
No published study reports Cohen's kappa or ICC for RUDAS, PHC-CS, or CSI-D when administered
specifically by ASHA workers (as opposed to trained nurses or research staff). This is the single
most important missing evidence for the deployment case. Without it, the screening protocol's
reliability is unverifiable.

**Gap 2: Floor effects in heterogeneously literate populations**
Existing validation studies typically classify populations as "literate" vs. "illiterate." Rural
India contains a wide spectrum — 0 years schooling, 2 years, 5 years, informal literacy. The
performance of even "literacy-fair" tools (RUDAS, PHC-CS) at the 1–5 year schooling range in
community (not clinic) settings is not established.

**Gap 3: ASHA training burden quantification**
Gemini brief notes ASHA feasibility but provides no training duration. Existing studies show
ASHAs can administer screening tools, but the required training ranges from 1-day briefings to
2-week programs. The briefer the training, the lower the inter-rater reliability. This trade-off
is uncharacterized in published literature.

**Gap 4: Time-per-patient in real-world PHC settings**
Tool validation studies do not report administration time under real-world conditions (patient
distractions, language barriers within region, interpreter needed). PHC visit windows in India
are typically 3–7 minutes; the 15–25 minute Tier 1+2 protocol is not compatible with routine PHC
visits and requires a dedicated screening slot or home-visit model (more compatible with ASHA's
home-visit mandate).

**Gap 5: Multilingual tool availability**
PHC-CS was validated in Karnataka (Kannada-speaking). CSI-D exists in multiple Indian languages
through 10/66 but formal validation in each language is uneven. The proposal must specify the
language of administration and ensure the chosen tool has validation data in that language.

**Gap 6: External validation of ML models on Indian data**
All high-performing ML models (AUC 0.93–0.94) were developed and tested on Western cohorts or
single-center Indian clinic datasets. No published study has trained and externally validated a
non-imaging dementia ML model on SANSCOG or LASI-DAD data. This is the core scientific
contribution of Idea 3.

**Gap 7: Longitudinal prediction vs. cross-sectional classification**
Most tool validations are cross-sectional (screen for current dementia). For useful deployment,
the model should predict 3–5 year risk of conversion from normal/MCI to dementia — this requires
longitudinal follow-up data that SANSCOG is collecting but may not yet have sufficient follow-up
time.

---

## 5. Solution Pathway

### 5.1 Feature Set
Use the Tier 1 + Tier 2 feature set defined in Section 3.1 (17–22 features). Drop features
unavailable for >20% of SANSCOG participants. Conduct SHAP analysis to identify the top 10
features for a minimal deployable version.

### 5.2 Model Development Sequence

**Step 1 — Logistic Regression (baseline)**
- Why: interpretable, coefficient = clinical insight, survives small n, enables clinical
  validation against existing risk scores (CAIDE, LIBRA)
- Expected AUC on Indian rural data: 0.72–0.80

**Step 2 — Gradient Boosting (XGBoost / LightGBM)**
- Why: handles missing data natively, non-linear interactions between BP×glucose×age, feature
  importance via SHAP
- Expected AUC improvement: 0.78–0.86 with SANSCOG features
- Requires minimum n=500 labeled cases to avoid severe overfitting; SANSCOG at 10,000 should be
  adequate if MCI/dementia prevalence is ≥5%

**Step 3 — Ensemble (calibrated probability)**
- Platt-scale or isotonic regression calibration on top of XGBoost
- Output: calibrated risk probability (0–100%) rather than binary screen positive/negative
- Threshold setting: fix specificity at 90%, report achieved sensitivity — this gives a falsifiable
  prediction the proposal can commit to

### 5.3 ASHA-Administrable Protocol Design

**Instrument selection:** PHC-CS (Karnataka) or RUDAS-Kannada as primary cognitive component.
Administer in Kannada by ASHA using a laminated pictorial script (no reading required from patient).

**Training requirement (proposed):** 2-day structured training + 5 supervised administrations
before going solo. All ASHA administrations audio-recorded for 10% quality audit.

**Screening visit design:**
- Setting: ASHA home visit during existing elderly tracking visits (biannual)
- Duration target: ≤20 minutes total
- Data capture: paper + voice (audio backup), synced to mobile app at end of day
- Referral trigger: model score ≥ threshold → automatic SMS referral request to PHC

**Data flow:** ASHA collects → mobile app (offline-first) → batch sync to PHC server → model
inference → flag for PHC physician review → neurologist teleconsultation for positives

### 5.4 Validation on SANSCOG

**Train/validation/test split:** Temporal or geographic (not random) to prevent leakage
- Train on 60% of SANSCOG baseline wave
- Validate hyperparameters on 20%
- Test on held-out 20% (ideally a different PHC cluster)

**Primary metric:** AUC against neurologist-consensus dementia/MCI labels
**Secondary metric:** Sensitivity at 90% specificity (for operational planning)
**Fairness check:** Stratified AUC by sex, education level (0 years vs. ≥5 years), and age decade
**Calibration metric:** Brier score and reliability plot

### 5.5 Deployment Constraints

- Model must run on a basic Android smartphone (≥2016 hardware) — inference in <2 seconds
- No internet required at point of care (offline inference)
- Score output in Kannada on screen + audio readout (for ASHA literacy accommodation)
- Periodic model retraining as SANSCOG longitudinal waves add data

---

## 6. Sources

*Note: All sources are from the Gemini CLI research pass. Sources marked [citation-verify] were
attributed with suspicious dates or vague descriptions in the Gemini output and require independent
verification before use in the submission proposal.*

1. PHC-CS validation Karnataka — attributed to "Gowda, M. et al. (2026)" [citation-verify];
   likely associated with Shaji KS and Karnataka PHC-CS development group
2. 10/66 Dementia Research Group; Ganguli M, Chandra V et al., Indo-US Ballabgarh Dementia
   Epidemiology Project; Chennai site publications
3. Iype T. et al. (2006). "The Rowland Universal Dementia Assessment Scale (RUDAS) — a
   multicultural cognitive assessment scale" [citation-verify: journal, volume, co-authors not
   confirmed from search]; Nielsen TR et al. (2020) RUDAS meta-analysis in LMICs [citation-verify]
4. Indo-U.S. Cross-National Dementia Epidemiology Study publications; LASI-DAD 2025 analysis
5. *Frontiers in Aging Neuroscience* (2022) — 70-feature non-imaging ML model [citation-verify:
   author and title needed]; Sydney Memory and Ageing Study publications
6. LASI-DAD (Longitudinal Ageing Study in India — Diagnostic Assessment of Dementia)
   publications, n=4,096 subsample
7. Kolkata longitudinal study (2007) on MCI progression; LASI cohort analysis on diabetes paradox
8. LASI-DAD cohort analysis attributed to "General Psychiatry (2026)" [citation-verify];
   depression-frailty-dementia association
9. LASI and LASI-DAD pooled analysis on population attributable fractions for dementia risk
10. Centre for Brain Research (CBR), IISc Bangalore publications on the SANSCOG study;
    IISc CBR website: https://cbrlab.org
11. Various studies comparing MMSE to culturally adapted tools in India [citation-verify:
    specific author-level citations not confirmed from search; Gemini described as "various studies"]
12. ASHA worker capacity studies; National Health Mission policy documents on task-shifting

---

## 7. Research Confidence Assessment

| Claim | Confidence | Action Required |
|---|---|---|
| PHC-CS AUC 0.957, rural Karnataka | Medium | Verify citation, get n |
| CSI-D 94%/94% in India | Medium-High | Multiple replications via 10/66 |
| RUDAS 88%/76%, n=116 | High (for claim, small n flagged) | Use with CI caveat |
| ML AUC 0.93–0.94 non-imaging | Low (Western cohort) | Treat as upper bound |
| Hypertension RR 1.36 India | High | LASI-DAD large n confirmed |
| Diabetes HR 2.9 MCI→dementia | Low (wide CI, small study) | Treat as signal, not fact |
| SANSCOG n=10,000 longitudinal | High | Well-documented IISc CBR |
| ASHA inter-rater reliability data | None found | Gap — needs primary research |
| Time-per-patient in field | None found | Gap — needs primary research |

---

*Pipeline: Gemini CLI (gemini-2.5-pro) research | Claude critic (independent review) |
Codex critique (401 Unauthorized — Claude fallback used) | Claude synthesis*

*Date: 2026-05-08*
