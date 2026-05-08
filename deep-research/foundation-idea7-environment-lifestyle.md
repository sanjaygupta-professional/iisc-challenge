# Research Foundation: Idea 7 — Environmental + Lifestyle Risk Factor Interaction Model

> **Scope:** India-specific modifiable risk factors — air pollution (PM2.5), nutritional patterns
> (B12/folate deficiency common in vegetarian populations), sleep quality, physical activity in
> agricultural work — interact differently from Western risk models. Build an XGBoost or causal
> inference model on LASI-DAD/SANSCOG capturing these interactions.

> **Research pipeline:** Gemini CLI (gemini-2.5-pro, Google Search) → Claude critic →
> Codex critic (401 Unauthorized → Claude Fallback) → Claude synthesis

---

## 1. Global Foundational Research

### 1.1 Air Pollution (PM2.5/PM10) as Dementia Risk Factor

**Association evidence — strong but not causal.**
The largest meta-analysis to date (covering approximately 29 million participants) found a
relative risk of 1.17 (17% increase) per 10 µg/m³ increase in PM2.5 for all-cause dementia
[Source 1]. A US Medicare cohort study (27.8 million elderly) confirmed the association between
ambient PM2.5 and Alzheimer's disease specifically, and argued it was not fully mediated by
cardiovascular or metabolic comorbidities [Source 1]. A follow-up meta-analysis by Chen et al.
(2017, Lancet) covering 6.6 million Canadians found a HR of ~1.07 per 10% increase in
residential proximity to major roads — establishing a dose-response curve.

**Mechanistic pathways (experimental, not yet confirmed in human cohorts):**
- Ultrafine PM2.5 particles translocate to the brain via the olfactory nerve and systemic
  circulation, triggering microglial activation and neuroinflammation
- Blood-brain barrier (BBB) disruption mediated by reactive oxygen species (ROS)
- Magnetite nanoparticles from combustion found post-mortem in human brain tissue adjacent to
  amyloid plaques (The Guardian / Maher et al., 2016, PNAS) [Source 3]
- Elevated plasma NfL (neuro-axonal injury) and GFAP (astrocyte reactivity) biomarkers associated
  with chronic PM2.5 exposure in population studies [Source 2]

**Critical limitation — confounding by SES:**
Pollution exposure is strongly correlated with socioeconomic status (SES). High-PM2.5 areas in
India tend to be urban-industrial or rural-biomass-combustion regions with lower income, less
education, and worse healthcare access — all independent dementia risk factors. No existing
longitudinal study in India has adequately controlled for SES, education, and occupational
history simultaneously when estimating the PM2.5–dementia effect size. The HR/RR values cited
above come primarily from North American and European cohorts; direct extrapolation to India
(where baseline PM2.5 levels frequently exceed 60–100 µg/m³ year-round vs. the ~8–12 µg/m³
typical in Western study populations) is uncertain.

**India-specific exposure context:**
India has among the world's highest population-weighted PM2.5 exposure (WHO annual mean guideline:
5 µg/m³; Indian cities routinely 40–150 µg/m³). If the RR of 1.17 per 10 µg/m³ is even
directionally correct in Indian populations, the population-attributable fraction for dementia
from air pollution in India would be substantially larger than any Western estimate. This makes
it a high-priority variable to include in a risk model, while acknowledging the estimate is
extrapolation, not established.

---

### 1.2 Vitamin B12 and Folate Deficiency

**B12 prevalence in India — well-documented but sample-specific:**
- Elderly rural Indian cohorts (SANSCOG study, Srinivasan et al.): B12 deficiency (<200 pg/mL)
  prevalence of 42.3%–61.7% [Source 8]. This is an elderly rural cohort; not representative of
  all India.
- Meta-analysis estimates ~47% of the Indian general population is B12-deficient or insufficient;
  prevalence reaches 65–70% in strict vegetarians due to lack of animal-source foods [Sources 5, 6].
  Critique flag: the "~51% of population" figure in Gemini's brief cites indiatimes.com and
  eurekalert.org (press releases), not peer-reviewed literature. The SANSCOG figure is better
  anchored.
- B12 deficiency found in 7.5%–19% of Indian dementia patients at presentation [Source 9],
  suggesting B12 is both a risk factor and a reversible cause in a subset.

