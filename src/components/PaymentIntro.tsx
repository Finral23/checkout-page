import { FaApple } from "react-icons/fa";

const PaymentIntro = () => {
  return (
    <div className="text-center text-[var(--text-primary)]">
      <h2 className="text-xl font-bold">5 days free</h2>
      <p className="text-sm mb-4">then 299.99 UAH per 14 days</p>

      <button className="bg-black text-white w-full py-2 rounded mb-4 text-lg font-medium flex justify-center items-center">
        <FaApple />
        <span>Pay</span>
      </button>

      <div className="flex justify-between items-center gap-4 text-sm mb-4">
        <div className="bg-[#E4E6EC] w-[100px] h-[1px]" />
        <div className="w-[107px] text-[var(--text-secondary)]">
          or pay with card
        </div>
        <div className="bg-[#E4E6EC] w-[100px] h-[1px]" />
      </div>
    </div>
  );
};

export default PaymentIntro;
