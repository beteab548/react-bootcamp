import { createContext, useState } from "react";
export const CtxValue = createContext(false);
export function FoodComponent({ children }) {
  const [cartBtnIsClicked, setCartBtnClicked] = useState(false);
  const [mealsAddedToCart, setMealsAddedToCart] = useState({
    items: { i: "f" },
  });
  const [orderBtnClicked, setOrderBtnClicked] = useState(true);
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
    <CtxValue.Provider value={orderBtnClicked}>{children}</CtxValue.Provider>
  );
}
