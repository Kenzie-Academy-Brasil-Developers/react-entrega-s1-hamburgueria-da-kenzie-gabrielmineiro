import styles from "../styles.module.css";
function Header() {
  return (
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
        />
        <button className={styles.buttonHeader}>Pesquisar</button>
      </section>
    </header>
  );
}
export default Header;
