import React from "react";

const listNote = props => {
  const style = {
    container: {
      fontSize: "1.5rem",
      marginBottom: "0.5rem",
      paddingLeft: "1rem",
      backgroundColor: "orange",
      display: "flex",
      justifyContent: "space-between"
    },
    note: {
      lineHeight: "2rem"
    },
    deleteBtn: {
      color: "#fff",
      border: "none",
      fontSize: "1.2rem",
      backgroundColor: "inherit",
      marginRight: "1rem"
    }
  };

  const content = () => {
    return props.noteContent.length > 13
      ? props.noteContent.slice(0, 12) + "..."
      : props.noteContent;
  };

  return (
    <div style={style.container}>
      <li onClick={props.clicked} id={props.id} style={style.note}>
        {content()}
      </li>
      <button style={style.deleteBtn} onClick={props.delete} id={props.id}>
        X
      </button>
    </div>
  );
};

export default listNote;
