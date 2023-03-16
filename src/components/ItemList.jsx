import React from "react";
import { Link } from "react-router-dom";

function ItemList({ items }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-auto max-w-screen-xl">
        {items.map((product) => (
          <div
            key={product.id}
            className="h-96 border border-slate-100 shadow-lg"
          >
            <img
              src={product.pictureUrl}
              alt={product.title}
              className="w-full h-2/3  object-cover"
            />
            <div className="flex flex-col justify-center text-center gap-3 pb-2 pt-1 mb-1">
              <h1>{product.title.slice(0, 6)}</h1>

              <p>$ {product.price},00</p>
              <Link to={`/item/${product.id}`}>
                <button className="button-light py-2 "> ver details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
