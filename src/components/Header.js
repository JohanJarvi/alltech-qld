import React from "react";
import _ from "lodash";

import { Link, safePrefix } from "../utils";

const imgStyle = {
  maxWidth: "20%"
};

export default class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div>
          <Link to={safePrefix("/")} className="title">
            <img
              style={imgStyle}
              src="/images/AlltechLogo2019.png"
              alt="Alltech Electrical"
            ></img>
          </Link>
        </div>
      </header>
    );
  }
}
