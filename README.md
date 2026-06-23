# Aully Fit Web

Next.js site for public Aully Fit policy URLs.

## Routes

- `/` - Aully Fit policy landing page
- `/privacy` - Privacy Policy in English and Korean
- `/terms` - Terms of Service in English and Korean

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm test
npm run lint
npm run build
npm audit --omit=dev
```

## Deployment

Deploy this directory as the web project root.

Recommended production URLs:

- `https://aully-fit.co.uk/privacy`
- `https://aully-fit.co.uk/terms`

These URLs can be used in App Store Connect and Google Play Console once the web project is deployed.
