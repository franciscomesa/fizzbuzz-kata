import {injectable} from "tsyringe"
import { Rule } from "."

@injectable()
export class ApplyRule {
  constructor(private readonly rules: Rule[] = []) {}

  parse(value: number): string {
    for (const rule of this.rules) {
      if (rule.matches(value)) {
        return rule.parse()
      }
    }

    return String(value)
    }
}

