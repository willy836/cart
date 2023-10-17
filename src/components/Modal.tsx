import { useAppDispatch } from "../hooks";
import { closeModal } from "../redux/modal/modalSlice";
import { clearCart } from "../redux/cart/cartSlice";

const Modal = () => {
  const dispatch = useAppDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4
          className="leading-6 capitalize font-bold mb-4"
          style={{ letterSpacing: "3px" }}
        >
          Remove all items from your shopping cart?
        </h4>
        <div className="flex justify-around">
          <button
            type="button"
            className="uppercase bg-white text-indigo-800 font-medium border-2 border-indigo-800 rounded py-1 px-4"
            style={{ letterSpacing: "3px" }}
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            style={{ letterSpacing: "2px" }}
            className="uppercase bg-white text-red-800 font-medium border-2 border-red-800 rounded py-1 px-4"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
