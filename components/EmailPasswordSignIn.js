import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
import { useState } from "react";
import { useRouter } from "next/router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const EmailPasswordAuthSignIn = () => {
  const auth = getAuth(app);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

   // password visiblity
    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };


  const router = useRouter();

  const createAccount = () => {
    createUserWithEmailAndPassword(auth, email, password, displayName)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        alert("success");
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode);
        alert(errorCode);
      });
  };

  return (
    <div className="grid place-items-center gap-[20px]">
      <input
        type="displayName"
        id="displayName"
        value={displayName}
        placeholder="Name"
        onChange={(e) => setDisplayName(e.target.value)}
        className="lg:w-[400px] w-[250px] p-3 outline-none border-black border rounded-md lg:text-xl text-x text-black"
      />
      <input
        type="email"
        id="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="lg:w-[400px] w-[250px] p-3 outline-none border-black border rounded-md lg:text-xl text-x text-black"
      />
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="***************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="lg:w-[400px] w-[250px] p-3 outline-none border-black border rounded-md lg:text-xl text-x text-black"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={createAccount}
          className="bg-[#4285F4] text-white py-3 px-3 rounded-md hover:opacity-70"
        >
          Create Account
        </button>
      </div>

      <button>Forgot password?</button>
    </div>
  );
};

export default EmailPasswordAuthSignIn;