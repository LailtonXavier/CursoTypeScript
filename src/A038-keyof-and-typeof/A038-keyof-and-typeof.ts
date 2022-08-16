// suponha q vms criar algo para traduzir cores
// oq queremos é de alguma n usar esse type e pegar o tipo do obj de outra forma

// tirando esse tipo e usando typeof
// type CoresObj = {
//   vermelho: string;
//   verde: string;
//   azul: string;
// };

// no campo do tipo posso pegar as chaves do obj
type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

// apos a adicao do keyof e typeof o codigo ficou dinamico
const coresObj = {
  vermelho: 'red',
  verde: 'geren',
  azul: 'blue',
  rosa: 'pink',
};

// pegou as chaves com Union, pego as chaves de outra forma acima
export function traduzirCores(
  // export function traduzirCores(
  // cores: typeof coresObj,
  // cor: 'vermelho' | 'verde' | 'azul',

  cor: CoresChaves,
  cores: CoresObj,
): string {
  return cores[cor];
}

console.log(traduzirCores('azul', coresObj));
console.log(traduzirCores('rosa', coresObj));