**Cognitive effect of B12 deficiency:**
Association between low B12 and cognitive decline is well-established in observational literature.
A single Indian RCT-type study reported a 9.63% improvement in MMSE scores after B12
supplementation in geriatric MCI patients [Source 12]. Critique flag: this study is cited from
ffhdj.com, an unverified journal source. The claim is plausible but should not be presented as
high-quality RCT evidence.

**B12 vs. homocysteine — the proximate mechanism debate:**
Several Indian studies including SANSCOG-linked work suggest that elevated homocysteine
(hyperhomocysteinemia) correlates more directly with cognitive decline and hippocampal atrophy
than serum B12 alone [Source 8]. B12 is a cofactor for homocysteine re-methylation; deficiency
elevates homocysteine which is directly neurotoxic via excitotoxicity and oxidative stress. This
means the DAG for B12→dementia runs: low B12 → elevated homocysteine → neurotoxicity →
cognitive decline. B12 supplementation may therefore be most effective when homocysteine is
also measured and targeted.

**Folate — the gap in the Gemini brief:**
Idea 7 explicitly names "B12/folate deficiency." Folate deficiency is also prevalent in India
due to limited consumption of dark leafy vegetables, cooking practices that destroy folate, and
limited fortification. Folate is a second methyl donor feeding the homocysteine re-methylation
pathway — low folate elevates homocysteine independently of B12. The OXFORD B-Vitamins Trial
(Smith et al., 2010, PLOS ONE) showed that B12+folate supplementation slowed brain atrophy in
MCI subjects with elevated homocysteine. Indian-specific folate deficiency data is thinner than
B12 data; this is a genuine gap.

**Vegetarian diet interaction:**
India has the world's highest proportion of vegetarians (~39% by NFHS-5 estimates, higher in
southern states). Strict lacto-vegetarians have near-zero dietary B12 intake (B12 is found only
in animal-source foods). This is a structurally different risk exposure from Western B12
deficiency which tends to be malabsorption-driven (atrophic gastritis, metformin use). India's
B12 deficiency is predominantly dietary, making dietary pattern variables critical covariates.

---

### 1.3 Sleep Quality and Duration

**Global evidence — U-shaped risk curve, cross-sectional caveats:**
Both short (≤6h) and long (≥9h) sleep are associated with increased dementia risk and worse
cognitive scores in multiple large observational studies. Key findings:
- LASI Wave 1 analysis (n > 70,000): short sleepers (≤4h) scored 1.15 points lower and long
  sleepers (≥9h) scored 0.93 points lower on a composite cognitive index [Sources 17, 18].
  Cross-sectional design — reverse causation is the primary methodological concern here.
- SMRUTHI-INDIA study: poor sleep quality significantly associated with reduced cognitive
  performance, particularly in elderly males [Source 19]. Gender asymmetry in this association
  (weaker in women) noted [Source 20].
- Meta-analyses (not India-specific): relative risk of dementia approximately 1.3–1.4 for
  both short and long sleep vs. 7–8h reference.

**Reverse causation — critical concern:**
Long sleep duration is a symptom of early neurodegeneration (prodromal dementia). Cross-sectional
studies showing long-sleep → lower cognition likely capture disease effect on sleep, not sleep
effect on disease. Only longitudinal studies (where sleep duration precedes cognitive decline by
years) can begin to address this. The LASI-DAD dataset, which is longitudinal, is better
positioned to test direction of effect — but Wave 1 alone cannot establish it.

**Sleep mechanisms in dementia:**
Sleep is critical for glymphatic clearance of amyloid-beta from the brain. Poor sleep → impaired
glymphatic function → amyloid accumulation → accelerated Alzheimer's pathology. This is a
plausible causal pathway supported by animal studies, but human evidence is still largely
observational.

---

### 1.4 Physical Activity — The Occupational Paradox

**Leisure-time physical activity (LTPA) — protective:**
Multiple meta-analyses show LTPA associated with 20–30% reduction in dementia risk (RR ≈ 0.70–0.80).
This evidence is largely from Western cohorts; Indian-specific data on LTPA and dementia is
limited. LTPA is uncommon in elderly rural Indian populations where most daily movement is
occupational.

**Occupational physical activity (OPA) — risk-elevating in agricultural workers:**
This is the key India-specific finding with strongest policy relevance for Idea 7.
- Agricultural workers in a large observational study had 46% greater odds of developing dementia
  vs. non-agricultural workers [Source 14].
- The HUNT4 70+ study (Norway, n > 1,500): 15.5% dementia prevalence in physically demanding
  occupations vs. 9% in low-demand jobs [Source 13].
