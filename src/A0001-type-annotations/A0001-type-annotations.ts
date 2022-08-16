// Para seus proprios tipos sera com letra Maiuscula

// isso aqui n pode, pq ja esta sendo string
// se chama `trivial` fazer isso
// let nome: string = 'Lailton';

/* eslint-disable */
// let nome = 'Lailton';  // ele ja reconhe o tipo

/* eslint-disable */
// Tipos basicos (aqui ocorre inferencia de tipos)
let nome: string = `Lailton`; // Qualquer tipo de strings: '', "" ``
let idade: number = 30; // 10, 1.75, -5.55, ss0xf00d
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-simbolo'); //symbol
// let big: bigint = 10n; // bigint,  n sei oq é


// tipos passado por referencia: array, objetos
// Arrays -- utilizando uma generic -- duas formas de criar

let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ['1', '2', '3'];
// outra forma (melhor)
let arrayDeNumeros2: number[] = [1, 2, 3];

// Objetos
// ? -- interrogação seria opcional
let pessoa: {nome: string, idade: number, adulto?: boolean } = {
  idade: 213,
  nome: 'Lau',
  adulto: true
}

// Funções
// se a func n retornara nada === void (vazio)
function some(x: number, y: number): number {
  return x + y;
}
// seria a msm coisa
const soma2: (x: number, y: number) => number = (x, y) => x + y;

