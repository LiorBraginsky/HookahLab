import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import MyButton from '../MyButton';
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">

        <Link to="/">
          <MyButton>
            Login
          </MyButton>
        </Link>
        <Link to="/catalog">
          <MyButton>
            Catalog
          </MyButton>
        </Link>
        <Link to="/home">
          <MyButton>
            Add new Tabocco
          </MyButton>
        </Link>
        <Link to="/">
          <MyButton>
            Log Out
          </MyButton>
        </Link>
      </div>
    );
  }
}

export default Navigation;