// tentar tipar o this dentro de uma func
// vc pode tipar o this usando o primeiro arg da funcao
// veja q n é um argumento da func mais a tipagem do this
export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

// agora ele mostra erro pq n sabe quem é o this
// funcao('Lau')

// primeiro argumnt do call: passa quem e o this
// segundo argumt pra frente passa o resto da func
funcao.call(new Date(), 'Lau', 45);
funcao.apply(new Date(), ['Lau', 45]);

// diferença entre call e apply = é a maneira q passo os args
