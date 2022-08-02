import ProductsList from "./components/ProductsList";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [productsPesquisa, setProductsPesquisa] = useState([]);
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
        setProductsPesquisa(response);
      });
  }, []);
  return (
    <div className="App">
      <ToastContainer />
      <Header produtos={products} setProdutos={setProductsPesquisa} />
      <ProductsList list={productsPesquisa} />
    </div>
  );
}

export default App;
