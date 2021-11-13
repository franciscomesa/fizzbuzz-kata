import { fizzBuzz } from '../lib/firstSolution/fizzBuzzFunction'
import { expectNumber } from './expectNumber'

describe('Fizz buzz algorithm should', () => {
  const fizzValue = 'Fizz'

  it('1 value return 1', () => {
    const value = 1

    const fizzBuzzValue = fizzBuzz(value)

    expectNumber(value).toBe(fizzBuzzValue)
  })

  it('2 value return 2', () => {
    const value = 2

    const fizzBuzzValue = fizzBuzz(value)

    expectNumber(value).toBe(fizzBuzzValue)
  })

  it('3 value return Fizz', () => {
    const value = 3

    const fizzBuzzValue = fizzBuzz(value)

    expect(fizzBuzzValue).not.toBe(value)
    expectNumber(fizzValue).toBe(fizzBuzzValue)
  })

})
