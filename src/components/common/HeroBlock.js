import React, { Component } from "react";

class HeroBlock extends Component {
  render() {
    return (
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">{this.props.titleHero}</h1>
          <p className="lead">{this.props.textHero}</p>
        </div>
      </div>
    );
  }
}

export default HeroBlock;
