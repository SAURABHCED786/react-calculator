import React from "react";
import "../App.css";

const ButtonComponent = props => {
  return (
    <button
      className="button"
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </button>
  );
};

export default ButtonComponent;
