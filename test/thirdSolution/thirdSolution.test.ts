import { BuzzRule, NumberMutator, FizzBuzzRule, FizzRule } from '../../lib/thirdSolution'
import { FizzBuzz } from '../../lib/thirdSolution/fizzBuzz'

describe('Fizz Buzz classes with single responsability and second step should', () => {
  const fizzValue = 'Fizz'
  const buzzValue = 'Buzz'
  const fizzbuzzValue = 'FizzBuzz'
  const rules =  [
    new FizzBuzzRule(),
    new FizzRule(),
    new BuzzRule()
    ]
  const calculate = new NumberMutator(rules)

  describe('bucle with 100 iterations should', () => {
    const iterations = 100
    const results = new FizzBuzz(calculate).generate()

    it('return 100 values', () => {
      expect(results).toHaveLength(iterations)
    })

    it('return values with Fizz string 45 times', () => {
      const expectedNumber = 45

      const fizz = results.filter(result => result.indexOf(fizzValue) >= 0)

      expect(fizz).toHaveLength(expectedNumber)
    })

    it('return values with Buzz string 23 times', () => {
      const expectedNumber = 23

      const buzz = results.filter(result => result.indexOf(buzzValue) >= 0)

      expect(buzz).toHaveLength(expectedNumber)
    })

    it('return values with FizzBuzz string 6 times', () => {
      const expectedNumber = Math.floor(iterations / 15)

      const buzz = results.filter(result => result.indexOf(fizzbuzzValue) >= 0)

      expect(buzz).toHaveLength(expectedNumber)
    })
  })
})

