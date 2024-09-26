import Header from "./components/header";
import { useState } from "react";
import CartModal from "../src/components/cartModla";
import FoodLists from "../src/components/food-lists";
import Checkout from "../src/components/checkout";
function App() {
  const [cartBtnIsClicked, setCartBtnClicked] = useState(false);
  const [mealsAddedToCart, setMealsAddedToCart] = useState([]);
  const [orderBtnClicked, setOrderBtnClicked] = useState(false);
  function orderIsClicked() {
    setOrderBtnClicked((prevValue) => {
      return !prevValue;
    });
  }
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
  function RemoveItemFromCart(mealToErase) {
    console.log(mealsAddedToCart);

    setTimeout(() => {
      setMealsAddedToCart((prevValue) => {
        return [
          ...prevValue.filter((meals) => {
            return mealToErase.id !== meals.id;
          }),
        ];
      }, 1000);
    });
  }

  return (
    <>
      <Header cartBtnClicked={cartBtnClicked} cartItmes={mealsAddedToCart} />
      {orderBtnClicked && <Checkout isopen={orderBtnClicked} />}
      {!orderBtnClicked && (
        <CartModal
          isOpen={cartBtnIsClicked}
          mealsAddedToCart={mealsAddedToCart}
          RemoveItemFromCart={RemoveItemFromCart}
          orderIsClicked={orderIsClicked}
        />
      )}
      <FoodLists handleclickedList={handleclickedList} />
    </>
  );
}
export default App;
