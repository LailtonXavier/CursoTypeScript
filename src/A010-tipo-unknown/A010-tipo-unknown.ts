// o any me permite fazer qualquer coisa

// any  = ele n diz nada
// let x: any;
// x = 'vasi';
// x = 10;

// unknown = ele diz uma ciosa, mas pouco
let x: unknown;
x = 'vasi';
x = 10;

const y = 34;

// tratando o erro
if (typeof x === 'number') console.log(x + y);
