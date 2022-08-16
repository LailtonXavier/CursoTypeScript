// Tupla = array com tamanho fixo e o nome
const dadosCliente1: readonly [number, string] = [1, 'Lau'];

// pratic
// const box: readonly [number, string] = [10, 'test'];

// sempre que uso interrogação fica o tipo q estou mandando ou undefined
const dadosCliente2: [number, string, string?] = [1, 'Lau', 'Xavier'];

// pratic
// const box2: [muber, string, string?] = [20, 'Mano'];

// posso utlizar o rest operation para dizer que posso utilizar o resto de strings
const dadosCliente3: [number, string, ...string[]] = [1, 'Lau', 'Xavier'];

// pratic
// const box3: [number, string, ...number[]] = [5, 'numberss', 56, 7];

// posso mudar o valor, mais n o tipo
// estou editando

// o TS nem percebeu mais é um erro que temos que tratar
// dadosCliente1.pop();
// corrigir: readOnly apenas para leitura

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

// criar um array imultavel
const array: [readonly string[], number] = [['a', 'bb'], 22];

// com generic
const arrayGen: ReadonlyArray<string> = ['a', 's'];

console.log(array);
console.log(arrayGen);
