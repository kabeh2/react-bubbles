import React from "react";
import LoginForm from "./forms/LoginForm";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto"
      }}
    >
      <h1>Welcome to the Bubble App!</h1>
      <LoginForm {...props} />
    </div>
  );
};

export default Login;
