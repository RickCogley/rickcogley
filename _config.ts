import lume from "lume/mod.ts";
import plugins from "./plugins.ts";
import { getCurrentVersion } from "lume/core/utils/lume_version.ts";

const site = lume({
  src: "./src",
  location: new URL("https://rickcogley.github.io/rickcogley"),
});

site.use(plugins());
site.data("lumeVersion", getCurrentVersion());

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
