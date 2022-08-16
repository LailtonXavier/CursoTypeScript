// eplicando a logica:
// Um personagem ataca outro personagem, a força que ele tiver
// vai ser sugado da vida do personagem q esta sendo atacado
// criar um bordao para todo mundo

// desafio: falar quem morreu apos finalizar a vida

// essa classe é abstract pq é um contrato para as outras
export abstract class Personagem {
  // n vai ser acessado fora da classe
  // so de colocar abstract forço tds as filhas a terem
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
    protected cont: number = 0,
  ) {}

  atacar(personagem: Personagem): void {
    this.cont += 1;
    console.log(`${this.nome} esta atacando ${this.cont} vez...`);
    this.bordao();
    // mandando os pontos q vou perder de vida do personagem
    personagem.perderVida(this.ataque);
  }

  // sugar vida
  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida... \n`);
  }

  // esse metodo tem q ir para todas as filhas, obrigado a ter
  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  // subscrever o metodo
  bordao(): void {
    console.log(this.emoji + 'GUERREIRA AO ATAQUEEEEE...DEIXEM COMIGO');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(
      this.emoji + 'EU SOU O MONSTRO MAIS FORTE DO MUNDO, VOU TE MATARRRRR',
    );
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

// ataques do guerreiro começou a atacar
guerreira.atacar(monstro);
guerreira.atacar(monstro);

// monstro atacou uma vez
monstro.atacar(guerreira);
