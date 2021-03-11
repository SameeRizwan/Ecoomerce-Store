import React, { Fragment } from "react";

const MiniBanner = (props) => {
  return (
    <Fragment>
      <div className="banner-area pb-100">
        <div className="container img_container">
          <div className="row">
            <div className="col-lg-6">
              <div class="img-hover-zoom img-hover-zoom--brightness">
                <img
                  src="asserts/images/banners/1.jpg"
                  alt="effect"
                  className="minibanner"
                />
                <div class="imgbutton">Shop Now</div>
              </div>
            </div>
            <div className="col-lg-6">
              <div class="img-hover-zoom img-hover-zoom--brightness">
                <img
                  src="asserts/images/banners/1.jpg"
                  alt="effect"
                  className="minibanner"
                />
                <div class="imgbutton">Shop Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MiniBanner;
