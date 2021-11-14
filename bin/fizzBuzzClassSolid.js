const { fizzBuzz } = require('../build/thirdSolution/fizzBuzz')
const { fizzBuzzRule, fizzRule, buzzRule } =  require('../build/thirdSolution/calculateRule')
const { calculateFizzBuzz } =  require('../build/thirdSolution/calculateFizzBuzz')

const rules =  [
  new fizzBuzzRule(),
  new fizzRule(),
  new buzzRule()
  ]
const calculate = new calculateFizzBuzz(rules)
const fizzBuzzGame = new fizzBuzz(calculate)

console.log(fizzBuzzGame.generate())
