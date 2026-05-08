import './styles.css'
import { agendaModules, calloutCards, slideCards, summaryTiles } from './data'

function App() {
  return (
    <main className="briefing-shell">
      <section className="hero-layout">
        <div className="hero-story">
          <p className="eyebrow">Executive Briefing Studio</p>
          <h1>Turn fragmented operating signals into a briefing leadership can actually act on.</h1>
          <p className="hero-copy">
            This studio is designed as a strategy room for assembling premium executive updates:
            what changed, why it matters, what to do next, and how to sequence action across
            revenue, growth, risk, AI, and operations.
          </p>
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

      <section className="editorial-panel">
        <div className="section-head">
          <p className="eyebrow">Agenda Spine</p>
          <h2>Three briefing modules built to guide the room, not drown it in charts.</h2>
        </div>

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

      <section className="callout-layout">
        {calloutCards.map((card) => (
          <article className={`callout-card tone-${card.tone}`} key={card.heading}>
            <p className="tile-kicker">{card.heading}</p>
            <p className="callout-body">{card.body}</p>
          </article>
        ))}
      </section>

      <section className="deck-panel">
        <div className="section-head deck-head">
          <div>
            <p className="eyebrow">Presentation Surface</p>
            <h2>A briefing interface that feels editorial, deliberate, and board-ready.</h2>
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
    </main>
  )
}

export default App
