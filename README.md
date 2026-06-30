# CPA Canada — Redesigned Experience

A Next.js prototype redesign of [CPA Canada](https://www.cpacanada.ca/) focused on improved UX, navigation, membership clarity, and AI-assisted member support. Built as an internship / concept project — **not affiliated with CPA Canada**.

**Live demo:** [cpa-canada.vercel.app](https://cpa-canada.vercel.app/) (if deployed)

---

## Features

- **Hero bento grid** — News, webinars, policy, and resources at a glance
- **Focus areas explorer** — Tabbed panel for six profession pillars
- **Membership tiers** — Affiliate, Member, and Member Advantage comparison
- **30-second membership quiz** — Recommends the best tier based on PD, tax, and career goals
- **CPA AI Assistant** — Floating chatbot for membership, PD, and Tax 360™ questions
- **Elevate your career & news** — Card layouts with curated imagery
- **Newsletter footer** — Subscribe strip, stats, social links, and site map

---

## Tech Stack

| Layer | Tools |
|--------|--------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/), [Tailwind CSS 3](https://tailwindcss.com/) |
| Language | TypeScript |
| Fonts | DM Sans (Google Fonts) |
| Images | Unsplash (remote via `next/image`) |
| Deploy | Vercel-ready |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── app/                  # Next.js App Router (layout, page, globals)
├── components/           # UI sections (Header, Hero, Footer, AIChat, etc.)
├── lib/data.ts           # Content, membership tiers, quiz, AI responses
├── public/               # Static assets (logo)
├── index.html            # Original static HTML prototype (reference)
├── app.js / styles.css   # Original vanilla JS prototype (reference)
└── README.md
```

---

## AI Tools Used

| Tool | How it was used |
|------|------------------|
| **Cursor (AI Agent)** | Primary development environment. Used to rebuild the UI from the reference site, refactor components, swap image assets, implement the membership quiz, redesign focus areas and footer, and wire the AI chatbot. |
| **ChatGPT / Claude (via Cursor)** | Architecture decisions, copy refinement for hero/news/membership sections, quiz question wording, and AI assistant response templates in `lib/data.ts`. |
| **GitHub Copilot-style inline AI** | Boilerplate for React components, Tailwind class patterns, and TypeScript types during iterative edits. |
| **Vercel (deployment)** | Hosting the production build; deployment logs used to verify build success. |

*Note: No Figma AI or Framer was used in this build. Design was implemented directly in code with Tailwind, informed by the reference Vercel prototype and cpacanada.ca content structure.*

---

## AI Ideas

### Implemented in this prototype

| Feature | Description | Potential impact |
|---------|-------------|------------------|
| **CPA AI Assistant** | Rule-based chatbot (membership tiers, PD hours, Tax 360™) with quick prompts and quiz launcher | Reduces support tickets; members get instant answers 24/7 |
| **Membership path finder quiz** | 3-question flow scoring Affiliate / Member / Advantage | Lowers signup friction; improves tier fit and retention |
| **Smart content architecture** | Section-based IA (focus tabs, bento hero) ready for persona-driven content | Foundation for future personalization by member type |

### Future AI-driven enhancements

| Idea | Description | Potential impact |
|------|-------------|------------------|
| **Persona-based homepage** | Show different hero, PD tracker, and quick links for Member / Student / Firm / Public (see `index.html` prototype) | Faster task completion; less menu digging |
| **PD recommender agent** | LLM suggests courses based on logged hours, deadline, and interest tags | Closes PD gaps before year-end deadlines |
| **Global semantic search** | Natural-language search across handbooks, CPD, and news | Replaces fragmented site search |
| **Proactive nudges** | “You have 6 PD hours left” banners driven by member profile API | Higher compliance and engagement |
| **Tax 360™ copilot** | Firm-facing agent with RAG over tax guidance (with guardrails) | Saves practitioner research time |

---

## Disclaimer

This is a **student / concept redesign** for demonstrating UX and AI integration ideas. CPA Canada® is a registered trademark of its respective owner. This repository is not officially endorsed by CPA Canada.

---

## License

MIT — for educational and portfolio use only.
