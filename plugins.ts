import "lume/types.ts";
// import Color from "https://colorjs.io/dist/color.js";
import Color from "npm:colorjs.io";
import simpleIcons from "https://deno.land/x/lume_icon_plugins@v0.1.1/simpleicons.ts";
import icons from "lume/plugins/icons.ts"
import basePath from "lume/plugins/base_path.ts";
import favicon from "lume/plugins/favicon.ts";
import metas from "lume/plugins/metas.ts";
import postcss from "lume/plugins/postcss.ts";
import transformImages from "lume/plugins/transform_images.ts";
import prism from "lume/plugins/prism.ts";
import date from "lume/plugins/date.ts";
import { getGitDate } from "lume/core/utils/date.ts";
import { enUS } from "npm:date-fns/locale/en-US";
import { ja } from "npm:date-fns/locale/ja";
import purgecss from "lume/plugins/purgecss.ts";
import plaintext from "lume/plugins/plaintext.ts";

/** Configure the site */
export default function () {
  return (site: Lume.Site) => {
    site.use(postcss())
      .use(metas())
      .use(favicon())
      .use(basePath())
      .mergeKey("extra_head", "stringArray")
      .use(transformImages())
      .use(simpleIcons())
      .use(icons())
      .use(prism())
      .use(date({ locales: { enUS, ja } }))
      .use(purgecss({
        fontFace: true,
      }))
      .use(plaintext())

    site.data("textColor", (hex: string) => {
      const color = new Color(`#${hex}`);
      const onWhite = Math.abs(color.contrastWCAG21("white"));
      const onBlack = Math.abs(color.contrastWCAG21("black"));
      return (onWhite + 0.5) > onBlack ? "white" : "black";
    });

    site.preprocess([".html"], (pages) => {
      for (const page of pages) {
        const src = page.src.entry?.src;

        if (src) {
          page.data.lastmod = getGitDate("modified", src);
        }
      }
    });

    site.copy([".jpg", ".webp", ".png", ".svg"]);
  };
}
