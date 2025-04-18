import { ReactNode } from "react";

interface Props {
  isProcessing: boolean;
  onClick: () => void;
  children: ReactNode;
}

const PayButton = ({ isProcessing, onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={isProcessing}
      type="submit"
      className={`
        relative w-full rounded px-4 py-2 text-white font-medium
        bg-[hsl(144,97%,27%)]
        hover:bg-[hsl(144,97%,31%)] hover:-translate-y-[2px]
        active:bg-[hsl(144,97%,23%)] active:translate-y-[6px]
        transition-all ease-in-out duration-300
        flex justify-center items-center overflow-hidden h-[44px]
      `}
    >
      <span
        className={`
          absolute transition-all duration-300 ease-out
          ${
            isProcessing
              ? "translate-y-4 opacity-0"
              : "translate-y-0 opacity-100"
          }
        `}
      >
        {children}
      </span>

      <span
        className={`
          absolute flex items-center gap-2 transition-all duration-300 ease-out
          ${
            isProcessing
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }
        `}
      >
        <span className="w-4 h-4 border-2 border-white border-l-transparent rounded-full animate-spin" />
        Processing payment
      </span>
    </button>
  );
};

export default PayButton;
