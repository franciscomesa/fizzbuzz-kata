import { autoInjectable, inject } from "tsyringe"
import { NumberMutator } from "./numberMutator"

@autoInjectable()
export class FizzBuzz {
  constructor(
    @inject('numberMutator') private numberMutator: NumberMutator
    ) { }

  generate(iterations = 100): string[] {
    const result: string[] = []
    for (let i = 1; i <= iterations; i++) {
      const value = this.numberMutator.parse(i)
      result.push(value)
    }
    return result
  }

}