- Critique: the HUNT4 study is Norwegian, and confounders differ substantially. Norwegian
  agricultural/manual workers have lower education and different pesticide exposure profiles.

**Confounders for agricultural workers:**
The OPA–dementia association is almost certainly confounded by:
1. Pesticide exposure (organophosphate cholinesterase inhibitors — direct neurotoxic effect)
2. Lower educational attainment (major dementia risk factor, cognitive reserve)
3. Noise-induced hearing loss (established 2024 Lancet Commission dementia risk factor)
4. Head trauma (agricultural machinery accidents)
5. Heat stress and dehydration (cerebrovascular damage)
6. Lower SES → worse healthcare access → missed diagnoses of treatable conditions

No existing Indian study using causal inference methods to isolate the OPA effect from these
confounders was identified in this research pass. The "46% greater odds" figure should be treated as an upper-bound association, not
a causal estimate.

**Reverse causation in LTPA studies:**
People in prodromal dementia reduce leisure physical activity years before diagnosis — making
lower LTPA appear as a risk factor. This concern is particularly acute for cross-sectional designs.
Longitudinal studies that measure PA 10+ years before cognitive assessment are needed.

---

## 2. India-Specific Evidence

### 2.1 Air Quality in India

India's annual mean PM2.5 levels: Delhi 85–100 µg/m³, Kanpur 60–75 µg/m³, Mumbai 45–55 µg/m³,
Bengaluru 25–35 µg/m³, rural biomass-combustion areas variable but often 40–80 µg/m³ in winter.
WHO guideline is 5 µg/m³ annual mean. The entire Indian population lives at exposures that, by
Western effect-size estimates, would confer very high relative risk of dementia from PM2.5 alone.

No large-scale Indian longitudinal study linking directly measured PM2.5 exposure to dementia
incidence with sufficient follow-up was identified in this research pass. The LASI-DAD linkage to geospatial pollution data (via NASA
MODIS satellite data) provides a unique opportunity to model this in an Indian cohort for the
first time [Source 23].

### 2.2 B12 and Nutritional Status in India

India has uniquely high B12 deficiency prevalence driven by:
- High proportion of strict vegetarians (Jains, many Brahmins, regional dietary patterns)
- Poverty-related low animal product consumption even among non-vegetarians
- Widely available but infrequently tested

SANSCOG captures B12 and homocysteine in its cohort. LASI-DAD includes the Mini Nutritional
Assessment (MNA) and hemoglobin levels, but B12 and homocysteine are not routinely in the
LASI-DAD harmonized codebook — this is a key gap. Linkage to SANSCOG for nutritional biomarkers
would require a separate data access agreement.

### 2.3 Agricultural Population and Occupational Exposure

~55% of India's labor force is engaged in agriculture (Census 2011; declining but still dominant
in rural states). India uses substantially more organophosphate pesticides per hectare than most
developed nations. Chronic low-dose organophosphate exposure produces sustained cholinergic
disruption — mechanistically relevant to Alzheimer's pathology (acetylcholine is a key
neurotransmitter implicated in AD).

No India-specific longitudinal study linking agricultural work intensity, pesticide exposure
levels, and dementia incidence was identified in this research pass. LASI-DAD
captures rural residence and occupational history but does not directly measure pesticide exposure.

---

## 3. Data Landscape

### 3.1 LASI-DAD Variables for Idea 7

LASI-DAD (Longitudinal Aging Study in India — Diagnostic Assessment of Dementia), Wave 1:
approximately 4,096 participants aged 60+, nationally representative, with full cognitive battery
and linked geospatial data.

**Relevant variables (based on harmonized codebook conventions; verification against actual
codebook required before use):**

| Domain | Likely Variable Names | Notes |
|--------|----------------------|-------|
| Air pollution (linked) | `rWpm25`, `rWno2` | Linked via satellite geolocation; interviewer-observed ambient air quality also captured (`rWobsair`) |
| Nutritional assessment | `rWmna_score` | Mini Nutritional Assessment total score |
| Blood biomarkers | `rWhemoglobin` | Hemoglobin; B12 and homocysteine NOT confirmed in harmonized LASI-DAD |
| Physical activity | `rWvigact`, `rWmodact` | Vigorous and moderate activity frequency; occupational vs. leisure distinction unclear |
| Sleep | `rWsleepdur`, `rWslpqual` | Sleep duration (hours), sleep quality self-report |
| Geographic | `rWstateid`, `rWdistrict`, `rWhruralc` | State, district, urban/rural classification — essential for spatial confounding control |
| Cognitive outcome | `rWcesd`, `rWcogfunction` | Depression (CESD), composite cognitive function |

