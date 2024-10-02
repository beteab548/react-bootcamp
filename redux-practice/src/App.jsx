import { Provider, useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header.jsx";
import UserProfile from "./components/UserProfile.jsx";
import Auth from "./components/Auth.jsx";
function App() {
  const isLoggedIn = useSelector((state) => {
    return state.authentication.isAuthenticated;
  });
  return (
    <>
       <Header isAuth={isLoggedIn}/>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <UserProfile />}
      <Counter />
    </>
  );
}
export default App;
