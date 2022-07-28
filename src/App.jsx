import "./App.css";
import ProductsList from "./components/ProductsList";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);
  return (
    <div className="App">
      <ProductsList list={products} />
    </div>
  );
}

export default App;
