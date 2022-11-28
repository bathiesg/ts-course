/*
Vamos a crear una function que retorna un tipo unknown
la sobrecargamos segun el tipo que recibe y el que devuelve

*/

export function overload(input: string[]): string
export function overload(input: string): string[]
export function overload(input: boolean): string
export function overload(input: number): number

export function overload(input: unknown): unknown {
  if(Array.isArray(input)){
    return input.join('')
  } else if(typeof input === 'string') {
    return input.split('')
  } else if(typeof input === 'boolean') {
    return 'Is Boolean: ' + input
  } else if(typeof input === 'number') {
    return input * 10
  }
}

console.log(overload("Samba"))
console.log(overload(["S","a","m","b","a"]))
console.log(overload(true))
console.log(overload(5.5))
