import React, { Fragment } from "react";
import Navigation from "./navigation";

const Header = () => {
  const items = [
    "Fashion",
    "Supermarket",
    "Electronics",
    "Baby & Toys",
    "Fitness sport",
    "Clothing",
    "Furnitures",
  ];

  return (
    <Fragment>
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-6">
                <a
                  href="http://bootstrap-ecommerce.com/"
                  className="brand-wrap"
                >
                  <img className="logo" src="asserts/images/logo.png" alt="" />
                </a>
              </div>
              <div className="col-lg-6 col-12 col-sm-12">
                <form action="#" className="search">
                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-lg-4 col-sm-6 col-12">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header icontext">
                    <a href="#" className="icon icon-sm rounded-circle border">
                      <i className="fa fa-user"></i>
                    </a>
                    <div className="text">
                      <span className="text-muted">Welcome!</span>
                      <div>
                        <a href="#">Sign in</a> |<a href="#"> Register</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Navigation items={items} />
      </header>
    </Fragment>
  );
};

export default Header;
