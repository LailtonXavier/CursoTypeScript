// criando
type Idade = number;

// todo obj do tipo pessoa vai ter essa chave
// Alias  =  utilizar um tipo criado dentro do  outro
type Pessoa = {
  name: string;
  idade: Idade; // Alias
  salario: number;
  corPreferida?: string;
};

// union
type CorRGB = 'red' | 'green' | 'blue';
type CorOMYK = 'ciano' | 'magenta' | 'preto';

// unindo os dois tipos, usando Alias
type corPreferida = CorRGB | CorOMYK;

// meu obj tem q implementar o meu tipo
const pessoa: Pessoa = {
  name: 'Lailton',
  idade: 89,
  salario: 200_000, // o js entende assim 200000
};

// Observe cm esta sendo criado: colcoando tipo em todo mundo
// pegando o obj com spread operation
export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

// veja que n mudamo o estado original do obj, por causa do spread
console.log(setCorPreferida(pessoa, 'magenta'));
