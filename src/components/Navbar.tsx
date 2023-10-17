import { CartIcon } from "../icons";
import { useAppSelector } from "../hooks";

const Navbar = () => {
  const { amount } = useAppSelector((state) => state.cart);
  return (
    <nav className="bg-indigo-500 text-white py-5 px-10 capitalize">
      <div className="flex justify-between items-center">
        <h3 className="text-xl">shopping cart</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="text-green-400 text-xl">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
