import { autoInjectable, inject } from "tsyringe"
import { ApplyRule } from "./applyRule"

@autoInjectable()
export class FizzBuzz {
  constructor(
    @inject('applyRule') private numberMutator: ApplyRule
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
