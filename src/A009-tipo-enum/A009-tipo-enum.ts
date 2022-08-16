// Pode usar dois enum do msm nome ele uni
// enum é um tipo e um valor
enum Cores {
  AZUL, // 0
  VERDE, // 1
  BRANCO, // 2
}

// podemos alterar os valores
enum Cores {
  ROXO = 'ROXO',
  // Ele segui uma sequencia do numero que parou
  CINZA = 233,
  PRETO,
}

// console.log(Cores);
// console.log(Cores.BRANCO);
// console.log(Cores[21]); // pegar pelo o valor
// console.log(Cores.ROXO); // acesso o valor q o proprio nome

// criando uma func pra escolher cores
function escolherCor(cor: Cores): void {
  console.log(Cores[cor]);
}

// escolherCor(Cores.CINZA);

// olha oq estou enviando e n da erro, isso é ruim
escolherCor(12312);
