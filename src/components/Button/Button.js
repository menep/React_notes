import React from "react";

const button = props => {
  const style = {
    width: "10rem",
    height: "4rem",
    border: "2px solid orange",
    backgroundColor: "#fff",
    boxSizing: "border-box"
  };

  return (
    <button style={style} onClick={props.clicked}>
      Save
    </button>
  );
};

export default button;