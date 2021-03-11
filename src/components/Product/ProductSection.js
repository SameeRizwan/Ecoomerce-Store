import React, { Fragment } from "react";
import Card from "../Card/card";

const ProductSection = (props) => {
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

  return (
    <Fragment>
      <section className="section-content">
        <div className="container">
          <header className="section-heading">
            <h3 className="section-title">{props.title}</h3>
          </header>
          <div className="row">
            {product.map((ele) => {
              return <Card name={ele.name} price={ele.price} url={ele.url} />;
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductSection;
