import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { arrProducts } from "../data/dataBase";
import ItemList from "./ItemList";
import { AiOutlineRight } from "react-icons/ai";

function ItemListContainer({ greeting }) {
  const { genreProduct } = useParams();
  const [products, setProducts] = useState([]);

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arrProducts);
    }, 2000);
  });

  useEffect(() => {
    promesa.then((result) => {
      if (!genreProduct) {
        setProducts(result.slice(0, 4));
      } else {
        const newList = result.filter((item) => item.category === genreProduct);
        setProducts(newList);
      }
    });
  }, [genreProduct]);

  return (
    <div className="py-10  max-w-screen-xl m-auto">
      <div className="flex justify-between p-4">
        <h1 className="ml-10 pl-2 capitalize">{greeting}</h1>
        <p className="flex justify-center items-center text-yellow-600 mx-10 pr-2 capitalize">
          view all <AiOutlineRight size={18} />
        </p>
      </div>
      <div className=" p-4 m-auto">
        <ItemList items={products} />
      </div>
    </div>
  );
}

export default ItemListContainer;
