import { ModifyRule } from "."


export class NumberMutator {
  constructor(private readonly rules: ModifyRule[] = []) {}

  parse(value: number): string {
    const rule = this.rules.find(rule => rule.matches(value))
    if (rule)
      return rule.parse()

    return String(value)
  }
}

