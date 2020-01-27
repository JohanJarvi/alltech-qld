import React from "react";
import _ from "lodash";

import { Link, safePrefix } from "../utils";

const imgStyle = {
  maxWidth: "100%"
};

export default class Sidebar extends React.Component {
  render() {
    return (
      <section id="sidebar">
        <div className="inner">
          <img
            style={imgStyle}
            src="/images/AlltechLogo2019.png"
            alt="Alltech Electrical"
          ></img>
          <nav>
            <ul>
              {_.map(
                _.get(this.props, "pageContext.frontmatter.sidebar.entries"),
                (item, item_idx) => (
                  <li key={item_idx}>
                    <Link
                      {...(_.get(item, "is_primary")
                        ? { id: "first_link" }
                        : null)}
                      to={
                        _.get(item, "url").startsWith("#")
                          ? _.get(item, "url")
                          : safePrefix(_.get(item, "url"))
                      }
                    >
                      {_.get(item, "title")}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}
