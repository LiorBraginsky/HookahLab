import React from "react";
// import classnames from "classnames";
import CatalogItem from "./CatalogItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteTobacco } from '../../store/actions';
// import { editTobacco } from '../../store/actions';
import "./styles.css";

class Catalog extends React.Component {

  editHandler = (id) => () => {
    this.props.history.push(`/edit/${id}`);
  }

  componentWillMount() {
    const tabak = localStorage.getItem('tobbacoItems')
    console.log(tabak)
  }

  render() {
    console.log(localStorage);
    const { tobaccoList } = this.props;
    return (
      <div className="CatalogWrapper">
        <div className="Title">
          <Link to="/">login</Link>
          <br />
          <Link to="/home">Home</Link>
          <h1>Hookah Catalog</h1>
        </div>
        <div className="Catalog">
          {tobaccoList.map(item => {
            return (
              <CatalogItem
                key={item.id}
                tobacco={item}
                onClickDelete={() => this.props.deleteTobacco(item.id)}
                // onClickEdit={() => this.props.editTobacco(item.id)}
                onClickEdit={this.editHandler(item.id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tobaccoList: state.tobacco || []
  };
};

const mapDispatchToProps = {
  deleteTobacco
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog);
