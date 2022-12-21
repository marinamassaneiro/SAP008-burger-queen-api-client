import './check.css';
import { getProductName } from '../../helpers/getProductName';

export function Itens({ onClickDelete, onClickAdd, product }) {
  return (
    <div className="itens-count">
      <p> {getProductName(product)} </p>
      <p> R$ {product.price} </p>
      <div className='counter'><button onClick={onClickDelete} >-</button>{product.qtd}<button onClick={onClickAdd} >+</button></div>
      <p>R$ {product.price * product.qtd}</p>
    </div>
  )
}

export function Check({ itens, client, table, counter, onClick }) {
  return (
    <section className="check">
      <div className="header-count">
        <p>Cliente:{client}</p>
        <p>Mesa:{table}</p>
      </div>
      {itens}
      <p>Total R$ {counter}</p>
      <button onClick={onClick} >Enviar pedido à cozinha</button>
    </section>
  )
}