import React from "react";
import { useGlobalContext } from "./context";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
export default function CartItem({ cartItem }) {
  const { increase, decrease, remove } = useGlobalContext();

  return (
    <div>
      <article className="flex mb-2 w-auto">
        <div className="mb-5 flex justify-between lg:space-x-96">
          <div className="flex">
            <img
              src={cartItem.img}
              className="object-cover w-[5rem] h-[5rem]"
            />
            <div className="flex flex-col w-[10rem]">
              <h1 className="font-bold capitalize">{cartItem.title}</h1>
              <h2 className="font-bold flex-col text-sm text-blue-500">
                ${cartItem.price !== undefined ? cartItem.price : 0.0}
              </h2>
              <button
                className="flex-col font-bold outline outline-1 w-[4.5rem] p-1 mt-2 transition ease-in-out delay-150 hover:scale-105 hover:bg-blue-500 duration-300"
                onClick={() => remove(cartItem.id)}
              >
                Remove
              </button>
            </div>
          </div>
          <div className="flex flex-col self-center text-blue-500">
            <button>
              <BiUpArrow size={30} onClick={() => increase(cartItem.id)} />
            </button>
            <h1 className="self-center text-xl text-black">
              {cartItem.amount}
            </h1>
            <button>
              <BiDownArrow size={30} onClick={() => decrease(cartItem.id)} />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
