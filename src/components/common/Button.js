import React, { Component } from "react";

class Button extends Component {
  render(props) {
    return (
      <div>
        <button
          type="button"
          className={
            "btn btn-lg btn-block " +
            (this.props.isFree ? " btn-outline-primary" : "btn-primary")
          }
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default Button;
