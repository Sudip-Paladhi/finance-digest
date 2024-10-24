import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 p-12 bg-blue-500 my-14 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-blue-200"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-blue-200"
        />

        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-blue-200"
        />
        <p className="text-red-500 font-bold py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-500 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Finance Digest? Sign up now"
            : "Allready registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
