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
          id="myCarousel"
          className="carousel slide"
          data-ride="carousel"
          data-interval="5000"
        >
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
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

          <a
            className="carousel-control-prev"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Slider;
