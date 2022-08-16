// escrevendo primeiro o tipo
type VerifyUserFn = (user: User, sentValue: User) => boolean;
//type obj
//  identidade          conteudo
type User = { username: string; password: string };
// func validator iqual
const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const dbUser = { username: 'Lailton', password: '123' };
const sentUser = { username: 'Marcos', password: '123' };
const loggedIn = verifyUser(dbUser, sentUser);

console.log(loggedIn);
