import React, { Component } from "react";
import { PureComponent } from "react";

export default class PreComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Naveen",
      bgColor: "",
    };
  }

  handleChange() {
    this.setState({ name: "Aniket", bgColor: "aqua" });
  }
  render() {
    return (
      <>
        <br />
        <br />
        <div
          className="boxClickCss"
          style={{ backgroundColor: this.state.bgColor }}
        >
          Click the button to change the name:<br></br>
          {this.state.name}
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.handleChange();
          }}
        >
          click Me
        </button>
      </>
    );
  }
}
