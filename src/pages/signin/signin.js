import React from "react";
import SignIn from "../../components/signin/signin";
import "./signin.scss";

const SignInPage = () => {
  return (
    <div className="container">
      <SignIn />
      <div className="register-container"></div>
    </div>
  );
};

export default SignInPage;
