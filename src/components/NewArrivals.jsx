import React from "react";
import Principe from "../assets/img/principe.jpeg";

function NewArrivals() {
  return (
    <div className="p-0 md:p-4 max-w-screen-xl mx-auto bg-blue-400 rounded-tl-lg">
      <div className=" mx-auto  max-w-screen-lg  flex-cols md:flex justify-center items-center  ">
        <div className=" ">
          <img
            src={Principe}
            alt="news arrivels"
            className="w-[300px] mx-auto p-0 md:p-2 rounded-lg object-cover border rounded-b-full "
          />
        </div>

        <div className="flex flex-col  p-0 md:p-5 w-[300px] md:w-2/6 mx-auto ">
          <h1 className="text-white text-3xl underline-offset-2">Title Book</h1>
          <p className="text-white text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit .
            Temporibus, earum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cumque, delectus.
          </p>
          <button className="button-light w-[300px] mb-5">Leer mas </button>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
