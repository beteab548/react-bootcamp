import FoodAppImg from "../assets/reactfoodImg.jpg";
export default function Header({ cartBtnClicked, cartItmes }) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={FoodAppImg} alt="react food image" />
        <p id="title">REACTFOOD</p>
      </div>
      <button onClick={cartBtnClicked}>cart ({cartItmes.length})</button>
    </header>
  );
}
