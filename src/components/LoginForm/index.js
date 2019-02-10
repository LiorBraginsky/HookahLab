import React from "react";
import MyInput from "../MyInput";
import MyFrom from "../MyFrom";
import MyButton from "../MyButton";

import "./styles.css";

export const Title = props => (
  <div className="Zagolovok">
    <h1>{props.children}</h1>
  </div>
);

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
      fields: {},
      errors: {}
    };
  }

  onChangeHandler = e => {
    this.setState({
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: ""
      }
    });
  };

  submit = e => {
    e.preventDefault();

    if (!this.state.fields.username || !this.state.fields.password) {
      let erorrs = {};

      if (!this.state.fields.username) {
        erorrs.username = "error user name";
      }

      if (!this.state.fields.password) {
        erorrs.password = "error user password";
      }

      this.setState({
        hasError: true,
        errors: erorrs
      });
    } else {
      this.setState({
        hasError: false
      });

      this.props.onSubmit(this.state.fields);
    }
  };

  render() {
    return (
      <div className="LoginPage">
        <div className="LoginBox">
          <Title>Hookah Login</Title>
          <MyFrom>
            <div className="inputs">
              <MyInput
                onChange={this.onChangeHandler}
                label="User Name"
                name="username"
                error={this.state.errors.username}
              />
              <MyInput
                onChange={this.onChangeHandler}
                label="Your Password"
                name="password"
                error={this.state.errors.password}
              />
            </div>
            <div className="Buttons">
              <MyButton onClick={this.submit} type="submit">
                Sign in
              </MyButton>
            </div>
          </MyFrom>
        </div>
      </div>
    );
  }
}

export default LoginForm;
