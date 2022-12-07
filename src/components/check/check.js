import './check.css';

export function Itens({ name, counter, price, onClick1, onClick2 }) {
  return (
    <div className="itens-count">
      <p> {name} </p>
      <div className='counter'><button onClick={onClick1} >-</button>{counter}<button onClick={onClick2} >+</button></div>
      <p> R$ {price} </p>
    </div>
  )
}

export function Check({ client, table, itens, counter, onClick }) {
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