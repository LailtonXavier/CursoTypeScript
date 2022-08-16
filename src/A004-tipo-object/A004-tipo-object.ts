// dessa forma o typescritp inferiu o tipo
// const objetoA = {
//   chaveA: 'valor A',
//   chaveB: 'valor B',
// };

// dessa forma estamos falando o tipo (n é seguro)
// `unknown` vem antes do `any` é mais abragente que o `any`
// fazendo isso o typescritp nao conhece mais, assim n pode ajudar
// não tem auto complite
// const objetoA: Record<string, unknown> = {
//   chaveA: 'valor A',
//   chaveB: 'valor B',
// };

// tipando
const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string; // ? fica opcional
  // qnd eu n sei quem vai ser criado (criar mais)
  // index singeturing
  [key: string]: unknown;
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

// const text: {
//   names: string;
//   sobrenomes?: string;
// } = {
//   names: '',
//   sobrenomes: '',
// };

// console.log(text);

// objetoA.chaveA = 'oii'; // depois do `readonly` so podemos ver e n alterar
objetoA.chaveB = 'oii';

console.log(objetoA);
