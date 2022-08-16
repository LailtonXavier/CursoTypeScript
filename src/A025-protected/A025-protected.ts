export class Emprese {
  readonly name: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

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
}

export class Udemy extends Emprese {
  constructor() {
    super('Lailton', '122.132.121/111');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();

    // se tiver colaborador return ele ou null
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly name: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Jose', 'Silva');
const colaborador2 = new Colaborador('Man', 'Silva');

const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(colaborador1);
console.log(colaborador2);
console.log(empresa1);

// empresa1.adicionarColaboradores(colaborador1);
// empresa1.mostrarColaborador();
