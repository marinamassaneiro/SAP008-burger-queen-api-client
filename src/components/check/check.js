import './check.css';
import { Itens } from '../products-itens/products-itens';

export function Check ({ client, table, itens, counter, onClick }){
    return (
      <section className="check">
        <div className="header-count">
          <p>Cliente:{client}</p>
          <p>Mesa:{table}</p>
        </div>
        {itens.map((p) => <Itens key={p.id} name={p.name} counter={p.qtd} price={p.price} /> ) }
        <p>Total R$ {counter}</p>
      <button onClick={onClick} >Enviar pedido à cozinha</button>
    </section>
    )
  }