import { FaArrowLeft } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-4">
      <button>
        <FaArrowLeft />
      </button>
      <h1 className="text-lg font-semibold">Checkout</h1>
      <span className="text-sm">Укр</span>
    </header>
  );
};

export default Header;
