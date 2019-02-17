import React from "react";
import "./styles.css";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tovar from '../../assets/tovar.jpg'

const CatalogItem = props => {
  const { tobacco } = props;
  const isAdmin = JSON.parse(localStorage.getItem('role')) === "admin";
  return (
    <div className="CatalogItem">
      <div className={"imgItem"}>
        <img
          src={Tovar}
          alt={"propbka"}
        />
      </div>
      <p>Tabacco Name: {tobacco.nameTabacco}</p>
      <div className={"moreInfo"}>
        <p>Tabacco Taste: {tobacco.tasteTabacco}</p>
        <p>Description: {tobacco.description} </p>
        {isAdmin &&
          (
            <div>
              <Button
                color="primary"
                variant="contained"
                onClick={props.onClickEdit}
                style={{ margin: '10px' }}
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

    </div>
  );
};

export default CatalogItem;
