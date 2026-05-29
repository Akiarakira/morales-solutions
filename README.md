# Morales Solutions — Landing Page

Marketing site for **Morales Solutions** — compliance-first outsourcing for
customer support, sales, and regulatory operations.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4** (CSS-based theme via `@theme` in `app/globals.css`)
- **Vanta.js + Three.js** (animated globe in the hero)
- **lucide-react** (icons)

## Develop

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Build (static export)

The project is configured for **static export** (`output: "export"` in
`next.config.ts`) so it can be deployed as pure front-end (Cloudflare Pages,
Netlify, S3, GitHub Pages, etc.) until a backend is added.

```bash
pnpm build
```

Output: `out/` — drop on any static host.

## Pages

- `/` — Landing (Hero w/ Vanta globe, Why Us cards, Compliance band, Services
  + Careers blocks, dual CTA section, footer).
- `/contact` — **Request Services** form (priority CTA from the landing).
- `/careers` — **Apply for a Role** form.

Forms are currently client-side stubs (`setTimeout` simulated submit). When the
backend is ready, swap `handleSubmit` in `components/ContactForm.tsx` and
`components/CareersForm.tsx` for a real `fetch()` call (e.g. Google Sheets API
route, Supabase, etc.) and remove `output: "export"` from `next.config.ts` if
you need server functions.

## Brand tokens

Defined in `app/globals.css` under `@theme`:

| Token | Value |
|---|---|
| `--color-brand-red`    | `#B30634` |
| `--color-brand-orange` | `#FF6600` |
| `--color-brand-navy`   | `#0A0F23` |
| `--color-brand-cream`  | `#F8E3D0` |

Use as Tailwind utilities: `bg-brand-red`, `text-brand-cream`, etc. Brand
gradients are exposed via `.brand-gradient-text` and `.brand-gradient-bg`.
