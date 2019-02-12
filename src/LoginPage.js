import React from "react";
import LoginForm from "./components/LoginForm";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from "./store/actions";
import "./styles.css";

const LoginPage = props => {
  return (
    <LoginForm
      onSubmit={accFields => {
        props.login(accFields)
        props.history.push("/catalog");
      }}
    />
  );
};

const mapDispatchToProps = {
  login
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(LoginPage));

