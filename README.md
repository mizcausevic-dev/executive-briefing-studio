# Executive Briefing Studio

<p align="center">
  <img src="https://img.shields.io/badge/React-19-111827?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=111827" alt="React badge" />
  <img src="https://img.shields.io/badge/Vite-8-111827?style=for-the-badge&logo=vite&logoColor=FFD84D&labelColor=111827" alt="Vite badge" />
  <img src="https://img.shields.io/badge/TypeScript-6.X-111827?style=for-the-badge&logo=typescript&logoColor=ffffff&labelColor=111827" alt="TypeScript badge" />
  <img src="https://img.shields.io/badge/Interface-Editorial%20Briefing%20Studio-111827?style=for-the-badge&color=7c3aed" alt="Interface badge" />
</p>

## Executive Summary

Executive Briefing Studio is a recruiter-ready React + TypeScript flagship for turning fragmented operating signals into narrative, board-ready briefings.

Instead of surfacing one more admin panel, it frames revenue, growth, risk, AI, and operations as a polished executive story: what changed, why it matters, and what leadership should do next.

## Recruiter Takeaway

This project is meant to show:

- strategy-to-interface thinking, not just screen assembly
- an ability to translate operational complexity into executive communication
- product taste, visual hierarchy, and editorial presentation skill

## Overview

| Area | What it covers |
| --- | --- |
| Hero summary | High-level pack readiness, signal volume, and decision pressure |
| Agenda spine | Three briefing modules that shape the conversation |
| Callout layer | What changed, why it matters, and what to do next |
| Presentation surface | Slide-like storytelling cards with a strategy-room feel |

## Why This Exists

Many organizations produce leadership updates that are technically accurate but operationally weak. The problem is usually not data availability. It is translation.

Executive Briefing Studio treats the briefing itself as a product:

- it prioritizes narrative over raw output
- it imposes sequencing on complexity
- it turns different system signals into action-oriented communication

## Architecture

```mermaid
flowchart LR
    A["Signal inputs"] --> B["Agenda modules"]
    B --> C["What changed"]
    B --> D["Why it matters"]
    B --> E["What to do next"]
    C --> F["Executive briefing surface"]
    D --> F
    E --> F
```

More implementation notes live in [docs/architecture.md](./docs/architecture.md).

## Screenshots

### Hero and Summary

![Hero and summary](https://raw.githubusercontent.com/mizcausevic-dev/executive-briefing-studio/project/executive-briefing-studio/screenshots/01-hero.svg)

### Agenda Spine

![Agenda spine](https://raw.githubusercontent.com/mizcausevic-dev/executive-briefing-studio/project/executive-briefing-studio/screenshots/02-agenda.svg)

### Executive Callouts

![Executive callouts](https://raw.githubusercontent.com/mizcausevic-dev/executive-briefing-studio/project/executive-briefing-studio/screenshots/03-callouts.svg)

### Presentation Surface

![Presentation surface](https://raw.githubusercontent.com/mizcausevic-dev/executive-briefing-studio/project/executive-briefing-studio/screenshots/04-deck.svg)

## Local Run

```powershell
Set-Location "C:\Users\chaus\dev\repos\executive-briefing-studio"
npm install
npm run dev
```

## Validation

```powershell
npm test
npm run build
npm run lint
```

## Portfolio Links

- [Kinetic Gain](https://kineticgain.com/)
- [Skills / Portfolio](https://mizcausevic.com/skills/)
- [LinkedIn](https://www.linkedin.com/in/mirzacausevic)
- [Medium](https://medium.com/@mizcausevic)
- [GitHub](https://github.com/mizcausevic-dev)
