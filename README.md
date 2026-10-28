# Elite Biomedical Services Website

Marketing and product catalog website built with React, TypeScript, Vite, and Tailwind CSS. It includes a retrieval-grounded AI chat assistant backed by OpenRouter (configured for `Google: Gemma 4 26B A4B (free)`).

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in your keys:
   ```bash
   cp .env.example .env
   ```
   * `OPENROUTER_API_KEY`: Your OpenRouter API key (kept strictly server-side).
   * `OPENROUTER_MODEL`: Model ID (default: `google/gemma-4-26b-a4b-it:free`).
   * `SITE_URL`: `https://elitebiomedicalservice.com`
3. Run the development environment:
   ```bash
   npm run dev
   ```
   This runs both the local Node API server (`server.mjs` on port 8787) and Vite with a proxy for `/api/chat`.

## Deployment

### Option A: Netlify (Recommended)

The repository includes native Netlify serverless functions (`netlify/functions/chat.mjs`) and configuration (`netlify.toml`).

> [!IMPORTANT]
> **Do not use Netlify Drop (manual drag-and-drop of `dist/`).** Netlify Drop only hosts static files on the CDN and does not package or deploy backend serverless functions.

To deploy on Netlify:
1. Connect this GitHub repository (`elitebiomedicalservice/website`) to your Netlify site under **Site configuration > Build & deploy > Continuous deployment**.
2. Netlify will automatically detect:
   * **Build command**: `npm run build`
   * **Publish directory**: `dist`
   * **Functions directory**: `netlify/functions`
3. Add your environment variables in Netlify (**Site configuration > Environment variables**):
   * `OPENROUTER_API_KEY`: Your OpenRouter API key
   * `OPENROUTER_MODEL`: `google/gemma-4-26b-a4b-it:free`
   * `SITE_URL`: `https://elitebiomedicalservice.com`
4. Any push to `main` will build the frontend and deploy the serverless `/api/chat` function.

### Option B: Node.js Server (Docker / VPS / PaaS)

To run as a self-hosted Node server:
1. Build the production assets:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   NODE_ENV=production npm start
   ```
   The Node server serves the Vite `dist/` static files and handles the `/api/chat` endpoint on `PORT` (default: 8787).

## AI Assistant & Knowledge Base

* The assistant uses grounding notes from `src/data/chatKnowledge.js` (and `src/data/chatKnowledge.json`).
* Update these files when equipment specifications, service coverage, or business policies change.
* Grounding rules prevent the assistant from fabricating prices, stock status, delivery promises, or diagnosing medical conditions.
* The API includes intelligent fallback handling: if the free tier model hits an upstream provider rate limit, OpenRouter automatically routes to the paid tier fallback without interrupting user chat sessions.
