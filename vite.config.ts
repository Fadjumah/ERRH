// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GITHUB_PAGES=true produces a static build served from the /ERRH/ subpath
// (GitHub Pages project site). The normal Lovable build is unaffected.
const ghPages = process.env.GITHUB_PAGES === "true";
const basepath = ghPages ? "/ERRH" : "/";

export default defineConfig({
  vite: {
    base: ghPages ? "/ERRH/" : "/",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    router: { basepath },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
    },
  },
});
