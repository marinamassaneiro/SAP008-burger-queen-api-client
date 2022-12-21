import './products.css'
import { getProductName } from '../../helpers/getProductName'

export function Products({ onClick , product }) {
  return (
    <div className="products-list">
      <p> {getProductName(product)} </p>
      <p> R$ {product.price} </p>
      <button onClick={onClick}>+</button>
    </div>
  )
}

export function ToDelivery({ onClick, ordered }) {
  return (
    <div className="order-to-delivery">
      <p>Cliente: {ordered.client_name}</p>
      <p>Mesa: {ordered.table}</p>
      <p>Pedido: {ordered.id}</p>
      <button onClick={onClick}>ENTREGUE</button>
    </div>
  )
}

