import React from "react";
import { NavLink } from "react-router-dom";
import { ImPriceTags } from "react-icons/im";
import { BsCart2 } from "react-icons/bs";

function Navbar() {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-200">
      <header className=" m-auto px-7 h-18  border-b border-blue-300  items-center">
        <nav className="flex  m-auto px-4 py-4 justify-between gap-4 text-slate-200 sticky max-w-screen-xl text-center">
          <NavLink
            to={"/"}
            className="px-2 flex gap-2 text-center items-center"
          >
            <span className="text-center text-slate-300">
              <ImPriceTags size={20} />
            </span>
            <h1 className="font-semibold text-3xl text-slate-600">BookStore</h1>
          </NavLink>
          {/* aca se crea un map para para recorrer los diferentes links  */}
          <ul className="flex items-center text-center">
            <li className="text-base mx-6 cursor-pointer">Home</li>
            <li className="text-base mx-6">Comic</li>
            <li className="text-base mx-6">Drama</li>
            <li className="text-base mx-6">Romantica</li>
          </ul>
          {/* Aca va el carrito de compras */}
          <ul className="">
            <li className="flex px-2">
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
    </div>
  );
}

export default Navbar;
