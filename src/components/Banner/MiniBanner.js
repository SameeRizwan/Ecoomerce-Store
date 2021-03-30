import React, { Fragment } from "react";
import MiniBannerStruct from "./MiniBannerStruct";

const MiniBanner = () => {
  const banners = [
    {
      image: "asserts/images/banners/1.jpg",
    },
    {
      image: "asserts/images/banners/1.jpg",
    },
  ];

  return (
    <Fragment>
      <div className="banner-area pb-100">
        <div className="container img_container">
          <div className="row">
            {banners.map((e, index) => {
              return <MiniBannerStruct src={e.image} key={index} />;
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MiniBanner;
