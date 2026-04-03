# CodeHints

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Programming cheat sheets and documentation. Learn programming concepts through examples.

**Website:** [https://codehints.io](https://codehints.io)

## 🚀 Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Starlight](https://starlight.astro.build) - Documentation theme
- [starlight-blog](https://github.com/HiDeoo/starlight-blog) - Blog plugin
- [KaTeX](https://katex.org) - Math rendering
- [Pagefind](https://pagefind.app) - Search

## 📁 Project Structure

```
.
├── public/           # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/       # Images and logo
│   ├── components/   # Custom Astro components
│   ├── content/
│   │   └── docs/     # Markdown documentation & blog posts
│   │       └── blog/ # Blog posts
│   └── styles/       # Custom CSS
├── astro.config.mjs  # Astro configuration
└── package.json
```

## 🧞 Commands

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `pnpm install` | Install dependencies                        |
| `pnpm dev`     | Start local dev server at `localhost:4321`  |
| `pnpm build`   | Build production site to `./dist/`          |
| `pnpm preview` | Preview build locally before deploying      |

## 📝 Contributing

Contributing is possible via [GitHub](https://github.com/LouisPetrik/codehints). Alternatively, you can send content, drafts, or ideas via email to louispetrik@aol.com.

## 📄 License

Copyright © Louis Petrik
