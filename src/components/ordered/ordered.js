import './order2.css';

export function ItensOrdered({ name, qtd }) {
  return (
    <div className="itens-ordered">
      <p> {name} </p>
      <p> x{qtd} </p>
    </div>
  )
}

export function Ordered({ client, table, idOrdered, onClick, itens, className, txtBtn }) {
  return (
    <div className="ordered">
      <div className="header-ordered">
        <p>Cliente: {client}</p>
        <p>Mesa: {table}</p>
        <p>Pedido: {idOrdered}</p>
      </div>
      {itens}
      <button className={className} onClick={onClick} >{txtBtn}</button>
    </div>
  )
}

export function Done({ client, table, idOrdered }) {
  return (
    <div className="done">
      <p>Cliente: {client}</p>
      <p>Mesa: {table}</p>
      <p>Pedido: {idOrdered}</p>
    </div>
  )
}


// 0: Products: Array(1)
// 0: {id: 22, name: 'Hambúrguer duplo', flavor: 'vegetariano', complement: 'queijo', qtd: 2}
// length: 1
// [[Prototype]]: Array(0)
// client_name: "Marina"
// createdAt: "2022-12-12T17:13:33.024Z"
// id: 12
// processedAt: null
// status: "pending"
// table: 13
// updatedAt: "2022-12-12T17:13:33.024Z"
// user_id: 8