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

// Prepare script to get holidays from dbflex
// Escape the double quotes around the auth header
site.script(
  "getholidays",
  "cd src/_data && curl https://pro.dbflex.net/secure/api/v2/15331/${API_KEY_01}/Work%20Holiday/API%20Holidays%20Today%20or%20Later/select.json -o futureholidays.json",
);

// Prepare script to copy the generated readme to the repo root
site.script(
  "copyreadme",
  "cd _site && cp repo-readme.md ../README.md",
);

// Execute scripts before build
site.addEventListener("beforeBuild", "getholidays");
// Execute scripts after build
site.addEventListener("afterBuild", "copyreadme");

export default site;
