import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import Notification from "./components/notification";
export default function App() {
  const showCart = useSelector((state) => {
    return state.showModal;
  });
  const notification = useSelector((state) => {
    return state.notification;
  });
  console.log(notification);
  return (
    <Layout>
      {notification && <Notification status={notification} />}
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}
