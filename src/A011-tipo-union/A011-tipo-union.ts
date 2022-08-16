// quando eu tenho mais de um tipo de retorno, eu posso fala isso
// posso utilizar o sinal de piper `|`

// string | number | boolean

// function add(a: number, b: number): number {
//   return a + b;
// }

function addOrConcat(
  a: number | string | boolean,
  b: number | string | boolean,
): number | string {
  // o ts n entende, preciso provar q sei oq estou fazendo
  // posso utilizar o sina de + com string e numeros

  // com a checagem ele ja aceita
  if (typeof a === 'number' && typeof b === 'number') return a + b;

  // com string
  // if (typeof a === 'string' && typeof b === 'string') return a + b;

  // se a ou b for string a gente pode templete literal (concat)
  return `${a} ${b}`;
}

console.log(addOrConcat(20, 20));
console.log(addOrConcat(20, '20'));
console.log(addOrConcat(false, true)); // aceitou pq ja estamos tratando: n number
