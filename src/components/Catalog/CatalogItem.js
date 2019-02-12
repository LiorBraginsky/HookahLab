import React from "react";
// import MyButton from "../MyButton";
import "./styles.css";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
            <Button
              color="primary"
              variant="contained"
              onClick={props.onClickEdit}
              style={{margin: '10px'}}
            >
              Edit
            </Button>
            <IconButton
              aria-label="Delete"
              onClick={props.onClickDelete &&
                props.onClickDelete}>
              <DeleteIcon />
            </IconButton>
          </div>
        )}

    </div>
  );
};

export default CatalogItem;
