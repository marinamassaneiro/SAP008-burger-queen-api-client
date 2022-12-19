import './products.css'

export function Products({ name, price, onClick }) {
  return (
    <div className="products-list">
      <p> {name} </p>
      <p> R$ {price} </p>
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

