export class calculateFizzBuzz {
  private static fizz = 'Fizz'
  private static buzz = 'Buzz'
  private static fizzBuzz = calculateFizzBuzz.fizz + calculateFizzBuzz.buzz

  constructor(private readonly valueNumber: number) {  }

  get value(): string {
    const stringValue = String(this.valueNumber)

    if (this.valueNumber % 3 === 0 && this.valueNumber % 5 === 0) {
      return calculateFizzBuzz.fizzBuzz
    }
    if (this.valueNumber % 3 === 0 || stringValue.indexOf('3') >= 0) {
      return calculateFizzBuzz.fizz
    }
    if (this.valueNumber % 5 === 0 || stringValue.indexOf('5') >= 0) {
      // There are values with 5 digit that return fizz, pe: 51, 54
      return calculateFizzBuzz.buzz
    }

    return String(this.valueNumber)
  }
}
