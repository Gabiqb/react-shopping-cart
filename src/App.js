import { RingLoader } from "react-spinners";
import "./App.css";
import Cart from "./Cart";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";

function App() {
  const {
    state: { loading, cart },
  } = useGlobalContext();

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-auto w-screen">
        {loading === true ? (
          <div className="flex flex-col self-center mt-32">
            <RingLoader size={100} />
          </div>
        ) : cart.length > 0 ? (
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl self-center mt-3 tracking-widest">
              YOUR CART
            </h1>
            <div className="drop-shadow self-center mt-5">
              <Cart />
            </div>
          </div>
        ) : (
          <div className="font-bold text-3xl self-center mt-5">
            No items in the cart.
          </div>
        )}
      </div>
    </>
  );
}

export default App;
