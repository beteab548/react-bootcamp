import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

export default function Products(props) {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
        <ProductItem
          title="Test 2"
          price={19}
          description="This is a second product - amazing!"
        />
      </ul>
    </section>
  );
}
