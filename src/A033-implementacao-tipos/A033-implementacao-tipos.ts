// contrato  =  utilizando abstract
// export abstract class TipoPessoa {
//   protected abstract nome: string;
//   protected abstract sobrenome: string;
//   protected abstract nomeCompleto(): string;
// }

// contrato  =  utilizando Type Alias
// vai ter as palavras ( protected e abstract ) dentro
//  -- pq esse TipoPessoa vai ser uma interface para outras conhecer
//  -- O proposito é vc expor o que a classe tem
type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
  // nomeCompleto: () => string;  // pode ser assim
};

type OutroTipo = {
  outroTipo: () => void;
};
// Um tipo pode extender pq ele so existe aqui
// qnd utilizar um Tipo ao inves de `extends` vai ser `implements`

// essa classe esta cumprindo o contrato
export class Pessoa implements TipoPessoa, OutroTipo {
  constructor(public nome: string, public sobrenome: string) {
    // super(); // é apenas declarado para classes
    // n vai utilizar super pq n tem herança, n esta extendendo de outra classe
  }

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  outroTipo(): void {
    console.log('podemos ter varism `implements` ');
  }
}

const p1 = new Pessoa('Lailton', 'Xavier');

console.log(p1.nomeCompleto());
