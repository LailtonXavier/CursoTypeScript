// o ideial é que essa classe fosse abstrada ou interface
export class Pessoa {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getLastname(): string {
    return this.name + ' ' + this.lastname;
  }
}
// extendendo a classe, tudo
export class Aluno extends Pessoa {
  // polimorfismo  =  podemos reescrever e mudar
  getLastname(): string {
    return 'Isso vem de aluno ' + this.name + ' ' + this.lastname;
  }
}

export class Cliente extends Pessoa {
  getLastname(): string {
    return 'Isso vem de cliente ' + this.name + ' ' + this.lastname;
  }
}

const aluno = new Aluno('Lailton', 'Xavier', 22, '123.321.456-80');
const cliente = new Cliente('Jose', 'Silva', 24, '123.321.456-80');

console.log(aluno.getLastname());
console.log(aluno);
console.log(cliente);
