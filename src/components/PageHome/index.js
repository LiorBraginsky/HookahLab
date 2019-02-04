import React from "react";
import MyInput from "../MyInput";
import { Link } from "react-router-dom";
import TodoList from "../TodoList";
import TabaccoForm from "../TabaccoForm";
import { addTobacco } from "../../store/actions";
import { connect } from "react-redux";

const Home = props => {
  return (
    <div>
      <Link to="/">login</Link>
      <Link to="/catalog">Catalog</Link>
      <p>Home Page</p>
      {/* <TodoList />  */}
      <TabaccoForm
        onSubmit={tobacco => {
          props.addTobacco(tobacco);
          props.history.push("/catalog");
        }}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  addTobacco
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
