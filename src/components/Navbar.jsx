import React from "react";
import { NavLink } from "react-router-dom";
import { ImPriceTags } from "react-icons/im";
import { BsCart2 } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <header className=" m-auto px-7 h-18 border-b border-blue-700  items-center">
        <nav className="flex m-auto px-4 py-4 justify-between gap-4 text-black sticky max-w-screen-xl text-center">
          <NavLink to={"/"} className="flex gap-2 text-center items-center">
            <span className="text-center text-blue-700">
              <ImPriceTags size={20} />
            </span>
            <h1 className="font-bold text-3xl text-blue-500">BookStore</h1>
          </NavLink>
          {/* aca se crea un map para para recorrer los diferentes links  */}
          <ul className="flex items-center text-center">
            <li className="text-base mx-6">Home</li>
            <li className="text-base mx-6">Comic</li>
            <li className="text-base mx-6">Drama</li>
            <li className="text-base mx-6">Romantica</li>
          </ul>
          {/* Aca va el carrito de compras */}
          <ul className="">
            <li className="flex">
              <span>0</span>
              <BsCart2 size={25} />
            </li>
          </ul>

          {/* //TODO aca se crea el botton burger */}

          <ul className="hidden">
            <li className="">
              <button>burger</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
