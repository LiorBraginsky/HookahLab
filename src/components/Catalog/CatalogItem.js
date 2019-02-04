import React from "react";

import "./styles.css";

const CatalogList = props => {
  const { tobacco } = props;
  return (
    <div className="CatalogList">
      <p>Tabacco Name: {tobacco.nameTabacco}</p>
      <p>Tabacco Taste: {tobacco.tasteTabacco}</p>
    </div>
  );
};

export default CatalogList;
