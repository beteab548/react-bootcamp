import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartSliceAction } from "../../../store/cart";
export default function CartItem({ item }) {
  const dispatch = useDispatch();

  function onclick(prop, item) {
    prop == "increase"
      ? dispatch(cartSliceAction.increaseQunatity(item))
      : dispatch(cartSliceAction.decreaseQunatity(item));
  }
  return item.map((item) => {
    const { title, price, qnt, description } = item;
    return (
      <li key={description} className={classes.item}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            $total : {price * qnt}{" "}
            <span className={classes.itemprice}>(${price}/item)</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.qnt}>
            x <span>{qnt}</span>
          </div>
          <div className={classes.actions}>
            <button
              onClick={() => {
                onclick("increase", item);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                onclick("decrease", item);
              }}
            >
              -
            </button>
          </div>
        </div>
      </li>
    );
  });
}
