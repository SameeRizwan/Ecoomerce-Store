import React, { Fragment } from "react";

const Slider = (props) => {
  return (
    <Fragment>
      <div className="carousel slide" data-ride="carousel" data-interval="3000">
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
    </Fragment>
  );
};

export default Slider;
