import './details.css'

export function Details({ summary, className, product }) {
	return (
		<details className={className}>
      <summary>{summary}</summary>
      {product}
    </details>
	);
}
