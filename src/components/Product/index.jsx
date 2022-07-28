import styles from "../styles.module.css";
function Product({ list }) {
  return (
    <li className={styles.liList}>
      <section className={styles.sectionImgList}>
        <img src={list.img} alt="" className={styles.imgList} />
      </section>

      <section className={styles.sectionDescription}>
        <h3>{list.name}</h3>
        <span>{list.category}</span>
        <p>R${list.price}</p>
        <button>Adicionar</button>
      </section>
    </li>
  );
}
export default Product;
