[![日本語](https://img.shields.io/badge/日本語-README-blue?style=flat-square)](README.ja.md) [![PGP Public Key](https://img.shields.io/badge/PGP-Public_Key-orange?style=flat-square&logo=monkey%20tie)](https://cogley.jp/pgp) [![Proven.lol Lightweight Proof](https://img.shields.io/badge/Proven.lol-Lightweight_Proof-green?style=flat-square&logo=cachet)](https://proven.lol/6265e6)

**Last Updated:**&nbsp; March 23rd, 2026 at 4:52:49 PM GMT+9
**Today is:**&nbsp; Thursday, April 30, 2026

### Hi there 👋

Bilingual IT consultant in Japan since 1987. Based in Yokohama, working in Tokyo.

### Career

I came to Japan in 1987 as a research student at the University of Tokyo. Programming turned out to be far more interesting than animal experiments, so I pivoted to tech.

My first job (around 1989) was at a telephone card ("teleca") design company, where I built and ran the office network. This was right when "DOS/V" machines were taking off in Japan after IBM released the PS/2 with its kanji processing chip. A PS/2 cost around ¥2M; a DOS/V clone was maybe ¥250K. That's where my technical career started.

From there I moved to a network support company doing helpdesk, user support, and network engineering. In 1993 I co-founded a PC training company, serving as CIO and building the technology operations side from scratch.

In the summer of 1999 I founded [eSolia Inc.](https://esolia.co.jp), my current firm. We've been providing bilingual IT outsourcing and infrastructure services to international companies in Tokyo for over 26 years, and are working on ISO 27001 implementation.

### Current Tech Stack

Building web applications in TypeScript with [SvelteKit](https://svelte.dev) + [Cloudflare Workers](https://developers.cloudflare.com/workers/). Full-stack on D1 (SQLite), R2, and KV.

**Projects:**
- [cogley.jp](https://cogley.jp) — Articles on tech, business, and Japan (SvelteKit + Cloudflare Workers)
- [svelte.cogley.jp](https://svelte.cogley.jp) — Interactive migration reference: React/Vue/Angular to Svelte 5 (bilingual EN/JA)
- [rick.cogley.jp](https://rick.cogley.jp) — Profile site
- [pulse.esolia.co.jp](https://pulse.esolia.co.jp) — Security & compliance management. Tracks compliance against ISO 27001, CIS Controls, and other frameworks (SvelteKit + Cloudflare Workers)
- [periodic.esolia.co.jp](https://periodic.esolia.co.jp) — DNS & email security monitoring. Drift detection for DMARC/SPF/DKIM and domain security (SvelteKit + Cloudflare Workers)
- [courier.esolia.co.jp](https://courier.esolia.co.jp) — Secure file sharing with PIN protection and auto-expiry for sensitive communications (SvelteKit + Cloudflare Workers)

> _"As I grow older, I pay less attention to what people say. I just watch what they do."_ — Andrew Carnegie

### 😤 Currently: Swamped

**Working on:** Centralized types in core package, scripts and rules in .github repo

_Packed schedule, minimal interruptions_

### GitHub Activity (last 30 days)

**986** commits &nbsp;|&nbsp; **727** this week &nbsp;|&nbsp; 🔥 **29**-day streak

**Languages:** TypeScript (18) · Svelte (2) · CSS (1) · PowerShell (1) · Python (1)
**Active repos (18):** `eSolia/codex` `RickCogley/pub-cogley` `eSolia/esolia-2025` `eSolia/nexus` `eSolia/periodic` and 13 more
### What I'm Up To This Week

**Themes:** `personal` `japan`

**Activity:** 1 posts, 2 articles this week

### Currently Reading

📖 **User Friendly: How the Hidden Rules of Design Are Changing the Way We Live, Work, and Play** by Cliff Kuang, Robert Fabricant

### Latest Posts

- 💬 [Just a STUNNING London Marathon result, with two sub-2-hour finishes....](https://cogley.jp) <sub>personal</sub>
- 📝 [The Soul of Japanese Shoes: Kurume, Asakusa, and a Dutch Word](https://cogley.jp/japanese-shoes) <sub>japan</sub>
- 📝 [日本の靴のたましい：久留米の釜、浅草の錐、そしてオランダ語の物語](https://cogley.jp/japanese-shoes) <sub>japan</sub>
- 📝 [Cloudflare Workers HTML to Markdown: Free-Plan Edition](https://cogley.jp/cloudflare-workers-html-to-markdown) <sub>tech</sub>
- 📝 [Cloudflare Workers無料プランでHTML→Markdown変換](https://cogley.jp/cloudflare-workers-html-to-markdown) <sub>tech</sub>

### Content Stats

| Type | Count |
| --- | --- |
| Posts | 2261 |
| Articles | 84 |
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
| Repo Total Files | 0 |
| Repo Size in KB | 5056 |
| Lume Version | v3.2.4 |
| Deno Version | 2.7.13 (linux x86_64) |
| V8 Version | 14.7.173.20-rusty |
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
