export class Pessoa {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getCpf(): string {
    return this.cpf;
  }

  getAge(): number {
    return this.age;
  }

  getLastname(): string {
    return this.name + ' ' + this.lastname;
  }
}

export class Aluno extends Pessoa {
  // quero retornar o resultado da classe principal
  getLastname(): string {
    // super para ater acesso a suber classe
    // usando super para pegar o comportamento pai e podendo mudar tbm
    console.log('FAZENDO ALGO ANTES');
    const result = super.getLastname();
    return result + ' Mudando';
  }
}

export class Cliente extends Pessoa {
  // ciar aqui para dar certo
  sala: string;

  // dessa forma estamos lincando cada atributo do pai
  // so podemos adicionar algo novo se fizer isso
  constructor(
    name: string,
    lastname: string,
    age: number,
    cpf: string,
    // tirar public e coloca this.sala = sala e cria acima
    // com public so coloca this.sala  =  seria de forma curta
    sala: string,
  ) {
    // pegando valor do pai
    super(name, lastname, age, cpf);
    this.sala = sala;
  }
}

const pessoa = new Pessoa('Nando', 'Xavier', 22, '123.321.456-50');
const aluno = new Aluno('Lailton', 'Xavier', 22, '123.321.456-50');
const cliente = new Cliente('Jose', 'Silva', 24, '122.321.453-50', 'sala B');

console.log(aluno.getLastname());
console.log(aluno);
console.log(cliente);
