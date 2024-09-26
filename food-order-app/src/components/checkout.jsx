export default function Checkout({ isopen }) {
  function handleSubmit(event) {
    const fd = new FormData(event.target);
    const formDatas = Object.fromEntries(fd.entries());
    
  }
  return (
    <dialog open={isopen}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">
          <input type="text" id="first-name" />
        </label>
        <label htmlFor="last-name">
          <input type="text" id="last-name" />
        </label>
        <label htmlFor="email">
          <input type="email" id="email" />
        </label>
        <label htmlFor="address">
          <input type="text" id="address" />
        </label>
        <label htmlFor="poxcode">
          <input type="number" id="poxcode" />
        </label>
        <button type="submit">submit</button>
      </form>
    </dialog>
  );
}
