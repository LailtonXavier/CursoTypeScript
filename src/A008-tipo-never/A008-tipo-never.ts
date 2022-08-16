// essa func n retorna nada, por isso pode ser do tipo void tbm
// esse func n retorna nada mais lança um erro
export default function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
