// imagine a conexão com o banco de dado, que fará uma vez só
export class Database {
  // isso é acessivel fora da classe
  // é acessavel mas so pode por dentro
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectando: ${this.host}, ${this.user}, ${this.password}`);
  }

  // isso é outro padra da GoF: factory method
  // factory method = metodo dentro da classe q cria um novo obj
  // dessa forma temos acesso ao construtor private
  static getDatabase(host: string, user: string, password: string): Database {
    // vamos salvar a instacia na propria class

    // se tem algum valor
    if (Database.database) {
      console.log('Retornando instancia ja criada');

      return Database.database;
    }

    console.log('Criando nova instancia');
    // se n tem nenhum valor, instancia
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const b1 = Database.getDatabase('local', 'escolhabanco', 'asdfasdf');
// const b1 = new Database('local', 'escolhabanco', 'asdfasdf');

console.log(b1);
b1.connect();

// se colocar duas conexao
const b2 = Database.getDatabase('local', 'escolhabanco', 'asdfasdf');
// const b2 = new Database('local', 'escolhabanco', 'asdfasdf');

console.log(b2);
b2.connect();

// ver se são igual
console.log(b1 === b2);
