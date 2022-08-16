export class Empresa {
  // versão longa
  // esse atributo é apenas para leitura
  public readonly name: string;
  private readonly colaboradores: Colaborador[] = []; // meu tipo em Classe, eu iniciei array vazio
  protected readonly cnpj: string;

  // inicializando seu valor, apenas uma vez
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  // se o array Colaboradores é privado, como podemos acessar ele e lincar
  // criar um metodo = esse metodo serve pra gete ter acesso fora da classe
  adicionaColaboradores(colaborador: Colaborador): void {
    // this.colaboradores = 'esssa forma aqui não pode' // an posso reatribuir
    this.colaboradores.push(colaborador);
  }

  mostrarColaborador(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

// versão curta e mais rapida
export class Colaborador {
  // ele funciona tanto como valor e tipo
  constructor(public readonly name: string, readonly sobrenome: string) {}
}

const empresa1 = new Empresa('Udemy', '111.323.4554/334');
const colaborador1 = new Colaborador('Mayque', 'Xavier');
const colaborador2 = new Colaborador('Luiz', 'Otavio');
const colaborador3 = new Colaborador('Maria', 'Silva');

empresa1.adicionaColaboradores(colaborador1);
empresa1.adicionaColaboradores(colaborador2);
empresa1.adicionaColaboradores(colaborador3);

// struct all types no TS = podemos add pq o TS trabalhar dessa forma
empresa1.adicionaColaboradores({
  name: 'Nando',
  sobrenome: 'Jose',
});

empresa1.mostrarColaborador();

console.log(empresa1);
// empresa1.name = 'Facebook'; // ele mostra erro, pq é readonly
// console.log(empresa1.name); // como é public podemos pega o nome
