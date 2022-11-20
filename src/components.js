//login e register

export function Inputs({ value, type, placeholder, onClick, onChange }) {
	return (
		<input type={type} className="input-auth" placeholder={placeholder} value={value} 
		onClick={onClick} onChange={onChange} />
	);
}

export function FooterAuth({ text1, text2, href }) {
	return (
		<p className="footer-auth">{text1} <a href={href}>{text2}</a></p>
	);
}

export function OptionSelect({ value }) {
	return (
		<option value={value}>{value}</option>
	)
}

//salao e cozinha

export function Header({ href1, logout, user, href2, logo }) {
	return (
		<section className="header">
      <a href={href1}><img className='logout' src={logout} alt='sair'></img></a>
      <p>Atendente: {user}</p>
      <a href={href2}><img className='logo-home' src={logo} alt='img-logo'></img></a>
    </section>
	)
}

export function Details({ text1, className, element1, element2, element3, product }) {
	return (
		<details className={className}>
      <summary>{text1}</summary>
      {element1}
      {element2}
      {element3}
      {product}
    </details>
	);
}

export function Products ({ name, price }) {
  return (
    <div className="products-list">
      <p> {name} </p> 
      <p> R$ {price} </p>
      <button>+</button>
    </div>
  )
}

export function Check ({client, table, order, itens, counter}){
  return (
    <section className="check">
      <div className="header-count">
        <p>Cliente {client}</p>
        <p>Mesa {table}</p>
        <p>Pedido {order}</p> 
      </div>
      {itens}
      <p>Total R$ {counter}</p>
    <button>Enviar pedido à cozinha</button>
  </section>
  )
}

export function Itens ({name, counter, price}) {
  return (
    <div className="itens-count">
      <p> {name} </p> 
      <button>-</button>{counter}<button>+</button>
      <p> R$ {price} </p>
    </div>
  )
}

export function Footer({ href1, text1, href2, text2 }) {
  return (
		<section className="footer">
      <a href={href1}>{text1}</a>
      <a href={href2}>{text2}</a>
    </section>
	)
}
