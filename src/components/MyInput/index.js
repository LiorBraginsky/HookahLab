import React from "react";
import classnames from "classnames";
import Alerts from "../Alerts";
import "./styles.css";

const getWrapperClass = ({ error }, isSuper) => {
  return classnames("my-input__wrapper", {
    error: error,
    "super-info": isSuper
  });
};

const MyInput = props => {
  const {
    name,
    type = "text",
    onChange,
    value,
    error,
    onKeyPress,
    onKeyDown,
    label
  } = props;

  return (
    <div className={getWrapperClass(props)}>
      <label className="my-input__label">{label}</label>
      <input
        className={"my-input__input"}
        value={value}
        label={label}
        name={name}
        type={type}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onKeyDown={onKeyDown}
      />
      <Alerts error={error} value={value} />
    </div>
  );
};

export default MyInput;
