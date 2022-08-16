type Veiculo = {
  marca: string;
  ano: string; // se mudar o ano aqui, se embaixo estiver string, da erro
};

// imagine um tipo q faça espelhamento dessas duas chaves
// pegando o tipo dessa forma, posso munda acima de string p number
// - issso de forma dinamica
type Car = {
  brand: Veiculo['marca']; // dessa forma estou pegando o tipo
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Ford',
  year: '200',
  name: 'Gol',
};

console.log(carro);
