import { buzzRule, fizzBuzzRule, fizzRule } from "."


export class calculateFizzBuzz {
  private static fizz = new fizzRule()
  private static buzz = new buzzRule()
  private static fizzBuzz = new fizzBuzzRule()

  constructor(private readonly valueNumber: number) {  }

  get value(): string {
    if (calculateFizzBuzz.fizzBuzz.matches(this.valueNumber))
      return calculateFizzBuzz.fizzBuzz.parse()
    if (calculateFizzBuzz.fizz.matches(this.valueNumber))
      return calculateFizzBuzz.fizz.parse()
    if (calculateFizzBuzz.buzz.matches(this.valueNumber))
      return calculateFizzBuzz.buzz.parse()

    return String(this.valueNumber)
  }
}

