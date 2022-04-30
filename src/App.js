import Home from "./components/Home";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const cartsRes = await fetch("https://fakestoreapi.com/carts");
     const data = await response.json();
    const dataCart = await cartsRes.json();
    setProducts(data);
    setCart(dataCart);
  }

  useEffect(() => {
    console.log("useEffect run");
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/products"
          element={<Products Products={products} loading={loading} />}
        />
        <Route
          path="/products/:id"
          element={<ProductDetail Products={products} />}
        />
        <Route path="/cart" element={<Cart CartData={ cart}/>} />
      </Routes>
    </div>
  );
}

export default App;
