# DropX Agent Website

Simple, professional multi-page marketing site for **DropX Agent** — a Nigeria-focused autonomous logistics AI agent for individuals and businesses.

## Stack

- React + Vite
- React Router
- Plain CSS

## Local Run

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Pages

- `/` Home
- `/solutions`
- `/products`
- `/about`
- `/contact`

## Deploy (Vercel)

### Option A: CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

### Option B: GitHub → Vercel Dashboard

1. Push repository to GitHub (`jemeokafor/dropx-agent-website`)
2. Import repository in Vercel
3. Framework preset: **Vite**
4. Deploy

## Content/Tone

- Startup/friendly voice
- Nigeria-context logistics messaging
- Professional conversion-focused structure

## Image Attribution

Current production uses custom local SVG illustrations in `public/images` (no external hotlinked assets).

Visual reference sources used during concept stage:

1. **Unsplash** — Nupo Deyon Daniel  
   https://unsplash.com/photos/a-bunch-of-cars-driving-down-a-street-next-to-tall-buildings-23q8J9zM5vA

2. **Pexels** — fauxels  
   https://www.pexels.com/photo/people-discussing-in-front-of-laptop-3183197/

3. **Pexels** — Dami Akinbode  
   https://www.pexels.com/photo/vehicles-on-road-in-city-18020531/

## Safe Rollback Policy (Production)

Default rollback uses **release tags** or **git revert + redeploy**.

### Path A — Rollback by release tag (preferred)

Create a tag for each known-good production release:

```bash
git tag -a release-YYYYMMDD-HHMM -m "Known good production release"
git push origin release-YYYYMMDD-HHMM
```

Rollback to that release:

```bash
git checkout release-YYYYMMDD-HHMM
git checkout -b rollback/release-YYYYMMDD-HHMM
npm run build
npx vercel --prod --yes
```

### Path B — Rollback by commit revert (safe for shared branches)

```bash
git checkout main
git pull
# Revert one commit
git revert <bad_commit_hash>
# OR revert a range
git revert --no-edit <old_good_commit>..HEAD
git push
npx vercel --prod --yes
```

> Do **not** use force-push as the default rollback strategy.
