// uma func com o tratamento
export function add(a: unknown, b: unknown): number | string {
  // dessa forma
  // if (typeof a === 'number' && typeof b === 'number') return a + b;
  // return `${a} ${b}`;

  // mais curta
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a} ${b}`;
}

console.log(add(4, 6));
console.log(add('4', '6'));

// podemos ter algo mais complicado

// colocando um tipo
type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  // eu vou verificar se existe (nome) em obj, usando (in)
  // if ('nome' in obj) console.log(obj.nome);
  //
  // outra forma de checar
  // se for uma instancia de ALuno
  // if (obj instanceof Aluno) console.log(obj.nome);
  //
  // checando se tiver tipo
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('Isso é um animal', obj.cor);
      return;
  }
}

mostraNome(new Aluno('Joao'));
mostraNome({ tipo: 'animal', cor: 'azul' });
