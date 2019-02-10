import React from "react";
import LoginForm from "./components/LoginForm";
import { withRouter } from "react-router-dom";

const LoginPage = props => {
  return (
    <div>
      <LoginForm
        onSubmit={() => {
          props.history.push("/home");
        }}
      />
    </div>
  );
};

export default withRouter(LoginPage);
