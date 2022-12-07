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

