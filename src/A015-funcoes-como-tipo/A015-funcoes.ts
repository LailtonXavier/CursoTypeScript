// uma func q recebe um array e uma func de callback
// veja que o nossa callback como esta agora, o ts n conhece e n ajuda

// Para corrigir: vms criar um type nosso para a callback
type MapStringsCallback = (item: string) => string;

// substitui o CallableFunction para MapStringsCallback (type)

function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    // passar cada elemento dentro da callbackfn
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
// esse foi a forma antiga, q n estava ajudando
// const abcMapped = mapStrings(abc, function (item: any) {
//   return item.oUpperCase();
// });

// forma nova, agora o ts ajuda, muito massa
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

// deu certo e n afetou o array original
console.log(abc);
console.log(abcMapped);
