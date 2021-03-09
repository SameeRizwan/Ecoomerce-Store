import React, { Fragment } from "react";
import Banner from "../Banner/banner";
import MiniBanner from "../Banner/MiniBanner";
import Slider from "../Banner/Slider";
import Header from "../Navigation/header";
import ProductSection from "../Product/ProductSection";

const Landing = () => {
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

      <footer className="section-footer border-top bg">
        <div className="container">
          <section className="footer-top  padding-y">
            <div className="row">
              <aside className="col-md col-6">
                <h6 className="title">Brands</h6>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <a href="#">Adidas</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Puma</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Reebok</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Nike</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Company</h6>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Career</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Find a store</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Rules and terms</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Help</h6>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Money refund</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Order status</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Shipping info</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Open dispute</a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md col-6">
                <h6 className="title">Account</h6>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <a href="#"> User Login </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> User register </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> Account Setting </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#"> My Orders </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-md">
                <h6 className="title">Social</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fab fa-facebook"></i> Facebook{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fab fa-twitter"></i> Twitter{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fab fa-instagram"></i> Instagram{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fab fa-youtube"></i> Youtube{" "}
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </section>
        </div>
      </footer>
    </Fragment>
  );
};

export default Landing;
