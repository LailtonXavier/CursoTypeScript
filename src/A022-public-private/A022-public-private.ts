export class Emprese {
  readonly name: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  adicionarColaboradores(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaborador(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  // exemplo public
  // redundante, pq meu metodo ja é publico
  // public getNome(): string {
  //   return this.name;
  // }
}

export class Colaborador {
  constructor(public readonly name: string, readonly sobrenome: string) {}
}

const empresa1 = new Emprese('Lailton', '122.132.121/111');
const colaborador1 = new Colaborador('Jose', 'Silva');

console.log(empresa1);
console.log(colaborador1);

empresa1.adicionarColaboradores(colaborador1);
empresa1.mostrarColaborador();
