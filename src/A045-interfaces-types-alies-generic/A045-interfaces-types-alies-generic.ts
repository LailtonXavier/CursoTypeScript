// podemos utilizar varios tipos generics
interface ProtocoloPessoa<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

// type
type ProtocoloPessoa2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno: ProtocoloPessoa<string, number> = {
  nome: 'Lailton',
  sobrenome: 'Xavier',
  idade: 22,
};

const aluno2: ProtocoloPessoa<number, number> = {
  nome: 33,
  sobrenome: 44,
  idade: 22,
};

const aluno3: ProtocoloPessoa2 = {
  nome: 'chama',
  sobrenome: 'na bota',
  idade: 22,
};

console.log(aluno);
console.log(aluno2);
console.log(aluno3);
