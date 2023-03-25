import { useRouter } from "next/router";
import Link from "next/link";
import Signin from "./SignIn";
import EmailPasswordAuthSignIn from "./EmailPasswordSignIn";

const AuthSignIn = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  const linkClass = "border-b-2  border-blue-500 mt-2 w-32";

  return (
    <div className="flex items-center justify-center accountbg h-screen">
      <div className="m-auto lg:w-[50%] w-[80%] h-[80%] rounded-lg grid place-items-center justify-center glassaccount">
        <div className="text-3xl gap-20 flex w-full items-between justify-center">
          <Link href="/profile">
            <span className={currentPath === "/profile" ? linkClass : ""}>
              SignUp
            </span>
          </Link>
          <Link href="/login">
            <span className={currentPath === "/login" ? linkClass : ""}>
              LogIn
            </span>
          </Link>
        </div>
        <EmailPasswordAuthSignIn />
        <div className="flex items-center justify-center gap-5">
          <span className="border w-[6rem] border-[grey]"></span>
          OR
          <span className="border w-[6rem] border-[grey]"></span>
        </div>
        <Signin />
        <div className="gap-2 flex">
          <span>Already have an account?</span>
          <button className="animate-pulse">
            <Link href="/login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthSignIn;
