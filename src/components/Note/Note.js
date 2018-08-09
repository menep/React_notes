import React from "react";
import InputContainer from "./InputContainer/InputContainer";

const note = props => {
  const style = {
    container: {
      width: "70%",
      height: "100%",
      display: 'flex',
      flexDirection: 'column',
    }
  };

  return (
    <div style={style.container}>
      <InputContainer
        change={props.change}
        clicked={props.clicked}
        value={props.value}
      />
    </div>
  );
};

export default note;
