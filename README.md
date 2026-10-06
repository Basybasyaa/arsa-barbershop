# ARSA Barbershop

ARSA Barbershop is a fictional premium barbershop website concept designed for a public portfolio. The experience presents a polished, editorial-style landing page for a modern grooming studio, with a focus on clear calls to action, visual storytelling, and responsive browsing.

This is a portfolio/demo project, not a website for a real client or operating business. The brand, location, team members, pricing, testimonials, statistics, and booking details shown in the interface are fictional demonstration content.

## Built with

- Next.js
- TypeScript
- Tailwind CSS
- Responsive design with custom CSS
- Next Font for typography

## Features

- Premium dark visual direction with editorial typography and gold accents
- Responsive navigation with a mobile menu and mobile booking CTA
- Hero section with booking and service discovery actions
- Service menu with pricing and featured service treatment
- Benefits, gallery, team, testimonials, story, location, and final CTA sections
- Accessible labels, keyboard focus states, and touch-friendly mobile controls
- Responsive layouts for desktop, tablet, and mobile viewports
- Static demo booking and map links for illustrating the intended experience

## Getting started

### Requirements

- Node.js 20 or newer
- npm

### Installation

Clone the repository, install dependencies, and start the development server:

```bash
git clone <repository-url>
cd barber-demo
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

Create and run a production build locally:

```bash
npm run build
npm run start
```

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |

## Project structure

```text
app/
├── globals.css   # Global styles, layout, responsive rules, and visual system
├── layout.tsx    # Root layout, fonts, and page metadata
└── page.tsx      # Single-page ARSA Barbershop experience
public/            # Static public assets
```

## Notes

- The page uses remote Unsplash image URLs for the visual demo.
- Booking, map, Instagram, pricing, testimonials, and business information are placeholders for portfolio presentation and should be replaced before any real-world use.
- No API keys, credentials, or environment variables are required to run this project locally.

## License

This project is shared as a portfolio/demo concept. Add a license before redistributing it as a standalone product.
