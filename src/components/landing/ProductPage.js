import React, { Fragment } from "react";
import Header from "../Navigation/header";
import Footer from "../Navigation/footer";
import Card2 from "../Card/card2";
import ProductSearch from "../Product/ProductSearch";
import ProductCatagory from "../Product/ProductCatagory";

const ProductPage = () => {
  const product = [
    {
      name: "Just another product name",
      price: 179.0,
      url: "asserts/images/items/1.jpg",
    },
    {
      name: "Just another product name",
      price: 179.0,
      url: "asserts/images/items/1.jpg",
    },
    {
      name: "Just another product name",
      price: 179.0,
      url: "asserts/images/items/1.jpg",
    },
    {
      name: "Just another product name",
      price: 179.0,
      url: "asserts/images/items/1.jpg",
    },
  ];

  const options = ["Latest items", "Trending", "Cheapest", "Most Popular"];

  return (
    <Fragment>
      <Header />

      <section className="section-pagetop bg">
        <div className="container">
          <h2 className="title-page">Category products</h2>
        </div>
      </section>

      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <ProductSearch />
            <main className="col-md-9">
              <ProductCatagory products={25} options={options} />
              <div className="row">
                {product.map((ele) => {
                  return (
                    <Card2 name={ele.name} price={ele.price} url={ele.url} />
                  );
                })}
              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default ProductPage;
