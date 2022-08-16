import isEmail from 'validator/lib/isEmail'; // pegando isEmail p validar

const SHOW_ERROR_MESSAGES = 'show-error-message'; // classe da msg de erro

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

// corrigindo o this da arrow
const submitEvents = (event: Event) => {
  event.preventDefault();
  // aqui eu pego o form, pra validar eu forço q é HTMLForm
  const targetForm = event.target as HTMLFormElement;

  hideErrorMessages(targetForm); // o This é o proprio form, deu erro, falava q estava no this global

  // passar o input q quero checar se o `value` do input esta vazio
  checkForEmptyFields(username, email, password, password2);

  // checar email
  checkEmail(email);

  // checar se as senhasx são iguais
  checkEqualPassword(password, password2);

  // por fim checar se devo enviar o formulario
  if (shouldSendForm(targetForm)) {
    // form.submit();
    console.log('Formulario enviado com sucesso');
  }
};

form.addEventListener('submit', submitEvents);

// chegando email com validator
function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

// checar passwords
function checkEqualPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'As Senhas estão diferentes');
    showErrorMessage(password2, 'As Senhas estão diferentes');
  }
}

// verificar
function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode ficar vazio');
  });
}

// selecionou tds classe de erro, correu por elas e removeu
function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement; // vou pegar o pai do input (form-fields)
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMessage.innerText = msg;

  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  // uma flag dizendo q devo enviar
  let send = true;

  // fazer um for checando se tem a msg de erro

  // se encontrar algum campo de erro
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach(() => (send = false));

  // se n achar algum erro acima, continuar o formulario
  return send;
}

// teste
// showErrorMessage(username, 'FOIOSIDSOFISO');
// setTimeout(() => {
//   hideErrorMessages(form);
// }, 2000);
