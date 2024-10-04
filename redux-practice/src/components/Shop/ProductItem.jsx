import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartSliceAction } from "../../../store/cart";
import { sendCartData } from "../../../store/cart";
import { useEffect } from "react";
let initialState = true;
export default function ProductItem({ item }) {
  const dispatch = useDispatch();
  const notification = useSelector((state) => {
    return state.notification;
  });
  const cartItems = useSelector((state) => {
    return state.cartItems;
  });
  const { title, price, description } = item;
  console.log(notification);

  function onClick(items) {
    dispatch(cartSliceAction.addToCart(items));
    dispatch(sendCartData(cartItems));
  }
  return (
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
  );
}
