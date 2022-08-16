// primeiro modo

// n utilizamos dessa forma, pq n fica opcional e sim meio q literal
// isso pq esta usando union
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

// um obj que pode ter as 3 chaves (uma ou outro ou os tres)
// type Pessoa = TemNome | TemSobrenome | TemIdade;

// vamos utilizar intersection  =  ele esta como e
type Pessoa = TemNome & TemSobrenome & TemIdade; // and

// veja q n fica opciona
const pessoa: Pessoa = {
  idade: 89,
  nome: 'Lailton',
  sobrenome: 'Xavier',
  // n coloco Idade e ele n reclama com union
};

console.log(pessoa);

// segundo modo

type AB = 'A' | 'B'; // dentro do circulo tenho A e B
type AC = 'A' | 'C'; // mesma coisa
// qual interseção entre os dois circulos? seri o A
type intersecao = AB & AC;

// module mode
export { pessoa };
