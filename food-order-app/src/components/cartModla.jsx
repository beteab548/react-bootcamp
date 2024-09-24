import { useEffect, useState } from "react";

export default function CartModal({ isOpen, mealsAddedToCart }) {
  const [cartItems, setCartItems] = useState(mealsAddedToCart);
  useEffect(() => {
    setCartItems(mealsAddedToCart);
  }, [mealsAddedToCart]);
  console.log(cartItems);
  function addQuantity(clickedmeal) {
    setCartItems((prevValue) => {
      prevValue.map((meal) => {
        if (meal.id == clickedmeal.id) {
          meal.qnt = meal.qnt + 1;
        }
      });
      return [...prevValue];
    });
  }
  function minusQuantity(clickedmeal) {
    setCartItems((prevValue) => {
      prevValue.map((meal) => {
        if (meal.id == clickedmeal.id) {
          meal.qnt = meal.qnt - 1;
        }
      });
      if (clickedmeal.qnt < 1) {
        return prevValue.filter((meals) => {
          return meals.qnt !== 0;
        });
      }
      return [...prevValue];
    });
  }
  return (
    <dialog open={isOpen}>
      {cartItems.length == 0 && <p>no items added yet!</p>}
      {cartItems.map((meals) => {
        return (
          <li key={meals.id}>
            <p>{meals.name}</p>
            <p>{meals.qnt}</p>
            <p>{meals.price * meals.qnt}</p>
            <button
              onClick={() => {
                addQuantity(meals);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                minusQuantity(meals);
              }}
            >
              -
            </button>
          </li>
        );
      })}
    </dialog>
  );
}
