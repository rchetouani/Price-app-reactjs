import React, { Component } from "react";
import logo from "./bootstrap-solid.svg";
import footer from "../../mocksprice/footer";

const footertitle = footer.map(item => item.title);

const values = footer.map(item => item.values);
const value = values.map(item => item.map(item => item.name));

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
                  {value[0][0]}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {value[0][1]}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {value[0][2]}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {value[0][3]}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {value[0][4]}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {value[0][5]}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>{footertitle[1]}</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href=" ">
                  {value[1][0]}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {value[1][1]}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {value[1][2]}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {value[1][3]}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>{footertitle[2]}</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href=" ">
                  {value[2][0]}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {value[2][1]}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {value[2][2]}
                </a>
              </li>
              <li>
                <a className="text-muted" href=" ">
                  {value[2][3]}
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
