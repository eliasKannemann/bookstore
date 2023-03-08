import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  /* const {addProduct } = useContext(CartContext) */

  const [quantity, setQuantity] = useState(10);

  const onAdd = (count) => {
    /*  addProduct(item, count) */
    setQuantity(count);
  };

  return (
    <div className="w-11/12  m-auto flex p-10 justify-between gap-4 bg-slate-50">
      <div className="w-96 px-4">
        <img
          src={item.pictureUrl}
          alt={item.title}
          className="w-auto p-2 object-cover"
        />
      </div>
      <div className="px-6 w-100 m-auto">
        <div className="p-4 bg-slate-50 flex flex-col gap-2 justify-center items-center  w-auto">
          <h4 className="text-3xl capitalize">{item.title}</h4>
          <p className="w-96">{item.sinopsis}</p>
          <span className="uppercase text-sm space-x-2 ">{item.categoria}</span>
          <h5 className="italic text-center text-2xl px-3 rounded-lg text-green-600 border border-yellow-500">
            $ {item.price}
          </h5>
          <ItemCount initial={1} stock={10} onAdd={onAdd} />
          {quantity > 0 && (
            <Link to="/cart">
              <button className="button-books ">Ir al Carrito</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
