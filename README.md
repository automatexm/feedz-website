# Feedz Website

Sint Maarten's animal feed store — quality feed for dogs, cats, horses, poultry, livestock, and more. Certified Dommelsche Watermolen retailer.

- **Client:** Feedz (Ismaru Falbru)
- **Location:** Sint Maarten
- **Live Site:** https://feedzsxm.com
- **WhatsApp:** [wa.me/17215810102](https://wa.me/17215810102)

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Astro](https://astro.build/) 6.x | Static site generator |
| [Tailwind CSS](https://tailwindcss.com/) 4.x | Styling |
| [Vercel](https://vercel.com/) | Hosting & deployment |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | XML sitemap generation |

---

## Setup Instructions

### Prerequisites

- Node.js >= 22.12.0
- npm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd website

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Site will be available at http://localhost:4321
```

### Build

```bash
# Build for production (outputs to ./dist/)
npm run build

# Preview the production build locally
npm run preview
```

---

## Deployment

This site is deployed on **Vercel**:

1. Connect the GitHub repository to Vercel
2. Set the framework preset to "Astro"
3. Build command: `npm run build`
4. Output directory: `dist`
5. Node.js version: 22.x

Deployments happen automatically on pushes to the main branch.

---

## Content Editing Guide

### Editing Text (i18n)

All website text is stored in translation files:

- **English:** `src/i18n/en.ts`
- **French:** `src/i18n/fr.ts`

To edit any text on the site:

1. Open the appropriate language file
2. Find the section you want to edit (e.g., `hero`, `about`, `contact`)
3. Update the value
4. Save and rebuild

**Example:** To change the homepage headline:
```typescript
// src/i18n/en.ts
hero: {
  headline: "Your new headline here",  // Edit this
  // ...
}
```

### Adding Blog Posts / Tips

Blog posts ("Tips") are stored as Markdown files:

- **English tips:** `src/content/tips/en/`
- **French tips:** `src/content/tips/fr/`

To add a new tip:

1. Create a new `.md` file in the appropriate language folder
2. Use this frontmatter format:

```yaml
---
title: "Your Article Title"
description: "Brief description for SEO and previews"
date: 2025-01-28
category: pets        # Options: pets, horses, poultry, livestock, farm
readTime: 4           # Estimated reading time in minutes
lang: en              # en or fr
---

Your article content here in Markdown...
```

3. Write the content in Markdown
4. Save and rebuild

**Note:** The `slug` in the URL is generated from the filename. `my-article.md` becomes `/en/tips/my-article/`.

### Editing Products

Products are defined in the i18n files under the `products` key. Each product has:

- `id` — unique identifier
- `name` — product name
- `category` — category ID matching the categories list
- `brand` — manufacturer name
- `description` — short description
- `image` — filename (stored in `public/images/products/`)

### Images

- **Static images:** Place in `public/images/`
- **Product images:** Place in `public/images/products/`
- **Reference in code:** Use the path relative to `public/`, e.g., `/images/products/feed.jpg`

---

## Project Structure

```
website/
├── public/              # Static assets (images, fonts, etc.)
│   └── images/
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # Blog posts / tips (Markdown)
│   │   └── tips/
│   │       ├── en/
│   │       └── fr/
│   ├── i18n/            # Translation files
│   │   ├── en.ts
│   │   ├── fr.ts
│   │   └── index.ts
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route definitions
│   │   ├── en/          # English routes
│   │   └── fr/          # French routes
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
├── package.json
├── README.md
└── LICENSE
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

---

## License

MIT License — see [LICENSE](./LICENSE) for details.

Copyright (c) 2025 AutomateXM / Ismaru Falbru
