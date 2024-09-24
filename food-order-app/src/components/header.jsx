
import FoodAppImg from "../assets/reactfoodImg.jpg";
export default function Header({ cartBtnClicked }) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={FoodAppImg} alt="react food image" />
        <p id="title">REACTFOOD</p>
      </div>
      <button onClick={cartBtnClicked}>cart{1}</button>
    </header>
  );
}
