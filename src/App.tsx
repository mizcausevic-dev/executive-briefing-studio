import './styles.css'
import {
  agendaModules,
  assemblyLanes,
  calloutCards,
  capabilitySpecs,
  docsCards,
  faqItems,
  slideCards,
  summaryTiles,
  verificationRows,
} from './data'

function App() {
  return (
    <main className="briefing-shell">
      <section className="hero-layout" aria-labelledby="hero-title">
        <div className="hero-story">
          <p className="eyebrow">Executive Briefing Studio</p>
          <h1 id="hero-title">
            Turn fragmented operating signals into a briefing leadership can actually act on.
          </h1>
          <p className="hero-copy">
            This studio is designed as a strategy room for assembling premium executive updates:
            what changed, why it matters, what to do next, and how to sequence action across
            revenue, growth, risk, AI, and operations.
          </p>
          <p className="hero-copy">
            The hard part of a leadership update is almost never gathering the data. It is deciding
            what earns the room&apos;s attention, in what order, and who owns the next move. This
            surface publishes that method in full, then shows a worked example of the output.
          </p>
          <ul className="hero-meta">
            <li>Kinetic Gain LLC &middot; Boston</li>
            <li>Static surface &middot; no data collected</li>
            <li>React 19 &middot; TypeScript &middot; Vite</li>
          </ul>
        </div>

        <div className="summary-grid">
          {summaryTiles.map((tile) => (
            <article className="summary-tile" key={tile.title}>
              <p className="tile-kicker">{tile.title}</p>
              <p className="tile-value">{tile.value}</p>
              <p className="tile-note">{tile.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-panel" aria-labelledby="overview-title">
        <div className="section-head">
          <p className="eyebrow">Overview</p>
          <h2 id="overview-title">What this surface is, and what it refuses to be.</h2>
        </div>

        <p className="prose">
          Executive Briefing Studio is a presentation layer for a specific, repeatable job:
          converting a period of operating signal into a briefing that produces decisions. It sits
          downstream of the systems that already hold the numbers, and upstream of the meeting where
          somebody has to approve, defund, escalate, or wait.
        </p>
        <p className="prose">
          Most leadership updates fail in translation rather than in data collection. The metrics are
          correct, the slides are accurate, and the room still leaves without a decision, because
          nothing in the deck states which decision it was supposed to unblock.{' '}
          <strong>
            The method below fixes that by refusing to let any exhibit into the spine until it names
            the decision it supports.
          </strong>
        </p>

        <div className="spec-grid">
          {capabilitySpecs.map((spec) => (
            <article
              className={`spec-card${spec.exclusion ? ' spec-card--exclusion' : ''}`}
              key={spec.kicker}
            >
              <p className="tile-kicker">{spec.kicker}</p>
              <h3>{spec.title}</h3>
              <ul className="spec-list">
                {spec.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-panel" aria-labelledby="agenda-title">
        <div className="section-head">
          <p className="eyebrow">Agenda Spine</p>
          <h2 id="agenda-title">Three briefing modules built to guide the room, not drown it in charts.</h2>
        </div>

        <p className="prose">
          The three modules below are a worked example of the format, not a report on any real
          organisation. They show the shape a module takes once it has passed the compression and
          sequencing tests: a claim in the heading, the evidence beneath it, and a single directive
          about how to present it.
        </p>

        <div className="agenda-grid">
          {agendaModules.map((module) => (
            <article className="agenda-card" key={module.section}>
              <div className="agenda-badge">{module.section}</div>
              <h3>{module.title}</h3>
              <p className="agenda-summary">{module.summary}</p>
              <p className="agenda-action">{module.action}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="callout-section" aria-labelledby="callout-title">
        <div className="section-head">
          <p className="eyebrow">Executive Callouts</p>
          <h2 id="callout-title">The three blocks every module has to fill.</h2>
        </div>

        <div className="callout-layout">
          {calloutCards.map((card) => (
            <article className={`callout-card tone-${card.tone}`} key={card.heading}>
              <p className="tile-kicker">{card.heading}</p>
              <p className="callout-body">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-panel" aria-labelledby="method-title">
        <div className="section-head">
          <p className="eyebrow">Assembly Method</p>
          <h2 id="method-title">Five lanes, each with one output and one exit test.</h2>
        </div>

        <p className="prose">
          A briefing is assembled in a fixed order. The order matters more than any individual step,
          because each lane exists to stop a specific failure the previous lane cannot catch. Skipping
          a lane does not save time, it moves the argument later into the process, usually into the
          meeting itself.
        </p>

        <ol className="lane-list">
          {assemblyLanes.map((lane) => (
            <li className="lane-step" key={lane.step}>
              <span className="lane-num" aria-hidden="true">
                {lane.step}
              </span>
              <div>
                <h3>{lane.title}</h3>
                <p>{lane.detail}</p>
                <span className="lane-out">{lane.output}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="deck-panel" aria-labelledby="deck-title">
        <div className="section-head deck-head">
          <div>
            <p className="eyebrow">Presentation Surface</p>
            <h2 id="deck-title">A briefing interface that feels editorial, deliberate, and board-ready.</h2>
          </div>
          <div className="deck-accent" />
        </div>

        <div className="slide-ribbon">
          {slideCards.map((card) => (
            <article className="slide-card" key={card.label}>
              <p className="tile-kicker">{card.label}</p>
              <h3>{card.headline}</h3>
              <p className="slide-detail">{card.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-panel" aria-labelledby="verification-title">
        <div className="section-head">
          <p className="eyebrow">Verification</p>
          <h2 id="verification-title">Claims on this page, and how to check each one.</h2>
        </div>

        <p className="prose">
          A page that talks about evidence discipline should be checkable itself. Each claim below can
          be confirmed from the public repository or from this page&apos;s own network activity. None
          of them describes work performed for a client, and none of them is a certification or an
          attestation of any kind.
        </p>

        <dl className="verify-list">
          {verificationRows.map((row) => (
            <div className="verify-row" key={row.claim}>
              <dt>{row.claim}</dt>
              <dd>{row.basis}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="editorial-panel" aria-labelledby="faq-title">
        <div className="section-head">
          <p className="eyebrow">Questions</p>
          <h2 id="faq-title">What people ask before they adopt the format.</h2>
        </div>

        <div className="faq-list">
          {faqItems.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-panel" aria-labelledby="docs-title">
        <div className="section-head">
          <p className="eyebrow">Build &amp; Deploy</p>
          <h2 id="docs-title">How this surface is built, checked, and shipped.</h2>
        </div>

        <div className="docs-grid">
          {docsCards.map((card) => (
            <article className="docs-card" key={card.kicker}>
              <p className="tile-kicker">{card.kicker}</p>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="briefing-footer">
        <ul className="footer-links">
          <li>
            <a href="https://kineticgain.com/">Kinetic Gain</a>
          </li>
          <li>
            <a href="https://kineticgain.com/trust/">Trust</a>
          </li>
          <li>
            <a href="https://github.com/mizcausevic-dev/executive-briefing-studio">Source</a>
          </li>
        </ul>
        <p className="footer-note">
          Executive Briefing Studio is part of the <a href="https://kineticgain.com/">Kinetic Gain</a>{' '}
          platform portfolio, built and maintained by Kinetic Gain LLC in Boston. This surface
          collects no data and sets no cookies.
        </p>
      </footer>
    </main>
  )
}

export default App
