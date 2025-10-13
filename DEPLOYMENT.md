# Deployment Guide for QuickNotes Pro 2.0 Interactive Demo

This guide provides instructions for deploying the QuickNotes Pro 2.0 interactive demo to GitHub Pages or other hosting platforms.

## Deploying to GitHub Pages

GitHub Pages is a free hosting service that allows you to deploy static websites directly from your GitHub repository.

### Prerequisites

-   A GitHub account
-   Git installed on your local machine
-   The demo repository cloned locally

### Step 1: Install the `gh-pages` Package

First, install the `gh-pages` package as a development dependency:

```bash
pnpm add -D gh-pages
```

### Step 2: Update `package.json`

Add the following scripts to your `package.json` file:

```json
{
  "scripts": {
    "predeploy": "pnpm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://your-username.github.io/quicknotes-pro-demo"
}
```

Replace `your-username` with your actual GitHub username.

### Step 3: Update `vite.config.js`

Ensure that the `base` option in `vite.config.js` is set to your repository name:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/quicknotes-pro-demo/', // Replace with your repository name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### Step 4: Build and Deploy

Run the following command to build and deploy your demo:

```bash
pnpm run deploy
```

This command will:
1.  Build the production version of your demo.
2.  Create a `gh-pages` branch in your repository (if it doesn't exist).
3.  Push the built files to the `gh-pages` branch.

### Step 5: Configure GitHub Pages

1.  Go to your repository on GitHub.
2.  Navigate to **Settings** > **Pages**.
3.  Under **Source**, select the `gh-pages` branch and the `/ (root)` folder.
4.  Click **Save**.

Your demo will be available at `https://your-username.github.io/quicknotes-pro-demo` within a few minutes.

## Deploying to Other Platforms

### Vercel

1.  Install the Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in your project directory and follow the prompts.

### Netlify

1.  Install the Netlify CLI: `npm i -g netlify-cli`
2.  Run `netlify deploy` in your project directory and follow the prompts.

### Manual Deployment

1.  Build the project: `pnpm run build`
2.  Upload the contents of the `dist` folder to your web server.

---

For more information, refer to the [Vite deployment documentation](https://vitejs.dev/guide/static-deploy.html).
