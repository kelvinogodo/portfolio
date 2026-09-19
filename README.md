# Kelvin Ogodo, portfolio

A registry of ventures. Each project is an entry with a reference number, from government biometric infrastructure to a fashion brand named for the Igbo word for identity.

Live: https://portfolio-ten-delta-9kdo1xiyz9.vercel.app

Static Next.js site (App Router, TypeScript). No backend. Content lives in `data/entries.ts`.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` page, layout and global styles
- `components/` entry blocks, sticky index rail, generated ridge graphic
- `data/entries.ts` all entries, contact details and CV path
- `public/cv/` the downloadable CV

## Type

Newsreader for display, Inter for body, IBM Plex Mono for reference numbers and data fields.
