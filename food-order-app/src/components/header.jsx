import { useState } from "react";
import CartModal from "./cartModla";

export default function Header() {
  const [cartBtnIsClicked, setCartBtnClicked] = useState(false);
  function cartBtnClicked() {
    setCartBtnClicked((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div>
      <img src="" alt="" />
      <p>REACTFOOD</p>
      <button onClick={cartBtnClicked}>cart{1}</button>
      <CartModal isOpen={cartBtnIsClicked}/>
    </div>
  );
}
