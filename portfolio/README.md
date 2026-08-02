# Pholosho Mashabela — Personal Portfolio

Premium personal portfolio website for **Pholosho Bethuel Mashabela**, Computer Science graduate and full-stack developer.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.

---

## Features

- Modern minimalist design inspired by Linear, Stripe, and Vercel
- Full responsive layout (mobile → desktop)
- Dark / light mode with system preference support
- Smooth Framer Motion animations (scroll reveal, hover, page load)
- Scroll progress indicator & back-to-top button
- Loading screen
- SEO optimised (metadata, Open Graph, structured data)
- Accessible focus states and semantic HTML
- Custom 404 page
- Contact form (client-side ready; wire to API or Formspree/Resend as needed)

---

## Tech Stack

| Layer        | Technology              |
|-------------|-------------------------|
| Framework   | Next.js 16 (App Router) |
| Language    | TypeScript              |
| Styling     | Tailwind CSS v4         |
| Animation   | Framer Motion           |
| Icons       | Lucide React            |
| Fonts       | Geist Sans / Mono       |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or pnpm / yarn)

### Install

```bash
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, SEO, providers
│   ├── page.tsx            # Home (all sections)
│   ├── globals.css         # Design tokens & utilities
│   ├── not-found/          # Custom 404
│   └── api/contact/        # Optional contact API route
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Skills, Projects, …
│   ├── shared/             # Theme, Loading, ScrollProgress, …
│   └── ui/                 # Reusable primitives (extend as needed)
├── lib/
│   ├── data.ts             # All CV-derived content
│   └── utils.ts            # cn() helper
├── types/
│   └── index.ts            # Shared TypeScript types
└── hooks/                  # Custom hooks (extend as needed)
```

---

## Customisation

1. **Content** — Edit `src/lib/data.ts` (projects, experience, skills, contact details).
2. **Photo** — Replace the placeholder in `Hero.tsx` with an optimised image in `public/`.
3. **Colours** — Primary red `#D71920` and theme tokens live in `globals.css`.
4. **Contact form** — Currently simulates success. Connect to:
   - Next.js Route Handler (`src/app/api/contact/route.ts`)
   - Formspree, Resend, or EmailJS
5. **Domain** — Update `metadataBase` and Open Graph URLs in `layout.tsx`.

---

## Deployment

### Vercel (recommended)

1. Push the repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Deploy — zero config for Next.js.

```bash
npx vercel
```

### Other platforms

Build output works with any Node host that supports Next.js:

```bash
npm run build
npm start
```

---

## Licence

Personal portfolio — all rights reserved by Pholosho Bethuel Mashabela.

---

## Contact

- Email: Pholosho204@gmail.com
- LinkedIn: [linkedin.com/in/pb-mashabela](https://linkedin.com/in/pb-mashabela)
- GitHub: [github.com/Pholosho204](https://github.com/Pholosho204)
