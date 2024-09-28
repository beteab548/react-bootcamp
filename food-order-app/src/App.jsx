// import Header from "./components/header";
// import CartModal from "../src/components/cartModla";
// import FoodLists from "../src/components/food-lists";
// import Checkout from "../src/components/checkout";
import { FoodComponent } from "../hooks/foodlist-context-api";
import { useContext } from "react";
function App() {
  const contextValue = useContext(FoodComponent);
  console.log(contextValue);
  return (
    <>
      <FoodComponent />
      <Header cartBtnClicked={cartBtnClicked} cartItmes={mealsAddedToCart} />
      {orderBtnClicked && (
        <Checkout
          isopen={orderBtnClicked}
          mealsAddedToCart={mealsAddedToCart}
        />
      )}
      {!orderBtnClicked && (
        <CartModal
          isOpen={cartBtnIsClicked}
          mealsAddedToCart={mealsAddedToCart}
          RemoveItemFromCart={RemoveItemFromCart}
          orderIsClicked={orderIsClicked}
        />
      )}
      <FoodLists handleclickedList={handleclickedList} />
      <FoodComponent />
    </>
  );
}
export default App;
