import React, { Component } from "react";
import Nav from "./nav";
import Logo from "./Logo";

class Header extends Component {
  state = {
    tab: ["Features", "Enterprise", "Support", "Pricing"]
  };
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <Logo Companyname="SQLI" />
        <Nav navtitle={this.state.tab} />
        <a className="btn btn-outline-primary" href=".">
          Sign up
        </a>
      </div>
    );
  }
}

export default Header;
