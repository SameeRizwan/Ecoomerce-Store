import React, { Fragment } from "react";
import Navigation from "./navigation";

const Header = () => {
  const items = ["Home", "Products", "Contact-us", "About-us"];

  return (
    <Fragment>
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <a
                  href="http://bootstrap-ecommerce.com/"
                  className="brand-wrap"
                >
                  <img className="logo" src="asserts/images/logo.png" alt="" />
                </a>
              </div>

              <div className="col-lg-6">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header icontext">
                    <div className="text">
                      <span className="text-muted" style={{ margin: "80px" }}>
                        Welcome!
                      </span>
                      <div>
                        <a href="#">Sign In as Seller</a> |
                        <a href="#"> Sign In as Buyer</a>
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
