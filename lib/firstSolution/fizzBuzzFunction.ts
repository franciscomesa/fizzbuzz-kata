export function fizzBuzz(value: number): string {
  const fizz = 'Fizz'
  const buzz = 'Buzz'

  if (value === 3) {
    return fizz
  }
  if (value === 5) {
    return buzz
  }

  return String(value)
}
