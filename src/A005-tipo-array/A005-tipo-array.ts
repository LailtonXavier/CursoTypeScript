// podemos criar usando dusa formas:
// Array<T> ou T[]

// podemos usar nosso proprio tipo
export function multiplicarArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

// pratic
// export function multiplicarArgs(...args: number[]): number {
//   return args.reduce((acc, values) => acc * values, 1);
// }

export function concatenaString(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor);
}

// pratic
// export function concatenaString(...args: string[]): string {
//   return args.reduce((acc, values) => acc + values);
// }

// podemos ter retorno que é um array
export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

// export function toUpperCase(...args: string[]): string[] {
//   return args.map((values) => values.toUpperCase());
// }

const result = multiplicarArgs(2, 3, 4);
const concat = concatenaString('a', 'b', 'd');
const toUpper = toUpperCase('a', 'b', 'd');

console.log(result);
console.log(concat);
console.log(toUpper);
