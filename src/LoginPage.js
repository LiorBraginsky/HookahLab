import React from "react";
import LoginForm from "./components/LoginForm";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from "./store/actions";

const LoginPage = props => {
  return (
    <div>
      <LoginForm
        onSubmit={accFields => {
          props.login(accFields)
          props.history.push("/catalog");
        }}
      />
    </div>
  );
};

const mapDispatchToProps = {
  login
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(LoginPage));

