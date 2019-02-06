import React from "react";
import "./styles.css";

const MyButton = props => {
  return (
    <button {...props} className={"my-button"}>
      {props.children}
    </button>
  );
};

export default MyButton;
