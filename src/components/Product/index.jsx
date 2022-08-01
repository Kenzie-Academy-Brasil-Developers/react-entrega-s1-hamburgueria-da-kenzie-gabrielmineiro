import styles from "../styles.module.css";
function Product({ list, produto, setProduto }) {
  return (
    <>
      <li className={styles.liList}>
        <section className={styles.sectionImgList}>
          <img src={list.img} alt="" className={styles.imgList} />
        </section>

        <section className={styles.sectionDescription}>
          <h3>{list.name}</h3>
          <span>{list.category}</span>
          <p>R${list.price}</p>
          <button onClick={() => setProduto([...produto, list])}>
            Adicionar
          </button>
        </section>
      </li>
    </>
  );
}
export default Product;
