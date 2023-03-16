import React from "react";
import imgHero from "../assets/img/img-hero.jpg";

import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-white">
      <main className="max-w-screen-xl  pl-4 md:pl-14 m-auto h-[75vh] border-l border-slate-300 ">
        <div className="w-full flex items-center  text-slate-900 ">
          <div className="flex items-center justify-center drop-shadow-gray  mb-11 ">
            <img
              src={imgHero}
              alt="products"
              className="h-100 rounded-b-full border border-blue-200  w-100 object-contain lg:h-[75vh] md:h-[57vh] hidden md:block sm:object-cover  object-left "
            />
          </div>
          <div className="flex-col w-auto justify-center text-center m-auto px-6">
            <h1 className="p-1 font-semibold text-3xl text-gray-700 filter drop-shadow-lg md:font-bold md:text-7xl">
              BookStore
            </h1>
            <p className="p-2 text-1xl filter drop-shadow-lg">
              Encontra el libro que buscas{" "}
            </p>
            <button className="p-4 mt-6 button-books text-xl uppercase">
              <Link to={"/catalog"}>Ver mas</Link>
            </button>
          </div>
          <div className="h-[50vh] w-0 border border-slate-300 object mr-4 flex flex-col justify-center gap-6 ">
            <div className="grid relative text-center gap-3 ">
              <span className="w-100 absolute bottom-2.5 -left-4 bg-blue-100 p-1 border  rounded-full">
                <BsFacebook size={25} />
              </span>
              <span className="w-100 absolute top-2.5 p-1 -left-4 bg-blue-100 border rounded-full ">
                <BsInstagram size={25} />
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
