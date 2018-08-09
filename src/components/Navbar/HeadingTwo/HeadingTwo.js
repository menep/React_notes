import React from "react";
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

const headingTwo = props => {
  const style = {
    heading: {
      fontSize: '3.5rem',
      fontWeight: '200'
    }
  }
  return (
    <Auxiliary>
      <h2 style={style.heading}>React Notes</h2>
    </Auxiliary>
  );
};

export default headingTwo;
