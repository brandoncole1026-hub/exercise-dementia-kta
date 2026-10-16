# Moving Minds — Exercise & Dementia

A lightweight, accessible **static website** translating a student knowledge-to-action project on exercise for people living with Alzheimer's disease, dementia, and mild cognitive impairment into a clinical educational resource.

## Pages

- `index.html` — home and central takeaways
- `evidence.html` — research summary with accessible study-count charts
- `exercises.html` — filterable examples and dementia-friendly cueing / adaptation tips
- `implementation.html` — proposed Knowledge-to-Action rollout and follow-up evaluation
- `resources.html` — project bibliography with DOIs and separately labeled external reading
- `about.html` — scope and attribution
- `handout.html` — printable clinician quick reference (use Print / Save as PDF)

## Local preview

From the project directory:

```bash
python3 -m http.server 8080
```

Visit `http://localhost:8080`. No package manager, API key, or build command is required.

## Deploy using a NEW GitHub repo + a NEW Vercel project

**Important:** Do not upload these files into your existing `cfb-model-web` repository. Create a completely separate GitHub repository, e.g. `exercise-dementia-kta`, with its own Vercel import.

1. GitHub → New repository → `exercise-dementia-kta` (public or private) → Create repository. Do not initialize with files if you intend to use git commands from scratch.
2. Upload all contents of this directory **including** `assets/`, `index.html`, and `vercel.json` to the root of the NEW repository (do not upload only the zip).
3. Vercel → Add New → Project → Import `exercise-dementia-kta`.
4. Choose **Other** / static framework preset, repository root `./`, **no build command**; use the default root static output. Deploy.
5. You receive a separate URL, e.g. `exercise-dementia-kta.vercel.app` *if that subdomain is available*. Your CFB project remains unchanged.

If you prefer the terminal for step 2, the included `SAFE_PUBLISH_NEW_REPO.sh` script can initialize this extracted folder and publish it **only** to the new repo named `brandoncole1026-hub/exercise-dementia-kta`. After creating the empty GitHub repo, run `bash SAFE_PUBLISH_NEW_REPO.sh` in this folder and type `PUBLISH` at the confirmation prompt. It refuses an unrelated existing Git remote. Do not run the script from inside the CFB project.

## Content provenance

Research numbers and conclusions: the provided **KTA Project Part 1.docx** review summary, with 12 RCTs, 1,924 participants, PEDro 4–9/10, physical performance 9/12 improved, cognition 6/12 improved (3 unchanged, 3 mixed), and ADL/quality-of-life 6 improved (1 unchanged, 5 unreported). The document's bibliography includes related publications such as a trial protocol: do not equate every bibliography entry with a final RCT report.

Exercise examples: *illustrative educational translations* of aerobic, resistance, balance, and gait training categories, **not** trial-specific prescribed dosages. Program suggestions (2–5 sessions/week over 12–24 weeks) originate in the supplied review and must be individualized.

Supplemental public resources (separately marked): National Institute on Aging and collaborative international guideline. This website is not an official institutional publication or a replacement for clinical judgment.

## Privacy and accessibility

No external scripts, tracking, external fonts, patient data entry, authentication, database, or analytics. Plain HTML / CSS / JavaScript. Semantic HTML, keyboard-accessible filters and navigation, responsive layout, print styles, visible focus states, and reduced-motion handling.

## Maintenance

Edit static `.html` pages for content; update `assets/styles.css` for styling; `assets/app.js` controls the mobile menu and exercise filters. Pushing to the new repo triggers its own Vercel deployment without affecting your unrelated site.
