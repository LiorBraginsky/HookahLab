import React from "react";
// import classnames from "classnames";
import CatalogItem from "./CatalogItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./styles.css";

class Catalog extends React.Component {
  // constructor(){}

  render() {
    console.log(this.props);
    const { tobaccoList } = this.props;
    return (
      <div className="Catalog">
        <div>
          <Link to="/">login</Link>
          <br />
          <Link to="/home">Home</Link>
          <h1>Hookah Catalog</h1>
        </div>
        {tobaccoList.map(item => {
          return (
            <CatalogItem
              key={item.id}
              tobacco={item}
              onClickDelete={() => {}}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tobaccoList: state.tobacco || []
  };
};

export default connect(
  mapStateToProps,
  null
)(Catalog);
