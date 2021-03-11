import React, { Fragment } from "react";

const BrandLabel = (props) => {
  return (
    <Fragment>
      <label className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" />
        <div className="custom-control-label">
          {props.brands.name}
          <b className="badge badge-pill badge-light float-right">
            {props.brands.products}
          </b>
        </div>
      </label>
    </Fragment>
  );
};
export default BrandLabel;
