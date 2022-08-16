export class Pessoa {
  // metodo estaticos
  static idadePadrao = 0;
  static cpfPadrao = '0.00.000.0.00.00-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  // acessa atributos estaticos = n posso utilizar palavra this.
  // acessar pela instacia
  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  // metodo static
  // static falaOI(): void {
  //   console.log('Estou falando OI');
  // }

  // Factory Method (Padrões de projeto)
  // imagine um metodo com nome e sobrenome, sem os demais
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
    // return new Pessoa(nome, sobrenome, 0, '000.000.000-00');
  }
}

const pessoa1 = new Pessoa('Lailton', 'Xavier', 22, '123.321.456-80');
const pessoa2 = Pessoa.criaPessoa('Lailton', 'Xavier');

pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);

// metodo static
// Pessoa.falaOI();

console.log(pessoa2);
console.log(pessoa1);
