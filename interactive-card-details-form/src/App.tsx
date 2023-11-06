import { useState } from "react";
import "./App.css";

const formatCardNumber = (cardNumber: string) => {
  const result = cardNumber
    .split("")
    .map((c, i) => (i && i % 4 === 0 ? " " + c : c));

  return result;
};

function App() {
  const [cardholderName, setCardholderName] = useState("Jane Appleseed");
  const [cardNumber, setCardNumber] = useState("0000000000000000");
  const [expiryMonth, setExpiryMonth] = useState("00");
  const [expiryYear, setExpiryYear] = useState("00");
  const [cvc, setCvc] = useState("000");

  return (
    <div className="flex items-center">
      <div className="min-h-screen w-5/12 bg-[url('bg-main-desktop.png')] bg-cover flex items-center">
        <div className="absolute flex flex-col space-x-2 space-y-3">
          <div className="p-4 left-24 relative h-[150px] w-[280px] text-white rounded-md bg-[url('bg-card-front.png')] bg-cover">
            <div className="flex gap-x-4 items-center">
              <div className="rounded-full w-8 h-8 bg-white"></div>
              <div className="rounded-full w-4 h-4 border-white border-[1px]"></div>
            </div>

            <div className="mt-10">
              <span>{formatCardNumber(cardNumber)}</span>
            </div>
            <div className="mt-2 text-xs flex justify-between">
              <span>{cardholderName}</span>
              <span>
                {expiryMonth}/{expiryYear}
              </span>
            </div>
          </div>
          <div className="p-4 left-36 relative text-white h-[150px] w-[280px] rounded-md bg-[url('bg-card-back.png')] bg-cover">
            <p className="mt-[48px] ml-52">{cvc}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse space-x-2">
        <form>
          <p>Cardholder Name</p>
          <input
            className="border-slate-200 border rounded-sm"
            onChange={(e) => setCardholderName(e.target.value)}
          />
          <p>Card Number</p>
          <input
            className="border-slate-200 border rounded-sm"
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <div className="">
            <p>Exp. Date (MM/YY)</p>
            <input
              className="border-slate-200 border rounded-sm w-10 mr-2"
              onChange={(e) => setExpiryMonth(e.target.value)}
            />
            <input
              className="border-slate-200 border rounded-sm w-10"
              onChange={(e) => setExpiryYear(e.target.value)}
            />
            <span>CVC</span>
            <input
              className="border-slate-200 border rounded-sm"
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
          <button type="submit" onClick={() => {}}>
            Submit
          </button>
        </form>
        <div className="p-10"></div>
      </div>
    </div>
  );
}

export default App;