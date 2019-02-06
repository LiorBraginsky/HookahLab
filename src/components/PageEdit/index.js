import React from "react";
import TabaccoForm from "../TabaccoForm";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { editTobacco } from "../../store/actions"

const PageEdit = props => {
  return (
    <div>
      <TabaccoForm
        isEdit
        page={"Edit Tobacco"}
        value={props.item}
        onSubmit={tobacco => {
          props.editTobacco(tobacco);
          props.history.push('/catalog');
        }
        }
      />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { tobaccoId } = ownProps.match.params
  return {
    item: state.tobacco.find((item) => item.id === tobaccoId)
  };
};

const mapDispatchToProps = {
  editTobacco
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PageEdit));