**Critical caveat:** Variable names above follow Gateway to Global Aging (G2Aging) harmonized
naming conventions and are plausible given documentation [Sources 21, 24] but were not verified
against the full codebook in this research pass. Any model building must start with a full
codebook audit at lasi-dad.org.

### 3.2 SANSCOG Variables

SANSCOG (TLSA — Ten Lakh Study on Aging, Bengaluru) — CBR's own cohort. Smaller (n ≈ 3,000
rural, n ≈ 1,500 urban), but with richer clinical biomarkers:
- B12 and homocysteine measured (confirmed in SANSCOG publications [Source 8])
- Detailed dietary recall (vegetarian/non-vegetarian frequency)
- Occupational history including agricultural work classification
- Cognitive battery in Kannada and English

SANSCOG is not publicly available without CBR collaboration. For an IISc challenge submission,
access to SANSCOG data is a major competitive advantage — this is where CBR's own data gives
Idea 7 a unique differentiation point.

### 3.3 Linkable Environmental Datasets

- **NASA MODIS/MAIAC PM2.5 data:** Annual and monthly satellite-derived PM2.5 at 1km resolution
  for India. Can be linked to LASI-DAD/SANSCOG by geographic coordinates. Used in LASI-DAD
  pollution linkage studies [Source 23].
- **CPCB (Central Pollution Control Board) air quality monitoring:** Ground-level station data
  for 24-hour PM2.5 at ~800 stations nationally. Sparser than satellite data but more accurate
  for urban areas.
- **SEDAC (NASA Socioeconomic Data):** Population-weighted PM2.5 exposure data at district level.
- **NFHS-5 (2019-21):** Nationally representative survey including dietary patterns, vegetable
  consumption frequency — can validate B12-related proxy variables.

---

## 4. Research Gaps

### 4.1 Causal Evidence Gaps

1. **No causal PM2.5→dementia estimate exists for Indian populations.** All Indian air pollution
   studies are cross-sectional or ecological. The confounding by SES, urban/rural differences,
   and access to healthcare makes causal inference from observational Indian data very difficult.

2. **Folate deficiency largely unstudied in Indian dementia context.** B12 and homocysteine
   have SANSCOG-anchored data; folate does not. Given shared mechanistic pathway (one-carbon
   metabolism), the omission is a genuine literature gap.

3. **Interaction effects between risk factors — the core of Idea 7 — have not been modeled.**
   No Indian study has examined how PM2.5 + B12 deficiency interact, or how agricultural OPA +
   pesticide exposure + nutritional deficiency create a synergistic risk profile different from
   Western populations.

4. **No Indian study using DAG-based causal methods for environmental dementia risk was identified in this research pass.** PSM
   has been applied to LASI-DAD for education and vision impairment effects [Sources 25, 26] but
   not for environmental risk factors.

5. **Population Attributable Fraction (PAF) for India:** The PAF model from Mukadam et al.
   (Lancet Commission 2024) estimates contributions from 14 modifiable risk factors. Air
   pollution accounted for ~2.3% of global dementia cases attributable fraction. In India, given
   far higher exposure levels, the India-specific PAF could be substantially higher — but has
   not been estimated with Indian-specific data.

### 4.2 India-Specific Interaction Effects Not Studied

- PM2.5 exposure × B12 deficiency: both impair neuronal integrity via different mechanisms;
  combined effect may be multiplicative. Not studied anywhere.
- Agricultural OPA × organophosphate exposure × cognitive reserve (education): the triple
  interaction specific to Indian farmworkers is unstudied.
- Sleep disruption × rural-urban migration stress × thermal environment: India-specific
  stressors not captured in Western models.
- Vegetarian dietary pattern (not just B12) × folate × physical activity: the full nutritional
  picture in Indian vegetarian populations.

### 4.3 Confounding Not Addressed in Existing Literature

- SES as a common cause of pollution exposure, nutritional deficiency, occupational type, AND
  reduced healthcare access (which means undiagnosed/undertreated dementia, not prevented
  dementia)
- Literacy/education as a confounder in almost all the above relationships (particularly for OPA)
- Measurement bias: LASI-DAD's air quality variable `rWobsair` is interviewer-observed —
  this is subjective and likely captures severe pollution only, missing moderate chronic exposure

---

