# `event-app-httpapi-repro`

Standalone Expo repro for the `effect/unstable/httpapi` import used in `packages/event-app/src/features/auth/api.ts`.

This folder is intentionally not part of the monorepo workspace and does not extend any shared config.

## Run

```bash
cd /home/kedom/Public/Git/progono/event-app-httpapi-repro
pnpm install
pnpm dev
```

## Verify bundling

```bash
pnpm check-types
pnpm bundle:android
```
