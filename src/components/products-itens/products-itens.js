import './products-itens.css'

export function Products({ name, price, onClick }) {
  return (
    <div className="products-list">
      <p> {name} </p>
      <p> R$ {price} </p>
      <button onClick={onClick}>+</button>
    </div>
  )
}

export function Itens({ name, counter, price }) {
  return (
    <div className="itens-count">
      <p> {name} </p>
      <button>-</button>{counter}<button>+</button>
      <p> R$ {price} </p>
    </div>
  )
}