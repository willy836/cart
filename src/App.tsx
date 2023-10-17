import "./App.css";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getCartItems } from "./redux/cart/cartSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
