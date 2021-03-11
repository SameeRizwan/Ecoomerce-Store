import React, { Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Card2 = (props) => {
  return (
    <Fragment>
      <Router>
        <div className="col-md-4">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src={props.url} alt={props.name} />
            </div>
            <figcaption className="info-wrap">
              <div className="fix-height">
                <Link className="title">{props.name}</Link>
                <div className="price-wrap mt-2">
                  <span className="price">Rs {props.price}</span>
                </div>
              </div>
              <Link className="btn btn-block btn-primary">Add to cart</Link>
            </figcaption>
          </figure>
        </div>
      </Router>
    </Fragment>
  );
};

export default Card2;
