// O motor vai ser criado de dentro do carro
// o Motor n vai existir fora do Carro
export class Carro {
  // ele so vai existir aqui dentro
  private readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('O motor esta ligado...');
  }

  acelerar(): void {
    console.log('Acelerar o motor...');
  }

  parar(): void {
    console.log('Parar o carro...');
  }

  desligar(): void {
    console.log('Desligar o carros...');
  }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
