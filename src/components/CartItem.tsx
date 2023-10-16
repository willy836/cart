import { ChevronDown, ChevronUp } from "../icons";

const CartItem = () => {
  return (
    <article className="cart-item">
      <img src="" alt="image" />
      <div>
        <h4
          className="mb-2 font-bold text-gray-600"
          style={{ letterSpacing: "2px" }}
        >
          Laptop
        </h4>
        <h4 className="font-bold text-gray-400">$500</h4>
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
        <p className="font-bold text-gray-600 mx-auto">2</p>
        <button
          className="amount-btn"
          onClick={() => {
            console.log("amount btn");
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
