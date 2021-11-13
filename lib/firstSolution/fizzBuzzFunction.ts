export function fizzBuzz(value: number): string {
  const fizz = 'Fizz'
  const buzz = 'Buzz'

  if (value % 3 === 0) {
    return fizz
  }
  if (value % 5 === 0) {
    return buzz
  }

  return String(value)
}
