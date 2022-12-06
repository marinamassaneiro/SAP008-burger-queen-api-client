import './details.css'

export function Details({ text1, className, product }) {
	return (
		<details className={className}>
      <summary>{text1}</summary>
      {product}
    </details>
	);
}
