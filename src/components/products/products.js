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

export function ToDelivery({ client, table, idOrdered, onClick }) {
  return (
    <div className="order-to-delivery">
      <p>Cliente: {client}</p>
      <p>Mesa: {table}</p>
      <p>Pedido: {idOrdered}</p>
      <button onClick={onClick}>ENTREGUE</button>
    </div>
  )
}

