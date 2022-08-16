export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string, // esse ` - ` undelani é por causa do set e get
  ) {
    this.cpf = _cpf; // podemos chamar aqui tbm
  }

  // Essa é maneira antiga
  // setCpf(valor: string): void {
  //   this.cpf = valor;
  // }

  // getCpf(): string {
  //   // substituir tudo q n for numero
  //   return this.cpf.replace(/\D/g, '');
  // }

  // Forma atual
  set cpf(valor: string) {
    this._cpf = valor;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Lailton', 'Xavier', 22, '123.312.654-50');

// atual
pessoa.cpf = '129.94.614.45-90';
console.log(pessoa.cpf);

// antiga
// pessoa.setCpf('129.94.614.45-90');
// console.log(pessoa.getCpf());
