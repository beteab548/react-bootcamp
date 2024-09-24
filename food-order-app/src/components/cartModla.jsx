export default function CartModal({ isOpen,mealsAddedToCart }) {
  console.log(mealsAddedToCart);
  return (
    <dialog open={isOpen} >
      <p>cart is opened!</p>
      <p>your items!</p>
      <button></button>
    </dialog>
  );
}
