import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { withRouter } from "react-router-dom";

const LoginPage = props => {
  return (
    <div>
      <Link to="/home">home</Link>
      <p>LoginPage</p>
      <LoginForm
        onSubmit={() => {
          props.history.push("/home");
        }}
      />
    </div>
  );
};

export default withRouter(LoginPage);
