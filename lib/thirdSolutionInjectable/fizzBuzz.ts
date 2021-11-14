import { autoInjectable, inject } from "tsyringe"
import { numberMutator } from "./numberMutator"

@autoInjectable()
export class fizzBuzz {
  constructor(
    @inject('numberMutator') private numberMutator: numberMutator,
    private iterations: number = 100
    ) { }

  generate(): string[] {
    const result: string[] = []
    for (let i = 1; i <= this.iterations; i++) {
      const value = this.numberMutator.parse(i)
      result.push(value)
    }
    return result
  }

}
