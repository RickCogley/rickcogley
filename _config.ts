import lume from "lume/mod.ts";

const site = lume();

site.ignore("README.md");
site.ignore("*.DS_Store");
site.ignore("archive");

// Prepare script to copy the generated readme to the repo root
site.script(
  "copyreadme",
  "cd _site && cp repo-readme.md ../README.md",
);
// Execute scripts after build
site.addEventListener("afterBuild", "copyreadme");

export default site;
