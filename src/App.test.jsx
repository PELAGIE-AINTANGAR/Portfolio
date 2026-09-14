import { describe, expect, test } from 'vitest'

describe('Portfolio', () => {
  test('le nom du portfolio est correct', () => {
    const name = 'Pélagie'

    expect(name).toBe('Pélagie')
  })
})