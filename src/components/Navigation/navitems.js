import React, { Fragment } from "react";

const NavItems = (props) => {
  return (
    <Fragment>
      <li className="nav-item">
        <button className="nav-link navi">{props.item}</button>
      </li>
    </Fragment>
  );
};

export default NavItems;
