export class FizzBuzz {

  constructor(private iterations: number = 100) { }

  generate(): string[] {
    const result = []
    for (let i = 1; i <= this.iterations; i++) {
      result.push(FizzBuzz.calculateFizzBuzz(i))
    }
    return result
  }

  private static calculateFizzBuzz(value: number): string {
    const fizz = 'Fizz'
    const buzz = 'Buzz'
    const fizzBuzz = fizz + buzz

    const stringValue = String(value)

    if (value % 3 === 0 && value % 5 === 0) {
      return fizzBuzz
    }
    if (value % 3 === 0 || stringValue.indexOf('3') >= 0) {
      return fizz
    }
    if (value % 5 === 0 || stringValue.indexOf('5') >= 0) {
      // There are values with 5 digit that return fizz, pe: 51, 54
      return buzz
    }

    return String(value)
  }
}
