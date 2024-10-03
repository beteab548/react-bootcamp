import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartItem = useSelector((state) => {
    return state.cartItems;
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItem.length == 0 ? (
          <p>no items in cart yet!</p>
        ) : (
          <CartItem item={cartItem} />
        )}
      </ul>
    </Card>
  );
}
