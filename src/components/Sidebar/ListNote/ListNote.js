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
    deleteBtn: {
      color: "inherit",
      border: "none"
    }
  };

  const content = () => {
    return props.noteContent.length > 13 ? props.noteContent.slice(0, 12) + '...' : props.noteContent;
  };
  
  return (
    <div style={style.container}>
      <li onClick={props.clicked} id={props.id}>
        {content()}
      </li>
      <button className={style.deleteBtn} onClick={props.delete} id={props.id}>
        X
      </button>
    </div>
  );
};

export default listNote;
