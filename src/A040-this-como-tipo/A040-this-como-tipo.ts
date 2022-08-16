// fazer uma calculadora
export class Calculadora {
  constructor(public numb: number) {}

  // retornando this  =  retornando a propria instancia
  // com o this  =  posso fazer chamada em cadeias
  add(n: number): this {
    this.numb += n;
    return this;
  }

  sub(n: number): this {
    this.numb -= n;
    return this;
  }

  div(n: number): this {
    this.numb /= n;
    return this;
  }

  mul(n: number): this {
    this.numb *= n;
    return this;
  }
}

// criando outra class extendendo o pai

export class SubCalculadora extends Calculadora {
  // esse this é da SubCal
  pow(n: number): this {
    this.numb **= n;
    return this;
  }
}

// const calculadora = new Calculadora(10);
const calculadora = new SubCalculadora(10);
calculadora.add(10).mul(2).div(2).sub(10).pow(2);

// console.log(calculadora);

// Builder - GoF
export class RequestBuilder {
  // definir valores padrões
  // --- tenho q inicializar ou fica com erro
  private method: 'GET' | 'POST' | null = null;
  private url: string | null = null;

  // esse é o padrao de projetos
  // eu posso ir setando ao inves de construtor
  setMethod(method: 'GET' | 'POST'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via metodo ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
// numa linha posso configurar e enviar os dados
request.setUrl('http://wwww.google.com').setMethod('POST').send();

console.log(request);
