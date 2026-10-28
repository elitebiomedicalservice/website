# Elite Biomedical Services Website

Marketing and product catalog website built with React, TypeScript, Vite, and Tailwind CSS. It includes a retrieval-grounded chat assistant backed by OpenRouter.

## Run locally

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env` and set `OPENROUTER_API_KEY` to an OpenRouter API key. The key is read by the Node server and is never sent to browser code.
3. Run `npm run dev`. Vite serves the website and proxies `/api/chat` to the local Node API server.

`OPENROUTER_MODEL` can select another model available to your OpenRouter account. The default is `openai/gpt-4o-mini`. `SITE_URL` sets the optional OpenRouter application referrer.

## Production

Run `npm run build`, then start the Node server with `NODE_ENV=production npm start`. The server serves the Vite `dist` output and the `/api/chat` endpoint from the same origin. Deploy this as a Node application, configure `OPENROUTER_API_KEY` and (optionally) `OPENROUTER_MODEL` and `SITE_URL` in the hosting provider's environment settings, and use its assigned port through `PORT`.

This project now requires a Node-capable host for chat. Static-only hosting must provide an equivalent server-side `/api/chat` endpoint; do not put the OpenRouter key in frontend environment variables.

## Chat knowledge

The assistant retrieves matching reference notes from `src/data/chatKnowledge.json`. Update that file when services, product specifications, coverage, or policies change. Product availability, prices, rentals, and clinical recommendations are intentionally not asserted by the assistant.
