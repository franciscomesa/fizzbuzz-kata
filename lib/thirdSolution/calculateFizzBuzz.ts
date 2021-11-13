import { CalculateRule } from "."


export class calculateFizzBuzz {
  private rules: CalculateRule[] = []

  constructor(private readonly valueNumber: number) {  }

  addRule(rule: CalculateRule): void {
    this.rules.push(rule)
  }
  get value(): string {
    for (const rule of this.rules) {
      if (rule.matches(this.valueNumber)) {
        return rule.parse()
      }
    }

    return String(this.valueNumber)
    }
}

