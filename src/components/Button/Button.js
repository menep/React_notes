import React from "react";
import Aux from '../hoc/Auxiliary/Auxiliary';

const button = props => {
  const style = {
      width: "10rem",
      height: "4rem",
      border: "2px solid orange",
      backgroundColor: "#fff",
      boxSizing: "border-box",
  }

  return (
    <Aux>
      <button style={style} onClick={props.clicked}>
        Save
      </button>
    </Aux>
  );
};

export default button;
