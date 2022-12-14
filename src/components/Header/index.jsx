import { useState } from "react";
import styles from "../styles.module.css";
import { BsSearch } from "react-icons/bs";

function Header({ produtos, setProdutos }) {
  const [value, setValue] = useState("");
  const [resultado, setResultado] = useState(false);
  function filtro() {
    const produtosFiltrados = produtos.filter(
      (elem) =>
        elem.name.toLowerCase().includes(value.toLowerCase()) ||
        elem.category.toLowerCase().includes(value.toLowerCase())
    );
    setProdutos(produtosFiltrados);
    setResultado(true);

    value === "" && setProdutos(produtos);
    value === "" && setResultado(false);
  }
  return (
    <>
      <header className={styles.header}>
        <img
          src="https://i.pinimg.com/736x/42/55/d1/4255d1c0d7fa86197b5f40bff5ce4dfb.jpg"
          alt=""
          className={styles.imgHeader}
        />
        <section className={styles.sectionHeader}>
          <input
            type="text"
            className={styles.inputHeader}
            placeholder="Digite aqui"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button className={styles.buttonHeader} onClick={filtro}>
            <BsSearch className={styles.iconHeader} />
          </button>
        </section>
      </header>
      {resultado && (
        <section className={styles.resultados}>
          Resultados para: <span className={styles.texto}>{value}</span>
        </section>
      )}
    </>
  );
}
export default Header;
