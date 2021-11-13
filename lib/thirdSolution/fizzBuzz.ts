import { buzzRule, fizzBuzzRule, fizzRule } from "."
import { calculateFizzBuzz } from "./calculateFizzBuzz"

export class fizzBuzz {
  private static fizz = new fizzRule()
  private static buzz = new buzzRule()
  private static fizzBuzz = new fizzBuzzRule()

  constructor(private iterations: number = 100) { }

  generate(): string[] {
    const result = []
    for (let i = 1; i <= this.iterations; i++) {
      const calculate = new calculateFizzBuzz(i)
      calculate.addRule(fizzBuzz.fizzBuzz)
      calculate.addRule(fizzBuzz.fizz)
      calculate.addRule(fizzBuzz.buzz)
      result.push(calculate.value)
    }
    return result
  }

}
