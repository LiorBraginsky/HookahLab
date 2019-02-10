import React from "react";
import CatalogItem from "./CatalogItem";
import { connect } from "react-redux";
import { deleteTobacco } from '../../store/actions';
import "./styles.css";

class Catalog extends React.Component {

  editHandler = (id) => () => {
    this.props.history.push(`/edit/${id}`);
  }

  componentDidMount() {
    JSON.parse(localStorage.getItem('tabak'))
  }

  render() {
    const { tobaccoList } = this.props;
    return (
      <div className="CatalogWrapper">
        <div className="Title">
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
