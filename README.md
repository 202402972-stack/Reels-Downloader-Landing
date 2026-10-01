# Reelkeep landing page

Landing page for the **Reelkeep** Telegram bot, which downloads public TikTok and Instagram media and sends it back to a Telegram chat.

## Features

- Public TikTok videos and Instagram Reels, posts, Stories and carousels
- One link or up to five links per batch
- Best, Balanced and Small download-quality choices
- Progress, cancellation and final batch summaries
- Arabic and English bot support
- Privacy-first handling with temporary media cleanup

## Routes

- `/` — landing page
- `/features` — product features and limits
- `/privacy` — privacy policy and FAQ

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

The app listens on port `3000` by default. To expose it on a specific interface or port:

```bash
npm start -- -H 0.0.0.0 -p 3000
```

## Project structure

- `app/` — Next.js App Router pages and global styles
- `components/` — shared header, footer, buttons and UI components
- `lib/site.ts` — bot and developer site configuration

## Bot

[Open Reelkeep in Telegram](https://t.me/reels_D_bot)

## License

Private project. All rights reserved unless otherwise specified by the project owner.
