// Se ligue no `let`e no `const``

// veja q ele atribui o tipo number, ent podemos mandar qualquer number
// n posso mandar uma string, isso é mais seguro
let x = 10; // eslint-disable-line

// esse é um tipo literal, ou seja, ele só vai ser o valor 10
// são subtipo de number
const y = 10;

// podefazer com let, mas n é aconselhavel
let a: 100 = 100; // eslint-disable-line

// outra forma correta
let b = 100 as const; // eslint-disable-line

// Objetos e array são multaveis, então esse tratamento
// se encaixaria perfeitamente

const pessoa = {
  name: 'Lailton' as const, // agora so pode ter esse nome e n outro
  sobrenome: 'Xavier',
};

// pessoa.name = 'dsf'  // n pode

// outro exemplo

// minha func so pode receber string dessas cores especificas
function escolhaCor(cor: 'vermelhor' | 'azul' | 'verde'): string {
  return cor;
}
// esses são tipos literais, que n podemos colocar outro

// console.log(escolhaCor('as')); // veja o erro que mostra
console.log(escolhaCor('azul'));

// ja utilizamos a var `x`, corrigir:
// module mode
export default 1;
