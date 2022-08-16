// unindo duas interfaces
interface Pessoa {
  nome: string;
}

// readonly
interface Pessoa {
  readonly sobrenome: string; // n posso alterar
}

// array
interface Pessoa {
  readonly endereco: readonly string[];
}

// atributos opcionais
// readonly = ele n pode n existir, se existir n pode ser altarada
interface Pessoa {
  readonly idade?: number;
}

const pessoas: Pessoa = {
  nome: 'Lau',
  sobrenome: 'Silva',
  endereco: ['Av. Brazil'],
};

// pessoas.sobrenome = ''; // da erro

// ele deixou pq é o tipo e n o array ReadOnly
// para corrigir é colocado no outro lado tbm
// pessoas.endereco.push('Runa ');
console.log(pessoas);
