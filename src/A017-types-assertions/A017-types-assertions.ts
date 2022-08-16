/* Recomendado */
// tenho que ter a DOM an lib do tsconfig

const body = document.querySelector('body');

// body.style.background = 'red'; // ele pode ser nulo, por isso o erro
// corrigir === o tyscript fica checando seu codigo toda hora
if (body) body.style.background = 'red';

// Essa seria a recondada
// a mais utilizada  =  fazer um type assertions
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';
// so faça isso qnd ter certeza

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer';

/* Não Recomendado */
// type assertion
// const body4 = document.querySelector('body') as unknown as number;
// agora ele esta um number
// porem isso é muito ruim

// no-non-null-assertion  =  n pode ser nulo
const body2 = document.querySelector('body')!; // ele diz p usar o `!`
body2.style.background = 'red';
