export type SummaryTile = {
  title: string
  value: string
  note: string
}

export type SpecCard = {
  kicker: string
  title: string
  items: string[]
  exclusion?: boolean
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

export type AssemblyLane = {
  step: string
  title: string
  detail: string
  output: string
}

export type SlideCard = {
  label: string
  headline: string
  detail: string
}

export type VerificationRow = {
  claim: string
  basis: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type DocsCard = {
  kicker: string
  title: string
  body: string
}

/*
 * The four headline tiles describe the method this surface prescribes, not
 * operational counts from live engagements. Every number below is checkable
 * against the page itself: three narrative questions, five assembly lanes, a
 * one-owner rule, and a zero-tolerance rule for unsequenced evidence. Nothing
 * here asserts volume of work performed for anyone.
 */
export const summaryTiles: SummaryTile[] = [
  {
    title: 'Narrative questions',
    value: '3',
    note: 'What changed, why it matters, what to do next. A module that cannot answer all three is not ready to present.',
  },
  {
    title: 'Assembly lanes',
    value: '5',
    note: 'Intake, compression, sequencing, ownership, and publish. Each lane has one defined output and one exit test.',
  },
  {
    title: 'Owners per action',
    value: '1:1',
    note: 'Every recommended action carries exactly one named owner. Shared ownership is treated as no ownership.',
  },
  {
    title: 'Unsequenced exhibits',
    value: '0',
    note: 'Nothing enters the spine without a stated decision it supports. Charts that explain nothing go in the appendix or the bin.',
  },
]

export const capabilitySpecs: SpecCard[] = [
  {
    kicker: 'Consumes',
    title: 'The material a briefing is built from',
    items: [
      'Period-over-period operating metrics already produced by finance, revenue, and product systems',
      'Incident, support, and reliability events with their timestamps and current status',
      'Governance and access-review output: exceptions, overdue closeouts, unresolved findings',
      'Roadmap and delivery state, including what slipped and what the slip costs',
      'Named owners and the escalation path each owner actually sits on',
    ],
  },
  {
    kicker: 'Produces',
    title: 'What leaves the studio',
    items: [
      'A sequenced agenda spine where each module states a decision, not a status',
      'A what changed / why it matters / what to do next block per module',
      'An action list with one named owner and one review date per item',
      'A presentation surface built for reading order, not dashboard density',
      'An explicit record of what was deliberately left out of the briefing and why',
    ],
  },
  {
    kicker: 'Does not do',
    title: 'Boundaries, stated up front',
    items: [
      'It does not ingest, store, or process customer data. There is no backend and no database.',
      'It does not generate forecasts or scores. Judgement stays with the humans in the room.',
      'It does not replace the systems of record it draws from.',
      'It does not produce compliance attestations of any kind.',
    ],
    exclusion: true,
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

export const assemblyLanes: AssemblyLane[] = [
  {
    step: '01',
    title: 'Intake without editing',
    detail:
      'Collect the operating signals for the period in their raw form and record where each one came from. Nothing is summarised, ranked, or softened at this stage. The point is a complete inventory, including the items nobody wants on the agenda, because an item quietly dropped at intake never gets argued about later.',
    output: 'Output: a sourced signal inventory',
  },
  {
    step: '02',
    title: 'Compression to a claim',
    detail:
      'Each signal is rewritten as a single claim a reader can agree or disagree with, with the evidence attached underneath it. A metric that moved is not a claim. What the movement means for the business is. Signals that survive this step but produce no claim are marked as context, not promoted into the spine.',
    output: 'Output: one claim per surviving signal',
  },
  {
    step: '03',
    title: 'Sequencing against decisions',
    detail:
      'Claims are ordered by the decision they unblock, not by the department that produced them or by how good the number looks. This is where risk stops being an appendix item: if a risk claim changes what leadership should approve this month, it moves ahead of the revenue claim that does not.',
    output: 'Output: an ordered agenda spine',
  },
  {
    step: '04',
    title: 'Ownership and review dates',
    detail:
      'Every action gets exactly one named owner and one date it will be reviewed on. Two owners means nobody owns it. An action with no review date is a wish. Items that cannot survive this test are returned to context rather than presented as commitments the room never actually made.',
    output: 'Output: an owned, dated action list',
  },
  {
    step: '05',
    title: 'Publish with the omissions listed',
    detail:
      'The briefing ships alongside an explicit list of what was cut and why. That list is what makes the next cycle honest: it is the record that separates a deliberate editorial decision from something that was quietly lost, and it is the first thing to re-read when a surprise lands two months later.',
    output: 'Output: the briefing and its cut list',
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

/*
 * Operator-safe claims only. Every row below is checkable from the public
 * repository or from this page's own network activity. Nothing here asserts a
 * result achieved for a client, and nothing claims certification.
 */
export const verificationRows: VerificationRow[] = [
  {
    claim: 'The example briefing on this page is illustrative, not client data.',
    basis:
      'The agenda modules, callouts, and slide cards are a worked example of the format. They are static strings in the repository, describe no real organisation, and are not derived from any engagement.',
  },
  {
    claim: 'This surface has no backend and stores nothing.',
    basis:
      'It is a statically built React bundle served as files. There is no database, no API, no form, and no input on the page. Nothing you do here is recorded anywhere.',
  },
  {
    claim: 'No third-party script, tracker, or cookie is loaded.',
    basis:
      'The page requests only its own HTML, CSS, JavaScript, and favicon from this origin. That is checkable in any browser network panel, and the content security policy shipped with the site blocks off-origin script and connect sources.',
  },
  {
    claim: 'Security response headers ship with the repository, not as a promise.',
    basis:
      'HSTS, a restrictive content security policy, nosniff, frame-ancestors none, a locked-down permissions policy, and the cross-origin isolation headers are defined in public/.htaccess and deploy with the site.',
  },
  {
    claim: 'The build is verified on every change, not just before a release.',
    basis:
      'Continuous integration runs the type check, the test suite, the production build, and the linter on each push. The same four commands run locally and are documented below.',
  },
]

export const faqItems: FaqItem[] = [
  {
    question: 'Is this a product you can buy, or a demonstration of a method?',
    answer:
      'It is a demonstration of a method, published as a working interface. The value on offer is the assembly discipline described above, applied to a real operating cadence. The page itself is the specimen: it shows what the output looks like and what the sequencing rules are, so the approach can be judged before anyone commits to it.',
  },
  {
    question: 'Why does risk sit in the main spine instead of an appendix?',
    answer:
      'Because appendix placement is a decision about attention, and attention is the scarce resource in a leadership meeting. A risk item that would change what gets approved this month belongs ahead of a revenue item that would not. Sequencing by decision impact rather than by department is the single change that does the most work here.',
  },
  {
    question: 'What makes a briefing fail the exit test on a given lane?',
    answer:
      'Each lane has one test. Intake fails if a signal has no recorded source. Compression fails if a claim cannot be disagreed with. Sequencing fails if an item cannot name the decision it unblocks. Ownership fails on two owners or a missing review date. Publish fails if the cut list is empty, because something is always cut.',
  },
  {
    question: 'Why publish a list of what was left out?',
    answer:
      'A cut list is the cheapest form of institutional memory. When something surprising surfaces two months later, the first useful question is whether it was seen and deprioritised or never seen at all. Without a record, those two very different failures look identical in hindsight and get the same wrong fix.',
  },
  {
    question: 'Does it integrate with the systems the signals come from?',
    answer:
      'Not in this surface. This is deliberately a static, read-only presentation layer with no backend and no data ingestion, which is why it can make a strong statement about storing nothing. Integration is an engagement concern and belongs in the systems of record, not in a public page.',
  },
  {
    question: 'Who is this for?',
    answer:
      'Operators who already have the data and still cannot get a decision out of the room: platform and engineering leaders preparing board or leadership updates, revenue and growth leads whose numbers are correct but not persuasive, and chiefs of staff who own the agenda without owning the underlying systems.',
  },
]

export const docsCards: DocsCard[] = [
  {
    kicker: 'Stack',
    title: 'Deliberately small',
    body: 'React 19 and TypeScript on a Vite build, rendered client-side. Two production dependencies, react and react-dom, and no runtime services. Styling is plain CSS with a single palette token block, no framework and no CSS-in-JS.',
  },
  {
    kicker: 'Verification',
    title: 'Four commands, all in CI',
    body: 'npm test runs the Vitest suite, npm run build runs the TypeScript project build then the production bundle, and npm run lint runs ESLint. The build script carries the type check, so the same three commands cover all four checks and every one of them runs on push.',
  },
  {
    kicker: 'Deploy',
    title: 'Static files behind a strict policy',
    body: 'The build output is a directory of static assets synced to the host, with the response headers in public/.htaccess applied at the edge. There is no server process to patch and no runtime configuration to drift.',
  },
]
