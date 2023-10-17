import { ChevronDown, ChevronUp } from "../icons";
import { useAppDispatch } from "../hooks";
import { removeItem, increase, decrease } from "../redux/cart/cartSlice";

type CartItemProps = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};

const CartItem = (props: CartItemProps) => {
  const { id, img, title, price, amount } = props;

  const dispatch = useAppDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4
          className="mb-2 font-bold text-gray-600"
          style={{ letterSpacing: "2px" }}
        >
          {title}
        </h4>
        <h4 className="font-bold text-gray-400">$ {price}</h4>
        <button
          style={{ letterSpacing: "2px" }}
          className="text-indigo-700"
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
      <div className="flex flex-col align-center">
        <button
          className="amount-btn"
          onClick={() => dispatch(increase({ id }))}
        >
          <ChevronUp />
        </button>
        <p className="font-bold text-gray-600 mx-auto">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
