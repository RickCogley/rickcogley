[![PGP Public Key](https://img.shields.io/badge/PGP-Public_Key-orange?style=flat-square&logo=monkey%20tie)](https://cogley.jp/pgp) [![Proven.lol Lightweight Proof](https://img.shields.io/badge/Proven.lol-Lightweight_Proof-green?style=flat-square&logo=cachet)](https://proven.lol/6265e6)

**Last Updated:**&nbsp; February 28th, 2026 at 9:23:26 AM GMT+9
**Today is:**&nbsp; Saturday, March 21, 2026

### Hi there 👋

I founded [eSolia](https://esolia.com), a boutique IT services firm based in Tokyo, in 1999. We passed our 25th anniversary in July 2024 and hope to stay healthy and profitable, working on improving our operations by implementing ISO 27001.

I have spent my career in IT in Japan, doing a wide range of activities, such as compsci tutoring, physical cabling, network engineering, project management, software development, system architecture and design, solution consulting, web design and development, and delivering training courses to name a few. Sometimes I look back with nostalgia on the way things were in the late '80s, but mostly, I like how things are now (you're _old_ if you remember the struggle of `autoexec.bat` and `config.sys`, and trying to squeeze drivers into limited memory)!

> _"I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past, I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain."_ — Frank Herbert, Dune, 'Litany Against Fear'

### 😤 Currently: Swamped

**Working on:** Centralized types in core package, scripts and rules in .github repo

_Packed schedule, minimal interruptions_

### GitHub Activity (last 30 days)

**830** commits &nbsp;|&nbsp; **220** this week &nbsp;|&nbsp; 🔥 **29**-day streak

**Languages:** TypeScript (14) · HTML (2) · CSS (2) · Svelte (1) · Vento (1)
**Active repos (15):** `eSolia/esolia-2025` `eSolia/codex` `RickCogley/pub-cogley` `eSolia/periodic` `eSolia/courier` and 10 more
### What I'm Up To This Week

**Themes:** `japan` `tech` `business`

**Activity:** 2 posts, 2 articles this week

### Currently Reading

📖 **User Friendly: How the Hidden Rules of Design Are Changing the Way We Live, Work, and Play** by Cliff Kuang, Robert Fabricant

### Latest Posts

- 💬 [Learners of Japanese: I revamped my 'goroawase' Japanese word play page to make ...](https://cogley.jp) <sub>japan</sub>
- 📝 [Cloudflare Pages vs Workers in 2026: Migration Guide](https://cogley.jp/cloudflare-pages-to-workers-migration) <sub>tech</sub>
- 💬 [I wrote a long-form article about data sovereignty on my company site, after see...](https://cogley.jp) <sub>business</sub>
- 📝 [Migrating 8 SvelteKit Sites to Vite 8 in a day: What We Learned](https://cogley.jp/migrating-sveltekit-to-vite-8) <sub>tech</sub>
- 💬 [Updated 10 SvelteKit apps to use vite 8. Very quick to build, uses rolldown and ...](https://cogley.jp) <sub>tech</sub>

### Content Stats

| Type | Count |
| --- | --- |
| Posts | 2253 |
| Articles | 63 |
| Podcasts | 9 |
| Pages | 10 |

### System Architecture

```mermaid
graph LR
    subgraph "Content Creation"
        A[Markdown Files] --> B[pub-cogley CMS]
        C[Quick Posts] --> B
    end
    subgraph "pub-cogley Platform"
        B --> D[(D1 Database)]
        D --> E[REST API]
        E --> F[api.cogley.jp]
    end
    subgraph "Distribution"
        F --> G[cogley.jp Website]
        F --> H[GitHub Profile README]
        F --> I[Syndication]
    end
    subgraph "Syndication Targets"
        I --> J[Bluesky]
        I --> K[Mastodon]
        I --> L[Nostr]
    end
    style B fill:#f9f,stroke:#333
    style F fill:#bbf,stroke:#333
```

### Content Flow

```mermaid
flowchart TD
    A[New Post Created] --> B{Post Type?}
    B -->|Micro| C[Short-form Content]
    B -->|Article| D[Long-form Content]
    B -->|Podcast| E[Audio Content]
    C --> F[pub-cogley API]
    D --> F
    E --> F
    F --> G[cogley.jp]
    F --> H[Syndicate to Bluesky]
    F --> I[Syndicate to Mastodon]
    F --> J[Syndicate to Nostr]
    F --> K[GitHub README via Lume]
    style F fill:#bbf,stroke:#333
    style G fill:#bfb,stroke:#333
```

### Build Stats

| Item | Value |
| --- | --- |
| Repo Total Files | 7 |
| Repo Size in KB | 5023 |
| Lume Version | v2.5.0 |
| Deno Version | 2.7.7 (linux x86_64) |
| V8 Version | 14.6.202.9-rusty |
| Typescript Version | 5.9.2 |
| Timezone | Asia/Tokyo |

### How does this readme work?

I'm generating this readme using the [Lume](https://lume.land) static site generator, pulling data from my [pub-cogley](https://github.com/rickcogley/pub-cogley) API. See [this page](https://rickcogley.github.io/rickcogley/) for details to get your own!

### Tech Stack

<div align="center">
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" title="PostgreSQL"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" alt="MySQL" title="MySQL"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/192158606-7c2ef6bd-6e04-47cf-b5bc-da2797cb5bda.png" alt="bash" title="bash"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="REST" title="REST"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/192107856-aa92c8b1-b615-47c3-9141-ed0d29a90239.png" alt="GraphQL" title="GraphQL"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/192108893-b1eed3c7-b2c4-4e1c-9e9f-c7e83637b33d.png" alt="WebStorm" title="WebStorm"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="Visual Studio Code" title="Visual Studio Code"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/183868728-b2e11072-00a5-47e2-8a4e-4ebbb2b8c554.png" alt="CI/CD" title="CI/CD"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/183345125-9a7cd2e6-6ad6-436f-8490-44c903bef84c.png" alt="Nginx" title="Nginx"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/183896132-54262f2e-6d98-41e3-8888-e40ab5a17326.png" alt="AWS" title="AWS"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/183911544-95ad6ba7-09bf-4040-ac44-0adafedb9616.png" alt="Microsoft Azure" title="Microsoft Azure"/></code>
	<code><img width="30" src="https://github.com/user-attachments/assets/f3bee16b-3609-489f-9445-d08c0a52468b" alt="Digital Ocean" title="Digital Ocean"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/186884150-05e9ff6d-340e-4802-9533-2c3f02363ee3.png" alt="Windows" title="Windows"/></code>
	<code><img width="30" src="https://user-images.githubusercontent.com/25181517/186884152-ae609cca-8cf1-4175-8d60-1ce1fa078ca2.png" alt="macOS" title="macOS"/></code>
	<code><img width="30" src="https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa" alt="Linux" title="Linux"/></code>
</div>
