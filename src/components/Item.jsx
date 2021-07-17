import React, { useState } from "react";

const Item = (props) => {
  const [isChecked, changeCheck] = useState(false);

  const itemClick = () => {
    changeCheck((prevValue) => {
      return !prevValue;
    });
  };
  return (
    <div className="item-container">
      <li
        onClick={itemClick}
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
      >
        {props.text}
      </li>
      <span className="item-btn-container">
        <button
          className="item-btn"
          onClick={() => {
            props.deleteItem(props.id);
          }}
        >
          X
        </button>
      </span>
    </div>
  );
};

export default Item;
