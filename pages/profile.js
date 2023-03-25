import AuthSignIn from "../components/AuthForSignIn";
import Head from "next/head";

const profile = () => {
  return (
    <>
      <Head>
        <title> FlairStyle | SignUp </title>
        <meta name="keywords" content="FlairStyle" />
      </Head>
      <AuthSignIn />
    </>
  );
};

export default profile;
