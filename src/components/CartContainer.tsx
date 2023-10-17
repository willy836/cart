import CartItem from "./CartItem";
import { useAppSelector, useAppDispatch } from "../hooks";
import { openModal } from "../redux/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, amount, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2
            style={{ letterSpacing: "2px" }}
            className="uppercase text-center mb-10 font-bold text-4xl text-gray-700"
          >
            your cart
          </h2>
          <h4 className="text-center text-xl">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2
          style={{ letterSpacing: "2px" }}
          className="uppercase text-center mb-10 font-bold text-4xl text-gray-700"
        >
          your cart
        </h2>
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
            onClick={() => dispatch(openModal())}
          >
            clear cart
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
