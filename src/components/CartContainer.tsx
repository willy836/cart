import CartItem from "./CartItem";
import { useAppSelector, useAppDispatch } from "../hooks";
import { clearCart } from "../redux/cart/cartSlice";

const CartContainer = () => {
  const { cartItems, amount, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <section className="cart">
      <header>
        <h2 className="capitalize text-center mb-10">your cart</h2>
      </header>

      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      <footer>
        <hr className="border-t-2 border-gray-200 my-2 " />
        <div className="cart-total mb-10">
          <h4 className="flex justify-between font-bold text-gray-600 capitalize">
            total <span>$ {total.toFixed(2)}</span>
          </h4>
        </div>
        <div className="flex justify-center">
          <button
            style={{ letterSpacing: "4px" }}
            className="border-solid border-2 border-red-800 text-red-800 py-2 px-8 uppercase rounded"
            onClick={() => dispatch(clearCart())}
          >
            clear cart
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
