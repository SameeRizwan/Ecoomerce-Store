import React, { Fragment } from "react";

const Banner = (props) => {
  return (
    <Fragment>
      <section className="section-intro padding-y-sm">
        <div className="container">
          <div className="intro-banner-wrap">
            <img src={props.url} className="img-fluid rounded" alt="" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Banner;
