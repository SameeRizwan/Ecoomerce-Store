import React, { Fragment } from "react";
import Banner from "../Banner/banner";
import MiniBanner from "../Banner/MiniBanner";
import Slider from "../Banner/Slider";
import Footer from "../Navigation/footer";
import Header from "../Navigation/header";
import ProductSection from "../Product/ProductSection";

const home = () => {
  return (
    <Fragment>
      <Header />
      <Slider url="asserts/images/banners/1.jpg" alt="HEY" />
      <section className="section-content padding-y-sm">
        <div className="container">
          <article className="card card-body">
            <div className="row">
              <div className="col-md-4">
                <figure className="item-feature">
                  <span className="text-primary">
                    <i className="fa fa-2x fa-truck"></i>
                  </span>
                  <figcaption className="pt-3">
                    <h5 className="title">Fast delivery</h5>
                    <p>
                      Dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="item-feature">
                  <span className="text-primary">
                    <i className="fa fa-2x fa-landmark"></i>
                  </span>
                  <figcaption className="pt-3">
                    <h5 className="title">Creative Strategy</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod
                    </p>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-4">
                <figure className="item-feature">
                  <span className="text-primary">
                    <i className="fa fa-2x fa-lock"></i>
                  </span>
                  <figcaption className="pt-3">
                    <h5 className="title">High secured </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </article>
        </div>
      </section>
      <ProductSection title="New Products" />
      <MiniBanner />
      <ProductSection title="Popular Products" />
      <Banner url="asserts/images/banners/1.jpg" alt="HEY" />
      <Footer />
    </Fragment>
  );
};

export default home;
