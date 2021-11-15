import { ModifyRule } from "."


export class NumberMutator {
  constructor(private readonly rules: ModifyRule[] = []) {}

  parse(value: number): string {
    for (const rule of this.rules) {
      if (rule.matches(value)) {
        return rule.parse()
      }
    }

    return String(value)
    }
}

