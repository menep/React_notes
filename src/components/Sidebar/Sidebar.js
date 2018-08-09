import React from "react";
import ListNote from "./ListNote/ListNote";

const sidebar = props => {
  const style = {
    container: {
      width: "30%",
      borderRight: '1px solid #ccc'
    },
    heading: {
      fontSize: "2.0rem",
      height: "5rem",
      lineHeight: "5rem",
      fontWeight: "300",
      marginBottom: "1rem",
      textAlign: "center"
    },
    list: {
      listStyle: "none"
    }
  };

  const notes = props.notes.map(el => (
    <ListNote
      noteContent={el.note}
      key={el.id}
      id={el.id}
      clicked={props.clicked}
      delete={props.delete}
    >
      {props.children}
    </ListNote>
  ));

  return (
    <div style={style.container}>
      <h4 style={style.heading}>Notes</h4>
      <ul style={style.list}>{notes}</ul>
    </div>
  );
};

export default sidebar;
