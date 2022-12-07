import React, { useState, useEffect } from "react";
import { Products } from '../../components/products/products'
import { Details } from '../../components/details/details'
import { Header, Footer } from '../../components/header-footer/header-footer'
import { Check, Itens } from '../../components/check/check'
import logo from '../../assets/logo.svg';
import logout from '../../assets/logout.png';
import './salon.css'
import '../../style.css'
import { allProducts, name, createOrder } from '../../contexts/api';


export const Salon = () => {
  const [selectProducts, setSelectProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [qtd, setQtd] = useState(1);
  const [price, setPrice] = useState();


  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  // const [order, setOrder] = useState('');

  function orderList(p) {
    const productId = products.findIndex((e) => e.id === p.id);
    if (productId === -1) {
      return setProducts([...products, {
        "id": p.id,
        "qtd": 1,
        "name": p.name,
        "price": p.price,
        "sub_type": p.sub_type,
        "flavor": p.flavor,
        "complement": p.complement
      }]);
    } else {
      setQtd(products[productId].qtd += 1);
      setPrice(products[productId].price += p.price);
    }
  }


  function addProductCount(p) {
    const productId = products.findIndex((e) => e.id === p.id);
    if (productId === -1) {
      return setProducts([...products, {
        "id": p.id,
        "qtd": 1,
        "name": p.name,
        "price": p.price,
        "sub_type": p.sub_type,
        "flavor": p.flavor,
        "complement": p.complement
      }]);
    } else {
      setQtd(products[productId].qtd += 1);
      if (p.qtd > 2) {
        setPrice(products[productId].price += p.price / qtd);
      } else {
        setPrice(products[productId].price += p.price);
      }
    }
  }

  function deleteProductCount(p) {
    const productId = products.findIndex((e) => e.id === p.id);
    if (productId === -1) {
      return setProducts([...products, {
        "id": p.id,
        "qtd": 1,
        "name": p.name,
        "price": p.price,
        "sub_type": p.sub_type,
        "flavor": p.flavor,
        "complement": p.complement
      }]);
    } else {
      setQtd(products[productId].qtd -= 1);
      if (p.qtd > 1) {
        setPrice(products[productId].price -= p.price / qtd);
      } else if (p.qtd === 0) {
        products.splice(productId, 1); //dá pra caminhar mais ou menos nessa direção
      } else {
        setPrice(products[productId].price -= p.price);
      }
    }
  }

  useEffect(() => {
    allProducts()
      .then((response) => response.json())
      .then((data) => {
        setSelectProducts(data);
      });
  }, []);

  const makeOrder = () => {
    createOrder(client, table, products)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((erro) => console.log(erro));
  }

  const productsBreakfast = selectProducts.map((p) => {
    if (p.sub_type === 'breakfast') {
      return <Products onClick={() => orderList(p)} key={p.id} name={p.name} price={p.price} />;
    } return;
  });

  const productsHamburguer = selectProducts.map((p) => {
    if (p.sub_type === 'hamburguer') {
      if (p.flavor === null && p.complement === null) {
        return <Products onClick={() => orderList(p)} key={p.id} name={p.name} price={p.price} />;
      } else if (p.flavor !== null && p.complement === null) {
        return <Products onClick={() => orderList(p)} key={p.id} name={p.name + ' ' + p.flavor} price={p.price} />;
      } else if (p.flavor !== null && p.complement !== null) {
        return <Products onClick={() => orderList(p)} key={p.id} name={p.name + ' ' + p.flavor + ' com ' + p.complement} price={p.price} />;
      }
    } return;
  });


  const productsOthers = selectProducts.map((p) => {
    if (p.sub_type === 'side' || p.sub_type === 'drinks') {
      return <Products onClick={() => orderList(p)} key={p.id} name={p.name} price={p.price} />;
    }
  });

  return (
    <section>
      <Header href1='login' logout={logout} user={name()} href2='salon' logo={logo} />
      <section className="container-salon">
        <Details className='details to-delivery' text1='Pedidos prontos para entrega' />
        <details className="details new-ordered">
          <summary>Novos pedidos</summary>
          <Details className='detailsMenu breakfast-menu' text1='Café da Manhã' product={productsBreakfast} />
          <Details className='detailsMenu hamburguer-menu' text1='Hamburgueres' product={productsHamburguer} />
          <Details className='detailsMenu others-menu' text1='Acompanhamentos e Bebidas' product={productsOthers} />
          <Check itens={products.map((p) => {
            if (p.sub_type === 'hamburguer') {
              if (p.flavor === null && p.complement === null) {
                return <Itens onClick1={() => deleteProductCount(p)} onClick2={() => addProductCount(p)} key={p.id} counter={p.qtd} name={p.name} price={p.price} />;
              } else if (p.flavor !== null && p.complement === null) {
                return <Itens onClick1={() => deleteProductCount(p)} onClick2={() => addProductCount(p)} key={p.id} counter={p.qtd} name={p.name + ' ' + p.flavor} price={p.price} />;
              } else if (p.flavor !== null && p.complement !== null) {
                return <Itens onClick1={() => deleteProductCount(p)} onClick2={() => addProductCount(p)} key={p.id} counter={p.qtd} name={p.name + ' ' + p.flavor + ' com ' + p.complement} price={p.price} />;
              }
            } return <Itens onClick1={() => deleteProductCount(p)} onClick2={() => addProductCount(p)} key={p.id} name={p.name} counter={p.qtd} price={p.price} />
          })} onClick={makeOrder} client={<input type="text" className="input-order-client" onChange={(e) => setClient(e.target.value)} />}
            table={<input type="number" className="input-order-table" onChange={(e) => setTable(e.target.value)} />}
          >
          </Check>
        </details>
        <Details className='details closed' text1='Pedidos finalizados' />

      </section>
      <Footer href1='salon' text1='Ir para conta' href2='salon' text2='Ir para produtos prontos' />
    </section>
  );
}


{/* <Details className='details new-ordered' text1='Novos pedidos' element1={breakfastMenu} element2={hamburguerMenu} element3={othersMenu} /> */ }
// itens={selectProducts.map((p) => orderList(p))}