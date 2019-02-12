import React, { Component } from 'react';
import MyButton from '../MyButton';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from '../../store/actions';

import "./styles.css";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">

        {!localStorage.getItem('role') &&
          (<Link to="/">
            <MyButton>
              Login
            </MyButton>
          </Link>)}

        {JSON.parse(localStorage.getItem('role')) === "admin" &&
          (<Link to="/home">
            <MyButton>
              Add new Tabocco
            </MyButton>
          </Link>)
        }

        {localStorage.getItem('role') &&
          (<Link to="/catalog">
            <MyButton>
              Catalog
            </MyButton>
          </Link>)}


        {localStorage.getItem('role') &&
          (<Link to="/">
            <MyButton
              onClick={() => this.props.logout()}
            >
              LogOut
            </MyButton>
          </Link>)}
      </div>
    );
  }
}

const mapDispatchToProps = {
  logout
}

export default connect(
  null,
  mapDispatchToProps
)(Navigation);
