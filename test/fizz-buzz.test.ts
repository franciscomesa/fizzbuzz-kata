import { fizzBuzz } from '../lib/firstSolution/fizzBuzz'

describe('Fizz buzz algorithm should', () => {
  it('1 value return 1', () => {
    const value = 1

    const fizzBuzzValue = fizzBuzz(value)

    expect(fizzBuzzValue).toBe(value)
  })
})
