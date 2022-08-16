// tudo de Carrinho de compras agrega produto esse tipo de relacao
// é chamado agregação
export class CarrinhoCompras {
  private readonly produtos: Produto[] = [];

  // receber varios produtos
  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    // somar todos os precos
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Arroz', 45.99);
const produto2 = new Produto('Leite', 4.99);
const produto3 = new Produto('Feijao', 5.99);

const carrinho = new CarrinhoCompras();

carrinho.inserirProdutos(produto1, produto2, produto3);

console.log(carrinho.valorTotal());
