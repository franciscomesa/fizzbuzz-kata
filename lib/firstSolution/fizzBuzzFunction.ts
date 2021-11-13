export function calculateFizzBuzz(value: number): string {
  const fizz = 'Fizz'
  const buzz = 'Buzz'
  const fizzBuzz = fizz + buzz

  if (value % 3 === 0 && value % 5 === 0) {
    console.log('what!', fizzBuzz)
    return fizzBuzz
  }
  if (value % 3 === 0) {
    return fizz
  }
  if (value % 5 === 0) {
    return buzz
  }

  return String(value)
}
