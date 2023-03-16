import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Swal from "sweetalert2";

function Create() {
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [offer, setOffer] = useState(false);
  const [author, setAuthor] = useState("");
  const [img, setImg] = useState("");

  const navigate = useNavigate();

  const productCollection = collection(db, "bookstore");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(productCollection, {
      title: title,
      description: description,
      img: img,
      genre: genre,
      offer: offer,
      author: author,
      stock: stock,
    });
    navigate("/admin");
  };
  const handleCreate = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El producto se creo correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="flex py-20 w-[350px] h-full mx-auto justify-center items-center">
        <div className="row">
          <div className="p-4 text-center ">
            <h1 className="bg-sky-100 p-8 text-slate-600 uppercase ">
              Create Form
            </h1>
            <form
              onSubmit={store}
              className="h-full flex flex-col gap-4 p-6 bg-blue-400 justify-center items-center "
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
                  Nombre de la imagen :
                </label>
                <input
                  type="text"
                  name="title"
                  id=""
                  className="rounded-md p-2 bg-slate-100 text-zinc-800"
                  value={img}
                  onChange={(e) => {
                    setImg(e.target.value);
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
                className="p-4 bg-emerald-600 rounded-lg text-slate-50 font-bold uppercase w-40 m-auto"
                onClick={handleCreate}
              >
                crear
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
