# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### Static hosting

For Cloudflare Pages, set the build command to `npm run generate` and the build
output directory to `dist`. Nuxt detects Cloudflare Pages and writes its static
output to `dist`; a local build outside Cloudflare normally uses `.output/public`
instead. This generates the resume at `/` and copies the Shot by Shabes site to
`/shot-by-shabes/` with its scripts and images. Publish through the hosting
provider; building locally does not deploy the site.
