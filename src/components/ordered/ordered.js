import './order2.css';
import { getProductName } from '../../helpers/getProductName';

export function ItensOrdered({ product }) {
  return (
    <div className="itens-ordered">
      <p> {getProductName(product)} </p>
      <p> x{product.qtd} </p>
    </div>
  )
}

export function Ordered({ onClick, itens, className, txtBtn, product }) {
  return (
    <div className="ordered">
      <div className="header-ordered">
        <p>Cliente: {product.client_name}</p>
        <p>Mesa: {product.table}</p>
        <p>Pedido: {product.id}</p>
      </div>
      {itens}
      <button className={className} onClick={onClick} >{txtBtn}</button>
    </div>
  )
}

export function Done({ ordered }) {
  return (
    <div className="done">
      <p>Cliente: {ordered.client_name}</p>
      <p>Mesa: {ordered.table}</p>
      <p>Pedido: {ordered.id}</p>
    </div>
  )
}
