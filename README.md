# falconx-nasa-space-apps
FLAMEWISE — VS CODE PROJECT
===========================

PROJECT STRUCTURE
- index.html
- css/styles.css
- js/app.js

HOW TO RUN
1. Extract the FLAMEWISE.zip folder.
2. Open the FLAMEWISE folder in VS Code.
3. Open index.html in a browser, or use the VS Code Live Server extension.
4. Keep the css and js folders in the same locations; do not move index.html by itself.

FUNCTIONS INCLUDED
- Original dark-space visual direction, animated starfield, orbiting planet, responsive navigation.
- Investigation catalogue with keyword, programme, and source-status filters.
- CSV and JSON import for the research team's structured NotebookLM/research outputs.
- Search and filter imported records by gravity and material.
- Export filtered records to CSV.
- Side-by-side catalogue metadata comparison.
- Evidence-completeness ranking for imported records (not scientific importance or quality).
- Source-aware dataset summaries and missing-field reporting.
- Charts from numeric fields actually present in imported records; no fabricated values.
- Metadata knowledge grouping by material, gravity, or research theme.
- Offline keyword retrieval assistant across catalogue and imported records.
- Source links and scientific-integrity warnings.

IMPORTANT SCIENTIFIC NOTES
- The catalogue includes a mix of investigations, programme names, sub-investigations, and entries requiring verification. It is not a claim that all entries are independent NASA flight experiments.
- SAFFIRE IV–VI and other entries marked “Needs verification” are not confirmed by this starter catalogue; verify their official records before presenting them as established entries.
- The local Research Assistant is a keyword retrieval tool, not a connected LLM or NASA API.
- No measured NASA data is bundled. Charts and evidence summaries remain empty until the team imports source-backed records.
- The app runs locally in the browser. It does not connect to NASA PSI, NotebookLM, or any AI service automatically.
- Every scientific value used in a final presentation should retain its publication, dataset, DOI, units, and experimental context.

EXPECTED CSV FIELDS (recommended; names can vary)
experiment, material, gravity, variable, value, unit, source_url, source_title, record_type, notes

JSON FORMAT
Either a JSON array of record objects:
[
  {"experiment":"Example","material":"Not reported","gravity":"Microgravity","variable":"Example variable","value":"...","unit":"...","source_url":"https://..."}
]
Or an object with a records array:
{"records":[ ... ]}

The importer accepts flexible column names and maps common aliases such as investigation_name -> experiment, fuel -> material, gravity_condition -> gravity, measurement -> variable, measurement_value -> value, and doi_url -> source_url.
