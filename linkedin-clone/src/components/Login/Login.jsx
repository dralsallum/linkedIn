import React from "react";
import { LoginContainer } from "./Login.elements";
import linkedinLogo from "../../assets/linkedinLogo.png";

const Login = () => {
  return (
    <LoginContainer>
      <img src={linkedinLogo} alt="" />

      <form>
        <input placeholder="Full name (required if registering" type="text" />
      </form>
    </LoginContainer>
  );
};

export default Login;
