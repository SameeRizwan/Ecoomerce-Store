import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavItems = (props) => {
  return (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link navi" to={`/${props.item.toLowerCase()}`}>
          {props.item}
        </Link>
      </li>
    </Fragment>
  );
};

export default NavItems;
