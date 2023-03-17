import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ImPriceTags } from "react-icons/im";

import CartWidget from "./CartWidget";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-200">
      <header className=" m-auto px-1 md:px-7 h-18  border-b border-blue-300  items-center">
        <nav className="flex  m-auto px-1 md:px-4 py-1 md:py-4 justify-between gap-4 text-slate-200 sticky max-w-screen-xl text-center">
          {/* aca se crea un map para para recorrer los diferentes links  */}

          {/* //TODO aca se crea el botton burger */}

          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <NavLink
            to={"/"}
            className={` px-2 text-center items-center ${
              navbar ? "hidden" : ""
            } `}
          >
            <h1 className="flex font-bold text-2xl md:text-3xl text-slate-600 hover:text-blue-100">
              <ImPriceTags size={20} />
              BookStore
            </h1>
          </NavLink>
          <div className={`mb-10  md:mb-0 ${navbar ? "h-[85vh] " : ""}`}>
            <div
              className={`flex-1 justify-self-center pt-2 mt-8 md:block md:pb-0 md:mt-0  ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-200 md:text-gray-600 hover:text-blue-600">
                  <Link to="/about">Home</Link>
                </li>
                <li className=" text-gray-200 md:text-gray-600 hover:text-blue-600">
                  <Link to="/Catalog">Catalogue</Link>
                </li>
                <li className="text-gray-200 md:text-gray-600 hover:text-blue-600">
                  <Link to="/">About US</Link>
                </li>
                <li className="text-gray-200 md:text-gray-600 hover:text-blue-600">
                  <Link to="/">Contact US</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Aca va el carrito de compras */}
          <CartWidget />
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
