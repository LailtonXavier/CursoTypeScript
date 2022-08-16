// Escritor TEM UM
// Ambas n depende uma da outra
export class Escritor {
  // essa ferramenta pode existir ou nao pode
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso digitar sem ferramenta');
      return;
    }

    // nessa caso, tenho ferramenta
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  abstract escrever(): void;
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta digitando...`);
  }
}

const escritor = new Escritor('Lailton');
const caneta = new Caneta('Bic');
const maquina = new MaquinaEscrever('MAc');

// mando escritor escrever usando a ferramenta
escritor.ferramenta = null;
escritor.escrever();

// console.log(escritor.ferramenta);
// console.log(caneta.nome);
// console.log(maquina.nome);
