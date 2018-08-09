import React from "react";
import HeadingTwo from "./HeadingTwo/HeadingTwo";

const navbar = props => {
  const style = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "orange",
      height: "6rem",
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
    }
  };

  return (
    <nav style={style.container}>
      <HeadingTwo />
    </nav>
  );
};

export default navbar;
