import React, { Component } from "react";

class Logo extends Component {
  render(props) {
    return (
      <>
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <a href=".">{this.props.Companyname} </a>
        </h5>
      </>
    );
  }
}
export default Logo;
