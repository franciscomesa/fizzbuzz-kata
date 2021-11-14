import { calculateFizzBuzz } from "./calculateFizzBuzz"

export class fizzBuzz {
  constructor(
    private parser: calculateFizzBuzz,
    private iterations: number = 100
    ) { }

  generate(): string[] {
    const result: string[] = []
    for (let i = 1; i <= this.iterations; i++) {
      const value = this.parser.parse(i)
      result.push(value)
    }
    return result
  }

}
