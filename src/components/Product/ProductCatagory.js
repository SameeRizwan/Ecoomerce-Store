import React, { Fragment } from "react";

const ProductCatagory = (props) => {
  let catagories = [];

  catagories.push(
    <Fragment>
      {props.options.map((ele, index) => {
        return <option key={index}>{ele}</option>;
      })}
    </Fragment>
  );

  return (
    <Fragment>
      <header className="border-bottom mb-4 pb-3">
        <div className="form-inline">
          <span className="mr-md-auto">{props.products} Items found </span>
          <select className="mr-2 form-control">{catagories}</select>
        </div>
      </header>
    </Fragment>
  );
};

export default ProductCatagory;
