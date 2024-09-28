// import Header from "./components/header";
// import CartModal from "../src/components/cartModla";
import FoodLists from "../src/components/food-lists";
// import Checkout from "../src/components/checkout";
import { FoodComponent } from "../hooks/foodlist-context-api";
export default function App() {
  return (
    <>
      <FoodComponent />
      <FoodLists />
      <FoodComponent />
    </>
  );
}
{
  /* <Header cartBtnClicked={cartBtnClicked} cartItmes={mealsAddedToCart} /> */
  /* {orderBtnClicked && (
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
      )} */
}
