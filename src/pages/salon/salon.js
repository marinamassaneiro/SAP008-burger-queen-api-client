import React from "react";
import { allProducts } from '../../contexts/api';

export const Salon = () => {
  allProducts()
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => error);

  return (
    <div>salon</div>
    // <div>{printProducts}</div>
  );
}

