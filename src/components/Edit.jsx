import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

function Edit() {
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [offer, setOffer] = useState(false);
  const [author, setAuthor] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const product = doc(db, "bookstore", id);

    const data = {
      title: title,
      description: description,
      genre: genre,
      offer: offer,
      author: author,
      stock: stock,
    };
    await updateDoc(product, data);

    navigate("/admin");
  };

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, "bookstore", id));
    if (product.exists()) {
      setTitle(product.data().title);
      setDescription(product.data().description);
      setGenre(product.data().genre);
      setOffer(product.data().offer);
      setStock(product.data().stock);
      setAuthor(product.data().author);
    } else {
      console.log("Este producto no existe");
    }
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  return (
    <>
      <div className="flex justify-center py-20">
        <div className="row">
          <div className="col p-2">
            <h1 className="uppercase p-4 mb-2 rounded-md bg-slate-100 text-center font-bold">
              Edit
            </h1>
            <form
              onSubmit={update}
              className="bg-slate-300 h-full flex flex-col gap-8 p-8 justify-center "
            >
              <div className="">
                <label htmlFor="" className="p-4 font-semibold">
                  Title :
                </label>
                <input
                  type="text"
                  name="title"
                  id=""
                  className="rounded-md p-2 bg-slate-100 text-zinc-800"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="w-[300px]">
                <label htmlFor="" className="pb-4 mb-2 font-semibold">
                  Description :
                </label>
                <br></br>
                <textarea
                  type="text"
                  name="description"
                  id=""
                  className="rounded-md w-[300px] bg-slate-100 text-zinc-800 "
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <label htmlFor="" className="p-4 font-semibold">
                  Genre :
                </label>
                <input
                  type="text"
                  name="title"
                  id=""
                  className="rounded-md p-2 bg-slate-100 text-zinc-800"
                  value={genre}
                  onChange={(e) => {
                    setGenre(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <label htmlFor="" className="p-4 font-semibold">
                  Offer :
                </label>
                <input
                  type="text"
                  name="title"
                  id=""
                  className="rounded-md p-2 bg-slate-100 text-zinc-800"
                  value={offer}
                  onChange={(e) => {
                    setOffer(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <label htmlFor="" className="p-4 font-semibold">
                  Author :
                </label>
                <input
                  type="text"
                  name="title"
                  id=""
                  className="rounded-md p-2 bg-slate-100 text-zinc-800"
                  value={author}
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                />
              </div>
              <div className="">
                <label htmlFor="" className="p-4 font-semibold">
                  Stock :
                </label>
                <input
                  type="number"
                  name="stock"
                  id=""
                  className="rounded-md p-2 bg-slate-100 text-zinc-800"
                  value={stock}
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                />
              </div>
              <button
                type={"submit"}
                className="p-4 bg-sky-500 rounded-lg text-slate-50 font-bold uppercase w-40 m-auto "
              >
                editar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
