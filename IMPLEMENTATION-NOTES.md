# NAVEEN.DEV terminal portfolio update

## What changed
- The homepage is now a terminal-first experience.
- Terminal commands: `help`, `whoami`, `about`, `skills`, `projects`, `contact`, `resume`, and `clear`.
- `about`, `skills`, and `contact` ask for confirmation before opening their dedicated pages.
- `projects` supports selection by number, full project name, slug, or the clickable project options.
- Each project has a dedicated route:
  - `/projects/sneakerhub`
  - `/projects/blog-application`
  - `/projects/personal-portfolio`
- Terminal auto-scroll is limited to `.terminal-output`; the page itself is not scrolled.

## Before publishing
1. Replace the placeholder email, GitHub, and LinkedIn URLs in `src/components/sections/Contact.tsx` and `src/components/terminal/commands.ts`.
2. Add your actual project repository and live-demo URLs in `src/data/projects.ts`.
3. Add a resume PDF at `public/resume.pdf` when it is ready. The terminal currently explains where to place it and does not link to a missing file.
4. Add actual project screenshots to the project detail pages when available.
5. Configure the existing EmailJS environment variables in `.env.local` if you want the contact form to send email.

## Run locally
```bash
npm install
npm run dev
```
