import React from "react";
import TabaccoForm from "../TabaccoForm";
import { addTobacco } from "../../store/actions";
import { connect } from "react-redux";

const Home = props => {
  return (
    <div>
      <TabaccoForm
        page={"Add Tobbaco"}
        onSubmit={tobacco => {
          props.addTobacco(tobacco);
          props.history.push("/catalog");
        }}
      />
    </div>
  );
};

const mapDispatchToProps = {
  addTobacco
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
