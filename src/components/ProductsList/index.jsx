import Product from "../Product";
import styles from "../styles.module.css";

function ProductsList({ list }) {
  return (
    <ul className={styles.ulList}>
      {list.map((product) => (
        <Product key={product.id} list={product} />
      ))}
    </ul>
  );
}
export default ProductsList;
