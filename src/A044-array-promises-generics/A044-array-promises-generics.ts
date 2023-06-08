// ate aqui ele infere o tipo certo da promise
const arrayNubers: Array<number> = [1, 2, 3, 4, 5];
console.log(arrayNubers);

async function promiseAsync() {
  return 1;
}

// uma func em q n conseguiu interir o tipo
// function myPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//   });
// }

// corrigir para resovler
function myPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

type myType = number;
function myPromiseNumb(): Promise<myType> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

// criando meu tipo

promiseAsync().then((result) => console.log(result));
myPromise().then((result) => console.log(result));
