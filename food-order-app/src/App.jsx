import Header from "./components/header";
import { useState } from "react";
import CartModal from "../src/components/cartModla";
import FoodLists from "../src/components/food-lists";
function App() {
  const [cartBtnIsClicked, setCartBtnClicked] = useState(false);
  const [mealsAddedToCart, setMealsAddedToCart] = useState([]);
  function handleclickedList(newMeal) {
    newMeal.qnt = 1;
    setMealsAddedToCart((prevValue) => {
      prevValue.map((cartMeals) => {
        if (newMeal.id == cartMeals.id) {
          cartMeals.qnt = cartMeals.qnt + 1;
          console.log("+1");
          return 
        }
      });
      return [...prevValue, newMeal];
    });
  }
  function cartBtnClicked() {
    setCartBtnClicked((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <>
      <Header cartBtnClicked={cartBtnClicked} />
      <CartModal
        isOpen={cartBtnIsClicked}
        mealsAddedToCart={mealsAddedToCart}
      />
      <FoodLists handleclickedList={handleclickedList} />
    </>
  );
}

export default App;
