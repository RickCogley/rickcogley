---
layout: layouts/base.vto
url: /
header:
  title: Rick Cogley
  description: Make a dynamic Github profile with Lume SSG!
  avatar: /avatar.jpg
metas:
  title: =header.title
  description: =header.description
  image: =header.avatar
  generator: true
  twitter: ''
links:
  - text: Lume
    href: 'https://lume.land'
    type: fireship
    only_icon: true
  - type: javascript
    text: 'Vento'
    href: 'https://vento.js.org/'
    only_icon: true
  - type: github
    text: Template Github (Rick's Profile)
    href: 'https://github.com/rickcogley/rickcogley'
    only_icon: true
  - type: github
    text: Lume Github
    href: 'https://github.com/lumeland'
    only_icon: true
footer: "Powered by [Lume](https://lume.land) & [SimpleMe](https://github.com/lumeland/theme-simple-me) theme"
extra_head: ''
---

## Github's Special Profile Repos

Github has a special feature where, the `README.md` from a repository with the same name as your Github username is displayed on your Github profile. My Github handle and profile is [@rickcogley](https://github.com/rickcogley), and you're looking at a page served via Github Pages from that very repository. In my case, it's [rickcogley / rickcogley](https://github.com/rickcogley/rickcogley). 

![What readme?](/figure1.png)

## The Automation Concept

Lately I'm using possibly the world's coolest Static Site Generator «[Lume ルメ](https://lume.land/)», and its companion [Vento](https://vento.js.org/) templates, both coded by [Óscar Otero](https://oscarotero.com/). I had a thought that if I could use a Vento template to generate a markdown file in my `rickcogley` repository, I could somehow automatically copy the markdown file into the repository root, so that it appears on my Github profile. 

It turns out, per Oscar, that all you need to do is set the Vento template's url to the name of your desired markdown file: `url: my-readme.md`. When Lume generates your site, it will just populate the readme with the content of the template. However with Vento, you can do SSG-template-y things like loop through lists, or pull in data from rss feeds or json sources, such as REST APIs. 

## Getting it done with Lume

Of course if you search, there are plenty of ways to make a dynamic profile readme, but how do we do it with Lume? Here's the overview: 

* If you want to test locally, your environment needs Deno, and after cloning this repo, you can do `deno task lume --serve` to run it on `http://localhost:3000`. You can also go to this repo and use "use this template" to get your own copy, then clone that to local.
* This repo creates a single web page based on the linktree-like [Theme Simple Me](https://github.com/lumeland/theme-simple-me) template for Lume, and hosts it on Github pages. But you can change `url: /` to `url: false` in `src/index.md` to disable the site. 
* Edit the `repo-readme.vto` Vento template, using markdown format, to create the precursor readme. Notice the `url:` is set to a markdown file. 
* On build via `deno task lume --serve` (builds and serves on localhost) or `deno task lume` (just builds), Lume will generate the site files in `_site`, and also run a script to copy the generated readme into place. 
* 

## How to use?

Go to the repo, "use this template"

## Is it good? 

Yes.