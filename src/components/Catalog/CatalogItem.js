import React from "react";
import MyButton from "../MyButton";
import "./styles.css";

const CatalogItem = props => {
  const { tobacco } = props;
  const isAdmin = JSON.parse(localStorage.getItem('role')) === "admin";
  return (
    <div className="CatalogItem">
      <p>Tabacco Name: {tobacco.nameTabacco}</p>
      <p>Tabacco Taste: {tobacco.tasteTabacco}</p>
      <p>Description: {tobacco.description} </p>
      {isAdmin &&
        (
          <div>
            <MyButton
              onClick={props.onClickEdit}
            >
              Edit
            </MyButton>
            <MyButton 
            onClick={props.onClickDelete &&
             props.onClickDelete}
             >
              Delete
            </MyButton>
          </div>
        )}

    </div>
  );
};

export default CatalogItem;
