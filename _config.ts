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

// Prepare script to get holidays from dbflex (Lume runs this with bash -c)
// InfoSec: the read-only token goes in an Authorization header fed on stdin by
// the printf builtin, so it is never in the URL or curl's arguments
site.script(
  "getholidays",
  "cd src/_data && printf 'Authorization: Bearer %s\\n' \"$API_KEY_01\" | curl -sS -H @- https://pro.dbflex.net/secure/api/v2/15331/Work%20Holiday/API%20Holidays%20Today%20or%20Later/select.json -o futureholidays.json",
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
