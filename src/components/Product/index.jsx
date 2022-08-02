import styles from "../styles.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ list, produto, setProduto }) {
  function verifica(lista, produtoAtual) {
    return lista.includes(produtoAtual);
  }
  function adiciona() {
    setProduto([...produto, list]);
  }
  function handleSubmit(event) {
    verifica(produto, list)
      ? toast.error("O produto já foi adicionado ao carrinho")
      : adiciona();
  }

  return (
    <>
      <li className={styles.liList}>
        <section className={styles.sectionImgList}>
          <img src={list.img} alt="" className={styles.imgList} />
        </section>

        <section className={styles.sectionDescription}>
          <h3>{list.name}</h3>
          <span>{list.category}</span>
          <p>R${list.price.toFixed(2)}</p>
          <button onClick={handleSubmit}>Adicionar</button>
        </section>
      </li>
    </>
  );
}
export default Product;
