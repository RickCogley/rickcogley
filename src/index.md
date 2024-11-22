---
layout: layouts/base.vto
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
  - text: Website
    href: 'https://lume.land'
    type: ''
  - type: mastodon
    text: '@lume@fosstodon.org'
    href: 'https://fosstodon.org/@lume'
  - type: github
    text: GitHub
    href: 'https://github.com/lumeland/'
  - type: spotify
    text: Spotify
    href: 'https://open.spotify.com/user/oscarotero'
  - type: discord
    text: Discord
    href: 'https://discord.gg/YbTmpACHWB'
  - type: opencollective
    text: Open Collective
    href: 'https://opencollective.com/lume'
    only_icon: true
footer: "Powered by [Lume](https://lume.land) & [SimpleMe](https://github.com/lumeland/theme-simple-me) theme"
extra_head: ''
---

## Github's Special Profile Repos

Github has a special feature where, the `README.md` from a repository with the same name as your Github username is displayed on your Github profile. My Github handle and profile is [@rickcogley](https://github.com/rickcogley), and you're looking at a page served via Github Pages from that very repository. In my case, it's [rickcogley / rickcogley](https://github.com/rickcogley/rickcogley). 

![What readme?](/figure1.png)

## The Automation Concept

Lately I'm using possibly the world's coolest Static Site Generator «[Lume ルメ](https://lume.land/)», and its companion [Vento](https://vento.js.org/) templates, both coded by [Óscar Otero](https://oscarotero.com/). I had a thought that if I could use a Vento template to generate a markdown file in my `rickcogley` repository, I could somehow automatically copy the markdown file into the repository root, so that it appears on my Github profile. 

It turns out, per Oscar, that all you need to do is set the Vento template's url to the name of your desired markdown file: `url: my-readme.md`. When Lume generates your site, it will just populate the readme with the content of the template. However with Vento, you can do SSG-template-y things like loop through lists, or pull in data. 


## Getting it done with Lume

Of course if you search, there are plenty of ways to make a dynamic profile readme, but how do we do it with Lume? 

## How to use?

Go to the repo, "use this template"

## Is it good? 

Yes.