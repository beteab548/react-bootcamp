import Header from "./components/header";
import { useState } from "react";
import CartModal from "../src/components/cartModla";
import FoodLists from "../src/components/food-lists";
function App() {
  const [cartBtnIsClicked, setCartBtnClicked] = useState(false);
  const [mealsAddedToCart, setMealsAddedToCart] = useState([]);
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
  function RemoveItemFromCart(mealId) {
    setMealsAddedToCart((prevValue) => {
      return [
        ...prevValue.filter((id) => {
          return mealId !== id;
        }),
      ];
    });
  }
  return (
    <>
      <Header cartBtnClicked={cartBtnClicked} cartItmes={mealsAddedToCart} />
      <CartModal
        isOpen={cartBtnIsClicked}
        mealsAddedToCart={mealsAddedToCart}
        RemoveItemFromCart={RemoveItemFromCart}
      />
      <FoodLists handleclickedList={handleclickedList} />
    </>
  );
}
export default App;
