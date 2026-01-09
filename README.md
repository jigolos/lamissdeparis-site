# Lamiss de Paris — Next.js (Static Export) + Netlify + Decap CMS

This project is **100% static** (no Firebase, no billing) and includes a working **/admin** panel using **Decap CMS**.

## Run locally
1) Install deps:
   - `npm install`
2) Start dev server:
   - `npm run dev`
3) Open:
   - http://localhost:3000
   - http://localhost:3000/admin

> Note: login in /admin requires Netlify Identity (for local dev you can use Decap local backend; see below).

## Deploy to Netlify (free)
1) Create a GitHub repo and push this project.
2) In Netlify:
   - New site from Git → select your repo
   - Build command: `npm run build`
   - Publish directory: `out`
3) Enable Identity:
   - Netlify Dashboard → Site settings → Identity → Enable
   - Registration: **Invite only** (recommended)
4) Enable Git Gateway:
   - Identity → Services → Git Gateway → Enable
5) Invite yourself:
   - Identity → Invite users → your email
6) Visit:
   - https://YOUR-SITE.netlify.app/admin

## Content structure
- `content/site.json` — brand, tagline, about, contact
- `content/services.json` — services list
- `content/faq.json` — FAQ list
- `content/gallery.json` — gallery image list
- uploads go in `public/uploads`

## Optional local CMS mode (no Netlify needed)
Decap supports local editing:
- In `public/admin/config.yml`, uncomment:
  `local_backend: true`
- Run:
  `npx decap-server`
- Then open:
  http://localhost:3000/admin

(When deploying to Netlify, comment `local_backend` again.)
