import React, { Fragment } from "react";
import NavItems from "./navitems";

const Navigation = (props) => {
  const navbar = props.items.map((ele, index) => {
    return <NavItems item={ele} key={index} />;
  });

  return (
    <Fragment>
      <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
            aria-controls="main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">{navbar}</ul>
          </div>
        </div>
      </nav>
      '
    </Fragment>
  );
};

export default Navigation;
