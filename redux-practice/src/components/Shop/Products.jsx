import { useState } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

export default function Products(props) {
  const productItems = [
    {
      id: 1,
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      id: 2,
      title: "Test-2",
      price: 19,
      description: "This is a second product - amazing!",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItems.map((products) => {
          return <ProductItem key={products.id} item={products} />;
        })}
      </ul>
    </section>
  );
}
