import React, { Component } from "react";

import Layout from "./pages/Layout";
import HeroBlock from "../components/common/HeroBlock";
import PriceCard from "../components/common/PriceCard";

import prices from "../mocksprice/price";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <HeroBlock
            titleHero="Pricing"
            textHero=" Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization."
          />
          <PriceCard prices={prices} />
        </Layout>
      </div>
    );
  }
}

export default App;
