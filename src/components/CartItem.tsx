import { ChevronDown, ChevronUp } from "../icons";

type CartItemProps = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};

const CartItem = (props: CartItemProps) => {
  const { id, img, title, price, amount } = props;
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
          onClick={() => console.log("remove item")}
        >
          remove
        </button>
      </div>
      <div className="flex flex-col align-center">
        <button
          className="amount-btn"
          onClick={() => console.log("increase item")}
        >
          <ChevronUp />
        </button>
        <p className="font-bold text-gray-600 mx-auto">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            console.log("decrease btn");
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
