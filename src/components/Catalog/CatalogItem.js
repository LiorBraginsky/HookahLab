import React from "react";
import MyButton from "../MyButton";
import "./styles.css";


const CatalogItem = props => {
  const { tobacco } = props;
  return (
    <div className="CatalogItem">
      <p>Tabacco Name: {tobacco.nameTabacco}</p>
      <p>Tabacco Taste: {tobacco.tasteTabacco}</p>
      <p>Description: {tobacco.description} </p>
      <MyButton
        onClick={props.onClickEdit}
      >
        Edit
      </MyButton>
      <MyButton onClick={props.onClickDelete && props.onClickDelete}>
        Delete
      </MyButton>
    </div>
  );
};

export default CatalogItem;
