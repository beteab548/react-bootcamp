export default function CartModal({ isOpen, mealsAddedToCart }) {
  // console.log(mealsAddedToCart);
  return (
    <dialog open={isOpen}>
      <p>cart is opened!</p>
      {mealsAddedToCart.map((meals) => {
        return (
          <li key={meals.id}>
            <p>{meals.name}</p>
            <p>{meals.qnt}</p>
          </li>
        );
      })}
      <button></button>
    </dialog>
  );
}
