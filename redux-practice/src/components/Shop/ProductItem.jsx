import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartSliceAction } from "../../../store/cart";
import { sendCartData } from "../../../store/cart";
export default function ProductItem({ item }) {
  const dispatch = useDispatch();
  const { title, price, description } = item;
  function onClick(items) {
    dispatch(cartSliceAction.addToCart(items));

    dispatch(sendCartData(items));
  }
  return (
    <>
      <li className={classes.item}>
        <Card>
          <header>
            <h3>{title}</h3>
            <div className={classes.price}>${price}</div>
          </header>
          <p>{description}</p>
          <div className={classes.actions}>
            <button onClick={() => onClick(item)}>Add to Cart</button>
          </div>
        </Card>
      </li>
    </>
  );
}
