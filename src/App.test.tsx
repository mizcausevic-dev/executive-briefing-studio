import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

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
})
