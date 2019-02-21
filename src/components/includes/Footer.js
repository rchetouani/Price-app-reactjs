import React, { Component } from "react";
import logo from "./bootstrap-solid.svg";
import footer from "../mocksprice/footer";
const footertitle = footer.map(item => item.title);

const values = footer.map(item => item.values);
console.log("values", values);
const value = values.map(item => item.map(item => item.name));
console.log("value :", value);

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md">
            <img className="mb-2" src={logo} alt="" width="24" height="24" />
            <small className="d-block mb-3 text-muted">&copy; 2017-2019</small>
          </div>
          <div className="col-6 col-md">
            <h5>{footertitle[0]}</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href=" ">
                  sdfds {value[0]}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {footer[0].values[1].name}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {footer[0].values[2].name}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {footer[0].values[3].name}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {footer[0].values[4].name}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {footer[0].values[5].name}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>{footertitle[1]}</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href=" ">
                  {footer[1].values[0].name}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {footer[1].values[1].name}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {footer[1].values[2].name}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {footer[1].values[3].name}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>{footertitle[2]}</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href=" ">
                  {footer[2].values[0].name}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {footer[2].values[1].name}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {footer[2].values[2].name}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {footer[2].values[3].name}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
