// Aconselhavel escrever o tipo de tudo
// qnd utilizamos o `rest operation` tem um array
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

// function testRetorno(...args: string[]): void {

// }
semRetorno('Lailton', 'Xavier');

const pessoa = {
  nome: 'Laliton',
  sobrenome: 'Xavier',

  // metodos e funcoes são a mesma coisa
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };
