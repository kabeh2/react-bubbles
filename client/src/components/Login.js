import React from "react";
import LoginForm from "./forms/LoginForm";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <LoginForm {...props} />
    </>
  );
};

export default Login;
