import React, { Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Card = (props) => {
  return (
    <Fragment>
      <div className="col-md-3">
        <div href="#" className="card card-product-grid">
          <Router>
            <Link className="img-wrap">
              <img src={props.url} alt={props.name} />
            </Link>
            <figcaption className="info-wrap">
              <Link className="title">{props.name}</Link>
              <div className="price mt-1">Rs {props.price}</div>
            </figcaption>
          </Router>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
