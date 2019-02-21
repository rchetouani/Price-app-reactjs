import React, { Component } from "react";
import Button from "./Button";

class PriceCard extends Component {
  render(props) {
    const prices = this.props.prices.map(items => items);
    const itemstitle = prices.map(item => item.title);
    const itemsprice = prices.map(item => item.price);
    const users = prices.map(items =>
      items.items.map(listitem => <li key="listitem.id">{listitem.users}</li>)
    );
    const storage = prices.map(items =>
      items.items.map(listitem => <li key="listitem.id">{listitem.storage}</li>)
    );
    const email = prices.map(items =>
      items.items.map(listitem => <li key="listitem.id">{listitem.email}</li>)
    );
    const help = prices.map(items =>
      items.items.map(listitem => <li key="listitem.id">{listitem.help}</li>)
    );
    return (
      <div className="container">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">{itemstitle[0]}</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                {itemsprice[0]}
                <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                {users[0]}
                {storage[0]}
                {email[0]}
                {help[0]}
              </ul>

              <Button text="Sign up for free" isFree />
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">{itemstitle[1]} </h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                {itemsprice[1]}

                <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                {users[1]}
                {storage[1]}
                {email[1]}
                {help[1]}
              </ul>
              <Button text="Get started" />
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">{itemstitle[2]} </h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                {itemsprice[2]}
                <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                {users[2]}
                {storage[2]}
                {email[2]}
                {help[2]}
              </ul>

              <Button text="Contact us" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceCard;
