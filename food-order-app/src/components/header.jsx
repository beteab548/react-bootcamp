import { useState } from "react";
import CartModal from "./cartModla";
import FoodLists from "./food-lists";
import FoodAppImg from "../assets/reactfoodImg.jpg";
export default function Header() {
  const [cartBtnIsClicked, setCartBtnClicked] = useState(false);
  function cartBtnClicked() {
    setCartBtnClicked((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={FoodAppImg} alt="react food image" />
          <p id="title">REACTFOOD</p>
        </div>
        <button onClick={cartBtnClicked}>cart{1}</button>
      </header>
      <CartModal isOpen={cartBtnIsClicked} />
      <FoodLists />
    </>
  );
}
