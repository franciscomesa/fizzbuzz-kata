import {injectable} from "tsyringe"
import { ModifyRule } from "."

@injectable()
export class numberMutator {
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

