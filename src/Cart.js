import { React } from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

export default function Cart() {
  const {
    state: { cart, total },
    clearCart,
  } = useGlobalContext();

  return (
    <>
      <div className="flex flex-col">
        {cart.map((cartItem) => {
          return (
            <div key={cartItem.id}>
              <CartItem cartItem={cartItem} />
            </div>
          );
        })}
        <hr className="mt-5 h-1 bg-red-500 " />
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold tracking-widest">Total</h1>
          <h1 className="text-2xl font-bold tracking-widest">${total}</h1>
        </div>
        <div className="flex justify-center mb-10">
          <button className="outline-dotted outline-2 outline-red-400 font-bold p-1 tracking-widest transition ease-out delay-150 hover:scale-105 hover:bg-red-300 duration-300" onClick={()=>clearCart()}>Clear cart</button>
        </div>
      </div>
    </>
  );
}
