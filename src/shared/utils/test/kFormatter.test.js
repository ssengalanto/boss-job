import kFormatter from '../kFormatter'

describe('kFormatter', () => {
  it('should return a k-formatted result when num >= 1000', () => {
    const num = 1000
    const result = kFormatter(num)
    expect(result).toBe('1k')
  })

  it('should only return a k-formatted result with only one decimal number', () => {
    const num = 55555
    const result = kFormatter(num)
    expect(result).toBe('55.6k')
  })

  it('should not return a k-formatted result when num < 1000', () => {
    const num = 999
    const result = kFormatter(num)
    expect(result).toBe(num)
  })
})
