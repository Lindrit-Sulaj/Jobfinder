import { auth } from "..";
import { createUserWithEmailAndPassword } from "firebase/auth";

interface signInProps {
  email: string;
  password: string;
}

export async function signIn({ email, password }: signInProps) {
  let result, error;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    result = res;
  } catch (err) {
    error = err;
  };

  return { result, error }
}