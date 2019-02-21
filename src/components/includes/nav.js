import React, { Component } from "react";

class nav extends Component {
  render(props) {
    return (
      <>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href=".">
            {this.props.navtitle[0]}
          </a>
          <a className="p-2 text-dark" href=".">
            {this.props.navtitle[1]}
          </a>
          <a className="p-2 text-dark" href=".">
            {this.props.navtitle[2]}
          </a>
          <a className="p-2 text-dark" href=".">
            {this.props.navtitle[3]}
          </a>
        </nav>
      </>
    );
  }
}
export default nav;
