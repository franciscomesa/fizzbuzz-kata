import { calculateFizzBuzz } from '../lib/firstSolution/fizzBuzzFunction'
import { expectNumber } from './expectNumber'

describe('Fizz buzz algorithm should', () => {
  const fizzValue = 'Fizz'
  const buzzValue = 'Buzz'
  const fizzbuzzValue = 'FizzBuzz'

  it('1 value return 1', () => {
    const value = 1

    const fizzBuzzValue = calculateFizzBuzz(value)

    expectNumber(value).toBe(fizzBuzzValue)
  })

  it('2 value return 2', () => {
    const value = 2

    const fizzBuzzValue = calculateFizzBuzz(value)

    expectNumber(value).toBe(fizzBuzzValue)
  })

  it('3 value return Fizz', () => {
    const value = 3

    const fizzBuzzValue = calculateFizzBuzz(value)

    expect(fizzBuzzValue).not.toBe(value)
    expectNumber(fizzValue).toBe(fizzBuzzValue)
  })

  it('4 value return 4', () => {
    const value = 3

    const fizzBuzzValue = calculateFizzBuzz(value)

    expect(fizzBuzzValue).not.toBe(value)
    expectNumber(fizzValue).toBe(fizzBuzzValue)
  })

  it('5 value return Buzz', () => {
    const value = 5

    const fizzBuzzValue = calculateFizzBuzz(value)

    expect(fizzBuzzValue).not.toBe(value)
    expectNumber(buzzValue).toBe(fizzBuzzValue)
  })

  it('6 value return Fizz', () => {
    const value = 6

    const fizzBuzzValue = calculateFizzBuzz(value)

    expect(fizzBuzzValue).not.toBe(value)
    expectNumber(fizzValue).toBe(fizzBuzzValue)
  })

  it('10 value return Buzz', () => {
    const value = 10

    const fizzBuzzValue = calculateFizzBuzz(value)

    expect(fizzBuzzValue).not.toBe(value)
    expectNumber(buzzValue).toBe(fizzBuzzValue)
  })

  it('15 value return FizzBuzz', () => {
    const value = 15

    const result = calculateFizzBuzz(value)

    expect(result).not.toBe(value)
    expectNumber(result).toBe(fizzbuzzValue)
  })

})
