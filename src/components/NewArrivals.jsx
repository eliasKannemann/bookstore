import React from "react";
import Principe from "../assets/img/principe.jpeg";

function NewArrivals() {
  return (
    <div className="p-4 max-w-screen-xl m-auto bg-blue-400 rounded-tl-lg">
      <div className=" mx-auto  max-w-screen-lg  flex justify-center items-center  ">
        <div className="flex m-auto p-1  text-center object-center relative  ">
          <img
            src={Principe}
            alt="news arrivels"
            className="h-96 w-100 p-2 rounded-lg object-cover border rounded-b-full z-10"
          />
        </div>

        <div className="flex flex-col justify-start p-5 w-2/6 mx-auto gap-5">
          <h1 className="text-white text-3xl underline-offset-2">Title Book</h1>
          <p className="text-white text-lg">
            Lorem ipsum dolor sit amet, consectetur
            <strong>adipisicing elit </strong> . Temporibus, earum. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Cumque, delectus.
          </p>
          <button className="button-light">Leer mas </button>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
