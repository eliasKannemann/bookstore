import React from "react";
import imgHero from "../assets/img/img-hero.jpg";

function Hero() {
  return (
    <>
      <main className="max-w-screen-xl p-14  m-auto h-[95vh] border-l">
        <div className="w-full flex items-center  text-slate-900 ">
          <div className="flex items-center justify-center drop-shadow-gray  mb-11">
            <img
              src={imgHero}
              alt="products"
              className="h-[85vh] rounded-b-full border border-blue-700  w-full object-contain lg:h-[75vh] md:h-[57vh] sm:h-[35] sm:object-contain  object-left "
            />
          </div>
          <div className="flex-col w-auto justify-center text-center m-auto px-6">
            <h1 className="p-1 font-bold text-7xl text-gray-600 filter drop-shadow-lg">
              BookStore
            </h1>
            <p className="p-2 text-3xl filter drop-shadow-lg">
              Encontra el libro que buscas{" "}
            </p>
            <button className="p-4 mt-6 button-books text-xl uppercase">
              Ver mas
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
