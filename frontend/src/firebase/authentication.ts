import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    if (!user) {
      throw new Error("User not found");
    }
    return { success: true, user };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error during login:", error.message);
    } else {
      console.error("Error during login:", error);
    }
  }
};
export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User signed up:", user);
    return user;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error during sign-up:", error.message);
    } else {
      console.error("Error during sign-up:", error);
    }
  }
};
