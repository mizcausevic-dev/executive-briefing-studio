export type SummaryTile = {
  title: string
  value: string
  note: string
}

export type AgendaModule = {
  section: string
  title: string
  summary: string
  action: string
}

export type CalloutCard = {
  heading: string
  body: string
  tone: 'lift' | 'watch' | 'risk'
}

export type SlideCard = {
  label: string
  headline: string
  detail: string
}

export const summaryTiles: SummaryTile[] = [
  {
    title: 'Briefing packs',
    value: '6',
    note: 'Board, leadership, product, growth, security, and operator variants ready to publish.',
  },
  {
    title: 'Signals translated',
    value: '41',
    note: 'Events compressed into briefing-ready what changed / why it matters narratives.',
  },
  {
    title: 'Decision pressure',
    value: '9',
    note: 'Items likely to change revenue, trust, spend, or roadmap posture this month.',
  },
  {
    title: 'Follow-through owners',
    value: '14',
    note: 'Named owners already attached to post-briefing actions and escalation paths.',
  },
]

export const agendaModules: AgendaModule[] = [
  {
    section: 'Revenue',
    title: 'Commercial pressure is improving faster than trust debt is shrinking.',
    summary:
      'Expansion lift exists, but procurement and onboarding friction are still suppressing the cleanest enterprise paths.',
    action: 'Open with commercial upside, then immediately frame the drag that could erase it.',
  },
  {
    section: 'Growth',
    title: 'Experimentation is creating lift, but attribution quality is uneven across channels.',
    summary:
      'Partner-assisted motion is outperforming paid search on downstream quality, even when top-line volume looks smaller.',
    action: 'Rebalance channel investment and make assisted influence visible in the executive narrative.',
  },
  {
    section: 'Risk',
    title: 'Support and identity friction are clustering around accounts leadership thinks are healthy.',
    summary:
      'The surface metrics look stable, but the underlying trust pattern says those accounts need intervention before renewal.',
    action: 'Move risk into the core storyline instead of burying it in appendix slides.',
  },
]

export const calloutCards: CalloutCard[] = [
  {
    heading: 'What changed',
    body: 'Forecast confidence improved after packaging cleanup, partner lift strengthened, and workflow depth accelerated in two target cohorts.',
    tone: 'lift',
  },
  {
    heading: 'Why it matters',
    body: 'The upside is real, but the conversion path is still vulnerable to trust drag, review lag, and fragmented operational ownership.',
    tone: 'watch',
  },
  {
    heading: 'What to do next',
    body: 'Use the briefing to force sequencing: expansion, recovery, governance cleanup, then rollout acceleration.',
    tone: 'risk',
  },
]

export const slideCards: SlideCard[] = [
  {
    label: 'Opening frame',
    headline: 'Start with the decision, not the dashboard.',
    detail: 'Executive readers should understand the commercial tension before seeing the supporting evidence.',
  },
  {
    label: 'Narrative spine',
    headline: 'Each section should answer what changed, why it matters, and what happens next.',
    detail: 'That framing keeps growth, risk, revenue, and operations from feeling like disconnected status updates.',
  },
  {
    label: 'Presentation mode',
    headline: 'The interface is laid out like a strategy room, not a SaaS admin panel.',
    detail: 'Typography, negative space, and editorial rhythm do the persuasion work here.',
  },
]
