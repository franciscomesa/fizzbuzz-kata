import { fizzBuzz } from '../lib/firstSolution/fizzBuzzFunction'

describe('Fizz buzz algorithm should', () => {
  it('1 value return 1', () => {
    const value = 1

    const fizzBuzzValue = fizzBuzz(value)

    expect(fizzBuzzValue).toBe(value)
  })

  it('2 value return 2', () => {
    const value = 2

    const fizzBuzzValue = fizzBuzz(value)

    expect(fizzBuzzValue).toBe(value)
  })
})
