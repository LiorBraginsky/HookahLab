import React from "react";
import "./styles.css";

const MyForm = ({ className, children, ...props }) => {
  return (
    <form className={`my-form ${className || ""}`} {...props}>
      {children}
    </form>
  );
};

export default MyForm;
