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

  function handleClick(e: React.FormEvent): void {
    e.preventDefault();
  }

  return (
    <div>
      <div className="bg-[url('bg-main-desktop.png')] bg-cover w-full h-[250px] p-2 px-10">
        <div className="w-full md:w-1/2 flex flex-col md:flex-col-reverse py-[26px] items-center justify-center">
          <div className="relative left-6">
            <img src="/bg-card-back.png" />
            <div className="absolute top-[68px] right-8 text-[10px]/[17px] font-thin  text-white">
              {cvc}
            </div>
          </div>
          <div className="relative right-6 bottom-[70px]">
            <div className="absolute top-[20px] left-[20px] rounded-full w-[30px] h-[30px] bg-white"></div>
            <div className="absolute top-[30px] left-[60px] rounded-full w-[12px] h-[12px] border-white border-[1px]"></div>
            <img src="/bg-card-front.png" />
            <div className="absolute top-0 w-full h-full flex-col tracking-widest flex items-center justify-center text-white">
              <span className="mt-10">{formatCardNumber(cardNumber)}</span>
              <div className="mt-2 w-full flex justify-between px-5 text-[10px]/[17px]">
                <span className="ml-1">{cardholderName.toUpperCase()}</span>
                <span>
                  {expiryMonth}/{expiryYear}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto mt-16 flex justify-center px-6">
        <form className="w-full">
          <div className="flex flex-col w-full my-5">
            <label className="uppercase text-xs/[17px] pb-2">
              Cardholder Name
            </label>
            <input
              className="border-slate-200 border rounded-md leading-10 px-2"
              placeholder="e.g. Jane Appleseed"
              onChange={(e) => setCardholderName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full my-5">
            <label className="uppercase text-xs/[17px] pb-2">
              Cardholder Number
            </label>
            <input
              className="border-slate-200 border rounded-md leading-10 px-2"
              placeholder="e.g. 1234 5678 9123 0000"
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="flex w-full my-5 gap-2">
            <div className="flex flex-col w-auto">
              <label className="uppercase text-xs/[17px] pb-2">
                Exp. Date (MM/YY)
              </label>
              <div className="flex gap-x-2">
                <input
                  className="border-slate-200 border rounded-md w-14 leading-10 text-center"
                  placeholder="MM"
                  onChange={(e) => setExpiryMonth(e.target.value)}
                />
                <input
                  className="border-slate-200 border rounded-md leading-10 w-14 text-center"
                  placeholder="YY"
                  onChange={(e) => setExpiryYear(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col flex-grow w-auto ">
              <label className="uppercase text-xs/[17px] pb-2">CVC</label>
              <input
                className="border-slate-200 border rounded-md w-full leading-10 px-2"
                placeholder="e.g. 123"
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
          </div>
          <button
            className="w-full bg-slate-500 p-4 rounded-md text-white"
            type="submit"
            onClick={handleClick}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>

    /* <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <div className=" bg-[url('bg-card-front.png')] w-[447px] h-[245px]">
          <div className="flex gap-x-4 items-center">
            <div className="rounded-full w-8 h-8 bg-white"></div>
            <div className="rounded-full w-4 h-4 border-white border-[1px]"></div>
          </div>
        </div>
      </div>
      <div className=" w-1/2 items-center flex">
        <div className="w-full flex flex-col items-center">
          <div className=""></div>
          <div>
            <div className="m-2  bg-[url('bg-card-back.png')] w-[447px] h-[245px]" />
          </div>
        </div>
      </div> */

    /*<div className="flex w-[375px] md:w-[1440px] h-screen bg-red-500 bg-[url('bg-main-desktop.png')] bg-no-repeat">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <div className=" bg-[url('bg-card-front.png')] w-[447px] h-[245px]">
          <div className="flex gap-x-4 items-center">
            <div className="rounded-full w-8 h-8 bg-white"></div>
            <div className="rounded-full w-4 h-4 border-white border-[1px]"></div>
          </div>
        </div>
      </div>
    </div>
     <div className=" w-1/2 items-center flex">
        <div className="w-full flex flex-col items-center">
          <div className=""></div>
          <div>
            <div className="m-2  bg-[url('bg-card-back.png')] w-[447px] h-[245px]" />
          </div>
        </div>
      </div>
    </div> */

    /* <div className="flex items-center justify-center bg-blue">
      <div className="min-h-screen w-2/4 bg-[url('bg-main-desktop.png')] bg-cover flex items-center">
        <div className="absolute flex flex-col space-x-2 space-y-3">
          <div className="p-4 left-24 relative h-[150px] w-[280px] text-white rounded-md bg-[url('bg-card-front.png')] bg-cover">
            <div className="flex gap-x-4 items-center">
              <div className="rounded-full w-8 h-8 bg-white"></div>
              <div className="rounded-full w-4 h-4 border-white border-[1px]"></div>
            </div>

            <div className="mt-6 flex justify-center">
              <span className="tracking-widest">
                {formatCardNumber(cardNumber)}
              </span>
            </div>
            <div className="mt-2 text-xs flex justify-between">
              <span className="ml-1">{cardholderName.toUpperCase()}</span>
              <span>
                {expiryMonth}/{expiryYear}
              </span>
            </div>
          </div>
          <div className="py-[65px] px-[30px] left-36 relative text-white h-[150px] w-[280px] rounded-md bg-[url('bg-card-back.png')] bg-cover">
            <div className="h-[21px] w-[222px] px-1 flex justify-end items-center">
              <p>{cvc}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse space-x-2 bg-red-500">
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
            Confirm
          </button>
        </form>
        <div className="p-10"></div>
      </div>
    </div> */
  );
}

export default App;
