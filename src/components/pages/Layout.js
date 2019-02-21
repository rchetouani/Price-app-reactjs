import React, { Component } from "react";

import Header from "../includes/Header";
import Footer from "../includes/Footer";

class Layout extends Component {
  render(props) {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
