import { promises as fsPromises } from 'fs';
import { join } from 'path';
// const cal = (items: string[]) => {
//   const allItems = [...items];
//   console.log(allItems);
// };
async function asyncReadFile(filename: string) {
  try {
    const result = await fsPromises.readFile(
      join(__dirname, filename),
      'utf-8',
    );
    // for (let i = 0; i < result.length; i++) {
    //   el = result[i];
    // }
    console.log(typeof Number(result));
    return result;
  } catch (error) {
    console.log(error);
  }
}

// const running = (items: any) => {
//   console.log(items);
//   // for (let i = 0; i < items.lenght; i++) {
//   //   console.log(i);
//   // }
// };

// console.log(cal());
asyncReadFile('./datas.txt');
