import { CalculateRule } from "."


export class calculateFizzBuzz {
  constructor(private readonly rules: CalculateRule[] = []) {}

  parse(value: number): string {
    for (const rule of this.rules) {
      if (rule.matches(value)) {
        return rule.parse()
      }
    }

    return String(value)
    }
}
