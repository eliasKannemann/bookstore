import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";

function CartWidget() {
  const [actived, setActived] = useState(false);
  const handleClick = () => {
    setActived(!actived);
  };
  return (
    <div className="">
      <button
        className="flex relative px-2 py-1 rounded-md font-medium outline-none focus:outline-none hover:bg-blue-400"
        onClick={handleClick}
      >
        <BsCart2 size={25} />
        <span className="absolute bottom-2.5 -right-2 w-[35px] h-[25px] rounded-full text-red-400">
          0
        </span>
      </button>
      <div
        className="absolute bg-slate-100 right-2 rounded-md p-2 "
        style={{ display: `${actived ? "initial" : "none"}` }}
      >
        <ul className="space-y-2 lg:w-48">
          <li className="flex p-2 text-gray-500 rounded-md ">
            {" "}
            carrito vacio!
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CartWidget;
