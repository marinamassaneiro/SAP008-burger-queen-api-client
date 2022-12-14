import './check.css';

export function Itens({ name, counter, price, onClick1, onClick2, totalPrice }) {
  return (
    <div className="itens-count">
      <p> {name} </p>
      <p> R$ {price} </p>
      <div className='counter'><button onClick={onClick1} >-</button>{counter}<button onClick={onClick2} >+</button></div>
      <p>R$ {totalPrice}</p>
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