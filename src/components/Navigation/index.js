import React, { Component } from 'react';
import MyButton from '../MyButton';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from '../../store/actions';
import logo from "../../assets/logo.png";
import "./styles.css";


class Navigation extends Component {
  render() {
    return (
      <div className="menuBar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {localStorage.getItem('role') &&
          (<form className="searchForm" action="" onSubmit={() => this.props.history.push("/catalog")}>
            <input type="search" />
            <i className="fa fa-search"></i>
          </form>)
        }
        <div className="Navigation">
          {!localStorage.getItem('role') &&
            (<Link to="/">
              <MyButton styles={"nav-btn orange"}>
                Login
              </MyButton>
            </Link>)}

          {JSON.parse(localStorage.getItem('role')) === "admin" &&
            (<Link to="/home">
              <MyButton styles={"nav-btn"}>
                Add Tabocco
              </MyButton>
            </Link>)
          }

          {localStorage.getItem('role') &&
            (<Link to="/catalog">
              <MyButton styles={"nav-btn"}>
                Catalog
              </MyButton>
            </Link>)}


          {localStorage.getItem('role') &&
            (<Link to="/">
              <MyButton
                styles={"nav-btn"}
                onClick={() => this.props.logout()}
              >
                LogOut
              </MyButton>
            </Link>)}
        </div>
        <div className="profile">
          <div className="circle" />
          <span>Jhon Wick</span>
        </div>
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
