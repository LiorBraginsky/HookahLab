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

  componentDidMount() {
    const tabak = JSON.parse(localStorage.getItem('tabak'))
    console.log(tabak)
  }

  render() {
    const { tobaccoList } = this.props;
    console.log(localStorage);
    console.log(tobaccoList)
    return (
      <div className="CatalogWrapper">
        <div className="Title">
          <Link to="/">login</Link>
          <br />
          <Link to="/home">Home</Link>
          <h1>Hookah Catalog</h1>
        </div>
        <div className="Catalog">
          {
            tobaccoList ?
              tobaccoList.map(item => {
                return (
                  <CatalogItem
                    key={item.id}
                    tobacco={item}
                    onClickDelete={() => this.props.deleteTobacco(item.id)}
                    onClickEdit={this.editHandler(item.id)}
                  />
                );
              })
              :
              'loading...'
          }
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
