import { auth } from "..";
import { createUserWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

interface signInProps {
  email: string;
  password: string;
}

const provider = new GoogleAuthProvider();

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

export async function logOut() {
  let result, error;

  try {
    const res = await signOut(auth);
    result = res;
  } catch (err) {
    error = err;
  };

  return { result, error }
}

export async function signInWithGoogle() {
  let result, error;

  try {
    const res = await signInWithPopup(auth, provider);
    result = res;
  } catch (err) {
    error = err;
  };

  return { result, error };
}