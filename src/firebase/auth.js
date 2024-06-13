import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

class Api {
  constructor(user) {
    this.user = user;
  }

  createUser = async ({email, password}) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('USUÁRIO REGISTRADO', user)
      this.user = user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Erro ao registrar', errorCode, errorMessage);
    });
  }

  logInUser = async ({email, password}) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('USUÁRIO LOGADO', user)
        this.user = user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erro ao logar', errorCode, errorMessage);
      });
  }

  
};

const ApiAuth = new Api({});
export default ApiAuth;