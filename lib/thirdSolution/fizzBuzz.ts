import { buzzRule, fizzBuzzRule, fizzRule } from "."
import { calculateFizzBuzz } from "./calculateFizzBuzz"

export class fizzBuzz {
  private static calculate = new calculateFizzBuzz([
    new fizzBuzzRule(),
    new fizzRule(),
    new buzzRule()
    ])

  constructor(private iterations: number = 100) { }

  generate(): string[] {
    const result = []
    for (let i = 1; i <= this.iterations; i++) {
      result.push(fizzBuzz.calculate.generate(i))
    }
    return result
  }

}
