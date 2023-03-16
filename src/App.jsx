import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Admin from "./pages/Admin";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route
            path="/product/:genreProduct"
            element={<ItemListContainer />}
          />
          <Route path="/item/:detailId" element={<ItemDetailContainer />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/create" element={<Create />} />
          <Route path="/admin/edit/:id" element={<Edit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
