export const createUser = (name, email, password, role) => {
  return fetch('https://lab-api-bq.onrender.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: 'Burguer Queen',
    }),
  });
};

export const createToken = (email, password) => {
  return fetch('https://lab-api-bq.onrender.com/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};

export const saveName = (name) => {
  localStorage.setItem('name', name);
}

export const name = () => localStorage.getItem('name');

export const saveToken = (token) => {
  localStorage.setItem('token', token);
}

const token = () => localStorage.getItem('token');

export const allProducts = async () => {
  return fetch('https://lab-api-bq.onrender.com/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token()
    },
  });
};

export const allUsers = () => {
  return fetch('https://lab-api-bq.onrender.com/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token()
    },
  })
};

export const createOrder = (client, table, products) => {
  return fetch('https://lab-api-bq.onrender.com/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': token() },
    body: JSON.stringify({
      client: client,
      table: table,
      products: products
    }),
  });
};

export const orderToKitchen = () => {
  return fetch('https://lab-api-bq.onrender.com/orders', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token(),
    },
  });
}

export const updateOrderStatus = (status, orderId) => {
  return fetch(`https://lab-api-bq.onrender.com/orders/${orderId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json','Authorization': token() },
    body: JSON.stringify({
      status
    }),
  });
}
