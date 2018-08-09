import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Content from "./containers/Content/Content";
import Auxiliary from './components/hoc/Auxiliary/Auxiliary';

class App extends Component {
  render() {
    const style = {
      width: "100vw"
    };
    
    return (
      <Auxiliary style={style}>
        <Navbar />
        <Content />
      </Auxiliary>
    );
  }
}

export default App;
