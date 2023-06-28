import { auth } from "..";
import { createUserWithEmailAndPassword } from "firebase/auth";

async function signIn(email: string, password: string) {
  let error;
  const result = await createUserWithEmailAndPassword(auth, email, password).catch((err) => {
    error = err;
  });

  if (error) {
    return {
      isOk: false,
      errorMessage: error,
    };
  } else {
    return {
      isOk: true,
      data: result
    }
  }
}

export {
  signIn
}