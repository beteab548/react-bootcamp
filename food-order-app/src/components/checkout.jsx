import { useState } from "react";

export default function Checkout({ isopen }) {
  const [submittedFormDatas, setSubmittedFormDatas] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const formDatas = Object.fromEntries(fd.entries());
    setSubmittedFormDatas(formDatas);
  }
  return (
    <dialog open={isopen}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">
          <input type="text" id="first-name" name="first-name" />
        </label>
        <label htmlFor="last-name">
          <input type="text" id="last-name" name="last-name" />
        </label>
        <label htmlFor="email">
          <input type="email" id="email" name="email" />
        </label>
        <label htmlFor="address">
          <input type="text" id="address" name="address" />
        </label>
        <label htmlFor="poxcode">
          <input type="number" id="poxcode" name="poxcode" />
        </label>
        <button type="submit">submit</button>
      </form>
    </dialog>
  );
}
