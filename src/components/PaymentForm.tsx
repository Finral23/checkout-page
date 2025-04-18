import { useState } from "react";
import Cleave from "cleave.js/react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import PayButton from "./PayButton";

const PaymentForm = () => {
  const [card, setCard] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isProcessing) return;

    const isValid =
      card.length === 19 &&
      /^\d{2}\/\d{2}$/.test(date) &&
      Number(date.slice(0, 2)) >= 1 &&
      Number(date.slice(0, 2)) <= 12 &&
      cvc.length >= 3;

    if (!isValid) {
      alert("❌ Please fill out all fields correctly");
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      alert("✅ Payment simulated successfully");
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <form
      className="space-y-3 text-[var(--text-secondary)]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="card" className="text-sm">
          Card Number
        </label>
        <Cleave
          id="card"
          options={{ blocks: [4, 4, 4, 4], numericOnly: true }}
          value={card}
          onChange={(e) => setCard(e.target.value)}
          className="w-full border border-[var(--color-border)] p-2 rounded focus:outline-none focus:ring-0"
        />
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col gap-1 w-1/2">
          <label htmlFor="expiry" className="text-sm">
            Expiration Date
          </label>
          <Cleave
            id="expiry"
            options={{ date: true, datePattern: ["m", "y"] }}
            placeholder="MM/YY"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-[var(--color-border)] p-2 rounded focus:outline-none focus:ring-0 placeholder:text-sm"
          />
        </div>

        <div className="flex flex-col gap-1 w-1/2 relative">
          <label htmlFor="cvc" className="text-sm">
            CVC
          </label>
          <Cleave
            id="cvc"
            options={{ blocks: [3], numericOnly: true }}
            type="password"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className="w-full border border-[var(--color-border)] p-2 rounded focus:outline-none focus:ring-0 placeholder:text-sm pr-8"
          />

          <BsFillInfoCircleFill className="absolute top-1/2 right-2 text-gray-400 text-xl" />
        </div>
      </div>

      <PayButton isProcessing={isProcessing} onClick={() => {}}>
        Start Trial
      </PayButton>
    </form>
  );
};

export default PaymentForm;
