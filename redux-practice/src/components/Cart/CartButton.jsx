import classes from "./CartButton.module.css";
import { useDispatch,useSelector } from "react-redux";
import { cartSliceAction } from "../../../store/cart";
export default function CartButton(props) {
  const dispatch = useDispatch();
  const cartItem=useSelector(state=> state.cartItems)
  function onClick() {
    dispatch(cartSliceAction.showModal());
  }
  return (
    <button className={classes.button}>
      <span onClick={onClick}>My Cart</span>
      <span className={classes.badge}>{cartItem.length}</span>
    </button>
  );
}
