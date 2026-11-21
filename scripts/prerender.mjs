// Pre-render every route to static HTML (like the live site), so pages load instantly and are crawlable.
// Runs after `vite build` (client, into dist/) and `vite build --ssr` (server renderer, into dist-ssr/).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE = "https://www.nammamedmate.com";
const DEFAULT_TITLE = "Namma MedMate — Pharmacy Management Software for Chemists in Bengaluru";

// path -> [output file, <title>, canonical path]
const PAGES = [
  ["/", "index.html", DEFAULT_TITLE],
  ["/pharmacy-owner", "pharmacy-owner.html", "For Pharmacies · Early Access | Namma MedMate Bengaluru"],
  ["/stories", "stories.html", "Customer Stories | Namma MedMate Bengaluru"],
  ["/about", "about.html", "About Us — Our Story &amp; Founder | Namma MedMate Bengaluru"],
  ["/contact", "contact.html", "Contact Us | Namma MedMate Bengaluru"],
  ["/privacy", "privacy.html", DEFAULT_TITLE],
  ["/terms", "terms.html", DEFAULT_TITLE],
  ["/refund", "refund.html", DEFAULT_TITLE],
  // served for any unknown URL (with HTTP 404); rendered at a path no route matches
  ["/this-page-does-not-exist", "404.html", "Page not found | Namma MedMate"],
];

const { render } = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);
// Same document shape as the live site: stylesheet last in <head>, module script at the end of <body>.
let template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const script = template.match(/\s*<script type="module" crossorigin src="([^"]+)"><\/script>/);
template = template
  .replace(script[0], "")
  .replace(/<link rel="stylesheet" crossorigin href="([^"]+)">/, '<link rel="stylesheet" href="$1">')
  .replace("</body>", `  <script type="module" src="${script[1]}"></script>\n  </body>`);

for (const [route, file, title] of PAGES) {
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${SITE}${route === "/" ? "/" : route}" />`)
    .replace("<!--app-html-->", render(route));
  fs.writeFileSync(path.join(dist, file), html);
  console.log(`prerendered ${route.padEnd(16)} -> dist/${file}`);
}
fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
