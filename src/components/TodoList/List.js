import React from "react";

export const List = ({ items }, i) => {
  return items.map(item => <p key={item + i}>{item}</p>);
};
