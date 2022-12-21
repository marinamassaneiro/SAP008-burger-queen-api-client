import './details.css';
import { Products } from '../products/products';

export function Details({ summary, className, product }) {
	return (
		<details className={className}>
      <summary>{summary}</summary>
      {product}
    </details>
	);
}

export function DetailsByType({ summary, className, productList, filterFunc, addProductCount }) {
  const filteredProducts = productList.filter(filterFunc);
  const productsComponentsList = filteredProducts.map(p => (
    <Products onClick={() => addProductCount(p)} key={p.id} product={p} />
  ))
  return <Details summary={summary} className={className} product={productsComponentsList} />
}
