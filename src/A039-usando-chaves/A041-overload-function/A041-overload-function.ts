// uma func q faça soma

// ela pode receber x e y em outro ocasião varios numeros
// type Adder = (x: number, y: number) => number;

// varias assinaturas
type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

// posso faser
// se receber x retorn uma string ....
// type Adder = {
//   (x: number): string;
//   (x: number, y: number): number;
//   (...args: number[]): number;
// };

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  // algum params chegou aqui
  // comecar com 0, (s) soma mais (v) valor atual
  // preciso considerar x e y
  if (args.length > 0) return args.reduce((v, s) => v + s, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1 + 2));
console.log(adder(1 + 2 + 4 + 4));
