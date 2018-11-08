import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Quadratino extends Component {
  x = Math.random() * 500;
  y = Math.random() * 500;

  render() {
    this.x -= (this.x - this.props.mouseX) * 0.1;
    this.y -= (this.y - this.props.mouseY) * 0.1;

    console.log(this.props);
    let randomPosition = {
      top: this.y, //this.props.mouseY, || Math.random() * 500, partono random i quadratini
      left: this.x //this.props.mouseX || Math.random() * 500, e si raggruppano alla posizione del mouse
    };

    return <div style={randomPosition} className="quadratino" />;
  }
}

class App extends Component {
  state = {
    mouseY: null,
    mouseX: null
  };

  mouseMove = e => {
    this.setState({ mouseX: e.pageX, mouseY: e.pageY });
    console.log(e.pageX);
  };

  render() {
    let quadratiniJSX = [];
    for (let i = 0; i < 10; i++) {
      quadratiniJSX.push(
        <Quadratino
          key={i}
          index={i}
          mouseX={this.state.mouseX}
          mouseY={this.state.mouseY}
        />
      );
    }

    return (
      <div className="box" onMouseMove={this.mouseMove}>
        {quadratiniJSX}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
