export default function CartModal({ isOpen }) {
  console.log(isOpen);
  return (
    <dialog open={isOpen} >
      <p>cart is opened!</p>
      <p>your items!</p>
      <button></button>
    </dialog>
  );
}
