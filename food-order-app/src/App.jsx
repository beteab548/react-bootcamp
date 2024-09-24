import Header from "./components/header";
import { useState } from "react";
import CartModal from "../src/components/cartModla";
import FoodLists from "../src/components/food-lists";
function App() {
  const [cartBtnIsClicked, setCartBtnClicked] = useState(false);
  const [mealsAddedToCart, setMealsAddedToCart] = useState([]);
  console.log(mealsAddedToCart);
  function handleclickedList(newMeal) {
    if (!newMeal.qnt) {
      newMeal.qnt = 1;
    }
    let mealExist = false;
    setMealsAddedToCart((prevValue) => {
      prevValue.map((cartMeals) => {
        if (newMeal.id == cartMeals.id) {
          cartMeals.qnt = cartMeals.qnt + 1;
          mealExist = true;
        }
      });
      if (mealExist) {
        return [...prevValue];
      } else {
        return [...prevValue, newMeal];
      }
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
