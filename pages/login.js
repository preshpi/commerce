import React from "react";
import AuthLogiIn from "../components/AuthLogin";
import Head from "next/head";

function Login() {
  return (
    <>
      <Head>
        <title> FlairStyle | LogIn </title>
        <meta name="keywords" content="FlairStyle" />
      </Head>
      <AuthLogiIn />
    </>
  );
}

export default Login;
