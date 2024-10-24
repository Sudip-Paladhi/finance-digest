import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <form className=" w-3/12 p-12 bg-blue-500 my-14 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-blue-200"
        />
        {!isSignInForm && (
            <input
            type="password"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-blue-200"
          />
        )}
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-blue-200"
        />
        <button className="p-4 my-6 bg-red-500 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm? "New to Finance Digest? Sign up now" : "Allready registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
