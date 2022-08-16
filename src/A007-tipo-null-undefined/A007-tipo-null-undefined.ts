let x;

// estreitamento de tipo
if (typeof x === 'undefined') x = 20;

// console.log(x * 2);

// factory function
// trabalhe concientimento com parametro opcionais
export default function (
  // abertura da func  =  type annotation
  firstName: string,
  lastName?: string,
): {
  // tipando as vars da func
  firstName: string;
  lastName?: string;
} {
  // corpo da fun
  return {
    firstName,
    lastName,
  };
}
// usando o ? === undefined qnd uma coisa n foi definida ou pode ser

// normalmente n ciamos usando `any` porem com a checagem do if da certo
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  // ou retorna o quadrado de x ou retorna null
  return null;
}

const squareOfTwoNumber = squareOf('nul');

// podemos fazer a validação
if (squareOfTwoNumber === null) {
  console.log('Conta invalida');
} else {
  console.log(squareOfTwoNumber);
}
