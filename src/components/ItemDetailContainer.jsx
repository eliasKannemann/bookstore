import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { arrProducts } from "../data/dataBase";
import ItemListContainer from "./ItemListContainer";

function ItemDetailContainer() {
  const { detailId } = useParams();
  const [item, setItem] = useState({});

  const getItem = (id) => {
    return new Promise((resolve, reject) => {
      const product = arrProducts.find((item) => item.id === parseInt(id));
      resolve(product);
    });
  };

  useEffect(() => {
    const getProduct = async () => {
      const productItem = await getItem(detailId);
      setItem(productItem);
    };
    getProduct();
  }, [detailId]);

  return (
    <>
      <div className="p-8 max-w-screen-xl m-auto h-full">
        <h1 className="py-4 font-semibold">Detalle de {item.title} :</h1>
        <ItemDetail item={item} />
      </div>
      <ItemListContainer greeting={"Mas vendido"} />
    </>
  );
}

export default ItemDetailContainer;
