// Types e Interfaces n mudan nd

// type
// type DirigirCarro = {
//   dirigirCarro: () => string;
// };

// Interfaces, n muda quase nada
type DirigirCarro = {
  // dirigirCarro: () => string;
  dirigirCarro(): string; // mais simples
};

interface PecasCarro {
  cor: string;
  pneu: number;
  portas: string;
}

// type tem uma vantagem
// Uniao, ou intersection
// type TyposCarros = PecasCarro & DirigirCarro;

// fazendo a msm coisa de cima
// configo extends interfaces
interface TodosOsTipos extends DirigirCarro, PecasCarro {}

// export class Carro implements PecasCarro, DirigirCarro {  // com type
// export class Carro implements TyposCarros {    // com interface
export class Carro implements TodosOsTipos {
  // com interface extendendo
  constructor(public cor: string, public pneu: number, public portas: string) {}

  dirigirCarro(): string {
    return `O caroo de cor ${this.cor} eu vou dirigir`;
  }
}

// interface para Objetos
const pessoaObjeto: TodosOsTipos = {
  cor: 'brancl',
  pneu: 4,
  portas: 'abertas',

  dirigirCarro(): string {
    return this.cor;
  },
};

const carro = new Carro('vermelho', 4, '2 portas');

console.log(carro.dirigirCarro());
console.log(pessoaObjeto.dirigirCarro());
