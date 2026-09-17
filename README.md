# Athlas

Marketing site for [Athlas](https://www.athlas.org), a nonprofit that helps talented student-athletes reach academic and athletic scholarships at universities in the United States.

This repo is a rebuild of the public WordPress site. Spanish is the default language; English lives under `/en`. Copy comes from the live pages. Images and the hero video were recovered from origin URLs on `www.athlas.org` (not the suspended BunnyCDN pull zone).

This checkout does not change live DNS or MX records.

## Run locally

```bash
npm install
npm run dev
```

The dev script binds to port **43173**. Open [http://127.0.0.1:43173](http://127.0.0.1:43173).

```bash
npm run build
npm start
```

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## What this site includes

- Home (ES / EN)
- How the process works
- Sport scholarship guides (soccer, track, swimming, golf, basketball, baseball)
- Foundation / donations (mailto; WordPress GiveWP checkout is not replicated)
- Costa Rica 2024 athletes
- Athlas Travel (custom Costa Rica trips for US teams; Book now / Reservar to travel@athlas.org)
- Coaches inquiry form
- FAQ and privacy policy

Contact forms open a message to `info@athlas.org`. There is no payment processor and no WordPress admin in this repo.
