import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const MiniBannerStruct = (props) => {
  return (
    <Fragment>
      <div className="col-lg-6">
        <div className="img-hover-zoom img-hover-zoom--brightness">
          <img src={props.src} alt="effect" className="minibanner" />
          <Link className="imgbutton" to="/products">
            Shop Now
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default MiniBannerStruct;
