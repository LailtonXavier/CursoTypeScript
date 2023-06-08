// criar uma func de obj q retorna um valor da chave
// add restricao
// K 'e uma chave de O
type ObterChaveFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

const obterChave: ObterChaveFn = (obj, key) => obj[key];

const animal = {
  cor: 'rosa',
  vacinas: ['Vacina 1', 'Vacina 2', 'Vacina 3'],
  idade: 10,
};

// const vacinas = obterChave(animal, 'cor');
const vacinas = obterChave(animal, 'vacinas');

console.log(vacinas);
