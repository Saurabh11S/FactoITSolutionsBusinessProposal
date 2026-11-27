# FactoIT Solutions: Business Proposal Previews

Concept preview websites that FactoIT builds for local Delhi/NCR businesses that have no web presence. Built with **React 19 + Vite**, deployed on **Vercel**.

Each business has its own self-contained folder and its own Vercel project.

| Business | Folder | Status |
|---|---|---|
| Papa Ki Rasoi Home (tiffin, Sector 52, Gurugram) | `businesses/papa-ki-rasoi/` | Preview ready |

## Run locally

```bash
cd businesses/papa-ki-rasoi
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
```

Requires Node 20.19 or newer.

## Deploy a business on Vercel

1. **Add New > Project** and import this repository. Import it once per business.
2. Name the project after the business, for example `papa-ki-rasoi`.
3. Set **Root Directory** to the business folder, for example `businesses/papa-ki-rasoi`. Its `vercel.json` sets the framework, build command and output.
4. No environment variables are needed.
5. **Settings > Deployment Protection > Vercel Authentication: Disabled**, otherwise the business owner will see a Vercel login page instead of the site.
6. Push to the `preview` branch to create a Preview deployment.
7. Send the stable branch URL: `https://<project>-git-preview-<account>.vercel.app`.

## What is on the Papa Ki Rasoi page

Hero with live stats, marquee, bento "why us" grid, how-it-works steps, an interactive **Build your tiffin** builder that writes the WhatsApp message for the customer, reviews summary, FAQ accordion, map, a FactoIT note, and a sticky mobile order bar.

## Honesty rules for every preview

- Only public details (Google Maps listing, public review themes) are used, paraphrased. No invented prices, menus, offers or claims.
- Every page carries the "concept preview, not the official website" banner and footer.
- `vercel.json` sends `X-Robots-Tag: noindex` so demos stay out of Google.
- Outreach text lives in each folder's `proposal.md`, which is kept out of Git. Send one message, one follow-up, and stop if they decline.

## Add the next business

1. Copy `businesses/papa-ki-rasoi/` to `businesses/<new-business>/` (skip `node_modules` and `dist`).
2. Change `name` in `package.json`, replace `src/data/business.js`, and update `index.html`, `src/components/Sections.jsx` and `proposal.md`.
3. Push, then create a new Vercel project with that folder as its Root Directory.
