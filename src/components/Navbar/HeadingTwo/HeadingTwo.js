import React from "react";

const headingTwo = props => {
  const style = {
    heading: {
      fontSize: '3.5rem',
      fontWeight: '200'
    }
  }
  return (
      <h2 style={style.heading}>React Notes</h2>
  );
};

export default headingTwo;
