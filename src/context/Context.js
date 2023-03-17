import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.js";
import { cartReducer } from "./Reducers.js";

const Cart = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "bookstore");

    const getProducts = async () => {
      const data = await getDocs(productsCollection);
      /* console.log(data.docs); */
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();
  }, []);
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
