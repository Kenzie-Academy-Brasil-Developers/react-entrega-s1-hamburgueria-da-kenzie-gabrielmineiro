import { useState } from "react";
import Product from "../Product";
import styles from "../styles.module.css";
import Cart from "../Cart";

function ProductsList({ list }) {
  const [produto, setProduto] = useState([]);
  return (
    <div className={styles.containerProdutosCarrinho}>
      <ul className={styles.ulList}>
        {list.map((product) => (
          <Product
            key={product.id}
            list={product}
            produto={produto}
            setProduto={setProduto}
          />
        ))}
      </ul>
      <Cart
        key={produto.id}
        produtosCarrinho={produto}
        setProduto={setProduto}
      />
    </div>
  );
}
export default ProductsList;
