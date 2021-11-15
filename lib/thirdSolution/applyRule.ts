import { Rule } from "."


export class ApplyRule {
  constructor(private readonly rules: Rule[] = []) {}

  parse(value: number): string {
    const rule = this.rules.find(rule => rule.matches(value))
    if (rule)
      return rule.parse()

    return String(value)
  }
}

