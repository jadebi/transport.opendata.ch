# transport.opendata.ch - Demo Frontend

A **React SPA** that visualises real-time Swiss public transport data from the official [transport.opendata.ch API](https://transport.opendata.ch).

## Features

- **Station search** - Find Swiss railway/bus stations by name
- **Live stationboard** - Real-time departures with automatic 2-second polling
- **Delay information** - See delays, prognosis times, and platform numbers
- **Dark mode** - System-aware with manual toggle, persisted to localStorage

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build & deploy

```bash
npm run build
```

A single self-contained `index.html` is written to `dist/`. No server-side routing config is needed - the app uses hash-based routing.

### GitHub Pages

The app can be deployed to GitHub Pages with one command:

```bash
npm run deploy
```

On every push to the `main` branch, a GitHub Actions workflow automatically builds and deploys to GitHub Pages.

## Tech stack

| | |
|---|---|
| **Framework** | React 19 |
| **Language** | TypeScript 5.9 |
| **Build** | Vite 7 + `vite-plugin-singlefile` |
| **UI** | HeroUI v2 + Tailwind CSS v4 |
| **Icons** | Lucide React |
| **Routing** | react-router-dom v7 (HashRouter) |

## Project structure

```
src/
├── api/              # Custom hooks for API calls
│   ├── queryLocations.tsx
│   └── queryStationboard.tsx
├── components/
│   ├── ErrorBoundary.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── render/
│       ├── LocationCards.tsx
│       └── StationboardRows.tsx
├── hooks/
│   └── useDebounce.ts
├── pages/
│   ├── Landing.tsx
│   ├── Stationboard.tsx
│   └── Stations.tsx
├── styles/
│   └── global.css
├── types.ts
├── hero.ts
└── main.tsx
```

## API

All data is fetched client-side from `https://transport.opendata.ch/v1/`:

- `GET /v1/locations?query=...` - search stations
- `GET /v1/stationboard?id=...&type=departure&limit=...` - get departures

See the [official API documentation](https://transport.opendata.ch) for details.

## License

MIT
