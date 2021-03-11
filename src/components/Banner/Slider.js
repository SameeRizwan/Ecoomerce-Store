import React, { Fragment } from "react";

const Slider = (props) => {
  return (
    <Fragment>
      {/* <section className="section-intro padding-y-sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={props.url}
                className="img-fluid rounded"
                alt={props.alt}
                style={{ height: "100%" }}
              />
            </div>
            <div className="col-lg-6">
              <img
                src={props.url}
                className="img-fluid rounded"
                alt={props.alt}
                style={{ height: "100%" }}
              />
            </div>
          </div>
        </div>
      </section> */}

      <div className="container-lg my-3">
        <div
          className="carousel slide"
          data-ride="carousel"
          data-interval="4000"
        >
          <ol className="carousel-indicators">
            <li data-slide-to="0" class="active"></li>
            <li data-slide-to="1"></li>
            <li data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={props.url} alt="First Slide" />
            </div>
            <div className="carousel-item">
              <img src={props.url} alt="Second Slide" />
            </div>
            <div className="carousel-item">
              <img src={props.url} alt="Third Slide" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Slider;
