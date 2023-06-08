// imagine se vms usar a func filter do js

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const arrayofnumber = [1, 2, 3, 4, 5];

const filterOrigem = arrayofnumber.filter((value) => value < 4);

// sem ser com genect
// const myFilterCreated = myFilter(arrayofnumber, (value) => {
//   if (typeof value === 'number') return value < 4;
//   return false;
// });

// eu poderia colocar o tipo, mas n precisa pq ele ja infere
// const myFilterCreated = myFilter<number>(arrayofnumber, (value) => value < 4);

const myFilterCreated = myFilter(arrayofnumber, (value) => value < 4);

console.log(myFilterCreated);
console.log(filterOrigem);
