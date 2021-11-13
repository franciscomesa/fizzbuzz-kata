// TODO: Set return type
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const expectNumber = (received: number | string) => ({
  toBe: (expected: number | string): void => expect(String(received)).toBe(String(expected))
})
