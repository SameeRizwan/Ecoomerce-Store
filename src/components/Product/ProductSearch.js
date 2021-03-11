import React, { Fragment } from "react";
import BrandLabel from "./BrandLabel";

const ProductSearch = (props) => {
  const brand = [
    {
      name: "ASDF",
      products: 20,
    },
    {
      name: "BCVVCN",
      products: 40,
    },
    {
      name: "GTRGRG",
      products: 200,
    },
    {
      name: "TGRRGTS",
      products: 150,
    },
    {
      name: "GRTRTBGB",
      products: 567,
    },
    {
      name: "THDTJDYSDFV",
      products: 103,
    },
  ];

  return (
    <Fragment>
      <aside className="col-md-3">
        <div className="card">
          <article className="filter-group">
            <header className="card-header">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_2"
                aria-expanded="true"
              >
                <i className="icon-control fa fa-chevron-down"></i>
                <h6 className="title">Brands </h6>
              </a>
            </header>

            <div className="filter-content collapse show" id="collapse_2">
              <div className="card-body">
                {brand.map((ele) => {
                  return <BrandLabel brands={ele} />;
                })}
              </div>
            </div>
          </article>
          <article className="filter-group">
            <header className="card-header">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_3"
                aria-expanded="true"
                className=""
              >
                <i className="icon-control fa fa-chevron-down"></i>
                <h6 className="title">Price range </h6>
              </a>
            </header>
            <div className="filter-content collapse show" id="collapse_3">
              <div className="card-body">
                <input
                  type="range"
                  className="custom-range"
                  min="0"
                  max="100"
                  name=""
                />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Min</label>
                    <input
                      className="form-control"
                      placeholder="$0"
                      type="number"
                    />
                  </div>
                  <div className="form-group text-right col-md-6">
                    <label>Max</label>
                    <input
                      className="form-control"
                      placeholder="$1,0000"
                      type="number"
                    />
                  </div>
                </div>
                <button className="btn btn-block btn-primary">Apply</button>
              </div>
            </div>
          </article>
        </div>
      </aside>
    </Fragment>
  );
};

export default ProductSearch;
