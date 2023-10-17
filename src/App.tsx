import "./App.css";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getCartItems } from "./redux/cart/cartSlice";
import { calculateTotals } from "./redux/cart/cartSlice";

function App() {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
