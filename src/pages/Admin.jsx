import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase.js";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";

const MySwal = withReactContent(Swal);

function Admin() {
  const [products, setProducts] = useState([]);

  const productsCollection = collection(db, "bookstore");

  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    console.log(data.docs);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteProduct = async (id) => {
    const ProductDoc = doc(db, "bookstore", id);
    await deleteDoc(ProductDoc);
    getProducts();
  };

  const confirmDelete = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="px-2 h-full bg-sky-100 m-12  ">
        <div className="row">
          <div className="col">
            <div className="grid gap-2 text-center p-2 ">
              <Link
                to={"/admin/create"}
                className="uppercase justify-items-center bg-green-400 hover:bg-green-300 p-4 rounded-xl font-bold  text-cyan-50"
              >
                crear
              </Link>
              <table className="grid-cols-3">
                <thead className="bg-slate-400">
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>image</th>
                    <th>Genre</th>
                    <th>Offer</th>
                    <th>Author</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="p-2 bg-orange-100 text-center justify-center items-center">
                  {products.map((product) => (
                    <tr key={product.id} className="">
                      <td className="border-2 border-cyan-600">
                        {product.title}
                      </td>
                      <td className="border-2 border-cyan-600 p-2">
                        {product.description.slice(0, 25)} ...
                      </td>
                      <td className="border-2 border-cyan-600">
                        {product.img}
                      </td>
                      <td className="border-2 border-cyan-600">
                        {product.genre}
                      </td>
                      <td className="border-2 border-cyan-600">
                        {product.offers}
                      </td>
                      <td className="border-2 border-cyan-600">
                        {product.author}
                      </td>
                      <td className="border-2 border-cyan-600">
                        {product.stock}
                      </td>
                      <td className="p-2 flex justify-center items-center gap-2 border border-cyan-600">
                        <Link
                          to={`/admin/edit/${product.id}`}
                          className="text-blue-700"
                        >
                          <BiEdit className="text-5xl" />
                        </Link>
                        <button
                          onClick={() => {
                            confirmDelete(product.id);
                          }}
                          className="p-2 text-red-500  "
                        >
                          <MdOutlineDeleteForever className="text-5xl" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