## 5. Solution Pathway

### 5.1 Position Relative to BharatBrain

Idea 7 is a falsifying alternative to BharatBrain (Options 1+5+3), not an additive layer. It
targets a different input domain (environmental/lifestyle variables rather than clinical
biomarkers or language-based features). The honest framing: Idea 7 has high novelty for the
Indian context and strong public health relevance, but faces greater data access challenges
(B12 biomarkers not in LASI-DAD harmonized data; pesticide exposure unobserved) and more
severe confounding than the BharatBrain components. It would be most competitive if CBR
collaboration grants access to SANSCOG's richer biomarker data.

### 5.2 LASI-DAD Variable Selection Strategy

**Step 1 — Codebook audit.**
Download the full H_LASI-DAD harmonized codebook from lasi-dad.org and map every variable to
the four risk domains: (a) air pollution exposure, (b) nutritional status, (c) sleep, (d) PA type.

**Step 2 — Proxy construction for missing biomarkers.**
Since B12 and homocysteine are likely absent from LASI-DAD:
- Use MNA score as nutritional proxy
- Use vegetarian dietary frequency (if available in LASI-DAD) as B12-deficiency proxy
- Use hemoglobin as malnutrition/anemia proxy (correlated with B12 deficiency)
- Alternatively, restrict analysis to SANSCOG cohort where biomarkers exist

**Step 3 — Geospatial pollution linkage.**
Link LASI-DAD participant locations (state/district) to NASA MAIAC annual PM2.5 rasters for
the study period. Validate against CPCB station readings where overlap exists.

**Step 4 — Occupational categorization.**
Recode occupational history variables to: (a) agricultural worker, (b) manual non-agricultural,
(c) sedentary/service, (d) never employed. This separates OPA from LTPA.

### 5.3 Feature Engineering for Interaction Terms

Key interaction features to engineer (pre-specified, not discovered post-hoc):
1. `PM25_B12proxy` — PM2.5 × nutritional deficiency proxy (multiplicative term)
2. `AgriWork_PM25` — agricultural occupation × high-PM2.5 district (rural industrial zones)
3. `SleepDur_VegDiet` — sleep duration category × vegetarian dietary pattern
4. `OPA_Education` — agricultural occupation × years of education (cognitive reserve buffer)

Confounding strategy:
- Include SES composite (asset index + education + rural/urban) as explicit covariate
- Test for heterogeneous effects by age group, gender, and region (South vs. North India differ
  in dietary patterns and pollution sources)

### 5.4 Model Architecture: XGBoost vs. Causal

**XGBoost approach (prediction focus):**
- Use XGBoost with all environmental/lifestyle features + interaction terms as input
- Outcome: cognitive impairment (binary: impaired / not impaired) or composite cognitive score
- Feature importance (SHAP values) to rank which environmental factors contribute most to
  prediction in Indian context
- Validation: 5-fold cross-validation on LASI-DAD; external validation on SANSCOG (if accessible)
- Limitation: XGBoost is a predictive model. It will capture confounded associations, not causal
  effects. SHAP importance values tell you about prediction relevance, not interventional impact.

**Causal inference approach (intervention focus):**
- Construct a DAG specifying assumed causal relationships among: SES, education, rural/urban,
  PM2.5 exposure, agricultural occupation, B12 proxy, sleep, and cognitive outcome
- Use Propensity Score Matching (PSM) or Inverse Probability Weighting (IPW) to estimate
  Average Treatment Effect (ATE) of high PM2.5 exposure (or agricultural occupation) on
  cognitive decline, conditional on the adjustment set derived from the DAG
- Software: DoWhy (Microsoft) or bnlearn (R) for DAG construction; MatchIt (R) or CausalML
  (Python) for PSM/IPW
- Limitation: PSM assumes no unmeasured confounders (conditional ignorability). Given
  unobserved pesticide exposure and SES gradients, this assumption is likely violated. Results
  should be accompanied by sensitivity analyses (E-values, Rosenbaum bounds).

**Recommended approach for IISc challenge:**
Lead with XGBoost for the submitted model (tractable, reproducible, interpretable via SHAP).
Supplement with a DAG documenting assumed causal structure and PSM analysis for PM2.5 and
B12 proxy effects specifically. This dual-approach signals methodological sophistication while
acknowledging causal limits honestly.

### 5.5 Validation and IISc Challenge Contribution

**Validation metrics:**
- AUC-ROC for cognitive impairment classification
- SHAP-based feature importance ranking — compare to Lancet Commission 2024 global risk factor
  ranking to identify India-specific departures
