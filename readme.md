# WEBXPAY (Next.js)

Marketing site for WEBXPAY — digital payments solutions.

## Requirements

- Node.js `>=20.9 <24` (Node 22 recommended)

## Getting Started

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

## Email configuration

The email API routes require `EMAIL_USER` and `EMAIL_PASS` in the server environment.
Optionally configure `EMAIL_HOST` and `EMAIL_PORT`. Do not commit credentials to the repository.

## Deploy

GitHub Actions deploys to EC2 on push to `main` (see `.github/workflows/deploy.yml`).
Requires secrets: `EC2_HOST`, `EC2_USER`, `SSH_PRIVATE_KEY`.
