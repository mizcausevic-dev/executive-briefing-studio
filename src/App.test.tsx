import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'
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

describe('Executive Briefing Studio', () => {
  it('renders the editorial hero and agenda', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /turn fragmented operating signals into a briefing/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /three briefing modules built to guide the room/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getAllByText(/what changed/i).length).toBeGreaterThan(0)
  })

  // The previous suite asserted three headings and nothing else, so an entire
  // section could be deleted from App.tsx or emptied out of data.ts and the
  // tests would still pass. These cases bind the rendered structure to the
  // content model so a silent content regression fails the build.
  it('renders every top-level section', () => {
    render(<App />)

    const sectionTitles = [
      /what this surface is, and what it refuses to be/i,
      /three briefing modules built to guide the room/i,
      /the three blocks every module has to fill/i,
      /five lanes, each with one output and one exit test/i,
      /a briefing interface that feels editorial/i,
      /claims on this page, and how to check each one/i,
      /what people ask before they adopt the format/i,
      /how this surface is built, checked, and shipped/i,
    ]

    for (const name of sectionTitles) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(sectionTitles.length)
  })

  it('renders one card per record in the content model', () => {
    const { container } = render(<App />)

    const counts: Array<[string, number]> = [
      ['.summary-tile', summaryTiles.length],
      ['.spec-card', capabilitySpecs.length],
      ['.agenda-card', agendaModules.length],
      ['.callout-card', calloutCards.length],
      ['.lane-step', assemblyLanes.length],
      ['.slide-card', slideCards.length],
      ['.verify-row', verificationRows.length],
      ['.faq-item', faqItems.length],
      ['.docs-card', docsCards.length],
    ]

    for (const [selector, expected] of counts) {
      expect(container.querySelectorAll(selector), selector).toHaveLength(expected)
      expect(expected, `${selector} source array`).toBeGreaterThan(0)
    }
  })

  it('keeps the apex interlink in the footer', () => {
    render(<App />)

    const apexLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href') === 'https://kineticgain.com/')

    expect(apexLinks.length).toBeGreaterThan(0)
  })

  it('states plainly that the example briefing is not client data', () => {
    render(<App />)

    expect(screen.getByText(/illustrative, not client data/i)).toBeInTheDocument()
  })
})