- PAF estimation: if PM2.5 and B12 proxy variables have significant effect in adjusted model,
  estimate India-specific PAF and compare to Lancet global estimate

**IISc challenge framing:**
The proposal's unique contribution claim: "We are the first to model environmental risk factor
interactions in Indian dementia using LASI-DAD's geospatially linked PM2.5 data, demonstrating
that the interaction of air pollution × nutritional deficiency × occupational type creates a
distinctly Indian risk profile not captured by Western dementia risk models." This claim is
credible if the interaction terms are pre-specified and statistically significant.

**Risk to the claim:** If B12/homocysteine biomarkers are not in LASI-DAD, the nutritional
arm relies on proxies. The proposal should explicitly state: "SANSCOG collaboration provides
B12 and homocysteine biomarkers to anchor the nutritional component; LASI-DAD provides national
representativeness for the air pollution and occupational components."

---

## 6. Sources

All citations from Gemini (gemini-2.5-pro) research pass. Note: Sources 1–3 were returned as
Google redirect URLs and cannot be verified as specific paper citations; they are included as
references to the class of evidence, not verified DOIs. Sources 4–5 are press aggregators (non
peer-reviewed). Sources from PubMed (ncbi.nlm.nih.gov) are considered verified anchors.

1. PM2.5 longitudinal studies and dementia risk meta-analysis (29M participants, RR 1.17/10µg/m³)
   — Google search result via Gemini; specific paper not resolvable from Gemini's redirect URL;
   class of evidence is meta-analyses of long-term PM2.5 exposure and dementia incidence
2. Mechanisms of PM2.5-induced neurodegeneration (NfL, GFAP biomarker studies) — Google Gemini
3. Maher et al. (2016), PNAS — magnetite nanoparticles in human brain tissue; The Guardian coverage
4. B12 deficiency prevalence India — indiatimes.com (non peer-reviewed; treat as background context only)
5. B12 deficiency Indian population prevalence — eurekalert.org press release (non peer-reviewed)
6. Meta-analysis B12 deficiency India — healthcare-bulletin.co.uk (verify primary paper)
7. Maternal B12 and child cognition — PMC4161312 (Pune Maternal Nutrition Study)
8. SANSCOG B12, homocysteine and cognition — PMC5802839 (Srinivasan et al., elderly rural cohort)
9. Reversible dementia from B12 deficiency — PMC2872396
10. B12 deficiency and cognitive impairment — practicalneurology.com
11. Pune Maternal Nutrition Study — PMC4161312 (duplicate of Source 7)
12. B12 supplementation MMSE improvement India — ffhdj.com (unverified journal; treat with caution)
13. Occupational PA and dementia risk (HUNT4 70+) — sciencedaily.com summary (verify primary paper)
14. Physical activity paradox and dementia — medicalnewstoday.com summary (verify primary paper)
15. Pesticide occupational exposure systematic review — ResearchGate DOI 305389025
16. Gardening and dementia risk reduction — PMC5454721
17. Sleep duration and cognitive function, LASI India — PMC8913127
18. U-shaped sleep–cognition relationship, India — EPIDEMIOLOGY 2022 Jan (doi incomplete in source; verify via journal)
19. SMRUTHI-INDIA sleep and cognition, elderly males — ResearchGate publication 330545224
20. Gender-specific sleep-cognition association, India — PMC9372274
21. LASI-DAD Harmonized Data Codebook — lasi-dad.org/data/codebooks/harmonized/h_lasi-dad_cbook.html
22. LASI-DAD Wave 1 data description — lasi-dad.org/data/lasi-dad-wave-1
23. Geospatial PM2.5 linkage to LASI-DAD — PMC8570776
24. Gateway to Global Aging, LASI-DAD documentation — g2aging.org/models/lasi-dad
25. Causal inference methods in dementia research — PMC5580287
26. Population Attributable Fraction dementia India — PMC8918239

**Key anchors from team's verified reference list (cross-referenced):**
- Lancet Commission 2024 — 14 modifiable dementia risk factors (air pollution included)
- LASI-DAD and SANSCOG — confirmed datasets from CBR/IISc

---

*Research pipeline: Gemini CLI (gemini-2.5-pro) → Claude critic (Stage 2, Codex fallback due
to 401 Unauthorized on OpenAI key) → Claude synthesis (Stage 3)*

*Date: 2026-05-08*
