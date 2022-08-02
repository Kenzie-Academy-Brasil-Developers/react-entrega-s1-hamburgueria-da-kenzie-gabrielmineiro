import styles from "../styles.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Cart({ produtosCarrinho, setProduto }) {
  function remover(id) {
    setProduto(produtosCarrinho.filter((elemen) => elemen.id !== id));
  }
  function removerTodos() {
    setProduto([]);
  }

  let arr = [];
  for (let i = 0; i < produtosCarrinho.length; i++) {
    arr.push(produtosCarrinho[i].price);
  }
  let valorTotal = arr.reduce((old, current) => old + current, 0);
  return (
    <div className={styles.carrinho}>
      <section className={styles.tituloCarrinho}>
        <AiOutlineShoppingCart className={styles.iconCarrinho} />
        Carrinho de compras
      </section>
      {produtosCarrinho.length === 0 ? (
        <section className={styles.carrinhoVazio}>
          Seu carrinho de compras está vazio
        </section>
      ) : (
        <>
          <div className={styles.divScroll}>
            <ul>
              {produtosCarrinho.map((produto) => (
                <li key={produto.id}>
                  <section className={styles.containerImg}>
                    <img src={produto.img} alt="" />
                  </section>
                  <section className={styles.descricaoCarrinho}>
                    <p className={styles.carrinhoNome}>{produto.name}</p>
                    <p className={styles.carrinhoCategoria}>
                      {produto.category}
                    </p>
                  </section>
                  <button onClick={() => remover(produto.id)}>Remover</button>
                </li>
              ))}
            </ul>
          </div>
          <section className={styles.valor}>
            <section className={styles.totalPreco}>
              <p className={styles.total}>Total</p>
              <p className={styles.preco}>R${valorTotal.toFixed(2)}</p>
            </section>
            <button onClick={removerTodos}>Remover Todos</button>
          </section>
        </>
      )}
    </div>
  );
}
export default Cart;
