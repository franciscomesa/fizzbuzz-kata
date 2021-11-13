export class fizzBuzz {

  generate(values: number): string[] {
    const result = []
    for (let i = 1; i <= values; i++) {
      result.push(fizzBuzz.calculateFizzBuzz(i))
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
