import { numberMutator } from "./numberMutator"

export class fizzBuzz {
  constructor(
    private parser: numberMutator,
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
