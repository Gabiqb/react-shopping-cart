import React from "react";
import { BsHandbag } from "react-icons/bs";
import { useGlobalContext } from "./context";
export default function Navbar() {
  const {
    state: { amount }, //amount of the cart items
  } = useGlobalContext();

  return (
    <div className="w-screen lg:w-full bg-blue-500 flex justify-between">
      <h1 className="ml-20 text-3xl mt-5 mb-5 font-bold font-sans">
        Handled with reducer
      </h1>
      <div className="mr-20 flex self-center">
        <div className="relative">
          <BsHandbag size={60} />
          <div className="absolute right-[1.15rem] top-[1.8rem] m-auto rounded-full bg-yellow-400 w-6 h-6">
            <div className="flex flex-col items-center font-bold">{amount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
