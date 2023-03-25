import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const Signin = () => {
  // google auth
  const [user, setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const router = useRouter();

  const signin = async () => {
    const result = await signInWithPopup(auth, googleAuth);
    if (result.user) {
      router.push("/");
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return <GoogleButton onClick={signin} />;
};

export default Signin;
