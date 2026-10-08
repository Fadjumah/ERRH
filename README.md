# Entebbe Health Connect

Can you use the assets of "Entebbe regional refferal hospital on Twitter/X and build an outstanding website for the hospital. Here is the x link to see the available assets(images).   "https://x.com/EntebbeRRH"

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://entebbe-health-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c1f32fa9-18b2-4e76-90a1-a30372630933).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## GitHub Pages

The static prototype is deployed at https://fadjumah.github.io/ERRH/.
Set **Settings → Pages → Source** to **GitHub Actions** once. Every push to
`main` then builds and deploys via `.github/workflows/pages.yml`.

Use Node 24 and the committed npm lockfile:

```sh
npm ci
npm run build:pages
```

The deployment artifact is `.output/public` (not the repository root or the
server bundle). The build verifies all seven rendered pages, local photos,
navigation, assets and `.nojekyll` before upload.
