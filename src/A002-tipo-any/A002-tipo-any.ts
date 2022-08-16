// dessa forma n estamos falando o tipo, dai pode recever qualquer coisa
// dessa maneira n funciona pq o tsconfig.json tem um === strict: true
// dentro do strict = tem a regra NoImplicitAny - esta ativado == erro
// function showMessage(msg) {
//   return msg;
// }

// estou agora especificando que quero qualquer coisa msm
// function showMessage(msg: any) {
//   return msg;
// }

// corrigir === colocar um typo
function showMessage(msg: string) {
  return msg;
}

// function test(msg: string): string {
//   return msg;
// }

// veja que ele pode ser qualquer coisa isso n ta legal
// console.log(showMessage([1, 2, 3])); // da erro pq é string agora
console.log(showMessage('ailon'));
// console.log(showMessage(3)); // mesmo motivo do erro acima
