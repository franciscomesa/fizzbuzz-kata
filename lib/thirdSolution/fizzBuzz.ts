import { calculateFizzBuzz } from "./calculateFizzBuzz"

export class fizzBuzz {

  constructor(private iterations: number = 100) { }

  generate(): string[] {
    const result = []
    for (let i = 1; i <= this.iterations; i++) {
      result.push(new calculateFizzBuzz(i).value)
    }
    return result
  }

}
