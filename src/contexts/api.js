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
    headers: { 'Content-Type': 'application/json', 
    'Authorization': token() 
    },
  })
};

// export const authUser = () => {
//   return fetch('https://lab-api-bq.onrender.com/users', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json', 
//     'Authorization': token() 
//     },
//   })
// };

// import React, { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState();
//   useEffect(() => {
//     const userToken = localStorage.getItem("user_token");
//     const usersStorage = localStorage.getItem("users_db");

//     if (userToken && usersStorage) {
//       const hasUser = JSON.parse(usersStorage)?.filter(
//         (user) => user.email === JSON.parse(userToken).email
//       );

//       if (hasUser) setUser(hasUser[0]);
//     }
//   }, []);

// return <AuthContext.Provider>{children}</AuthContext.Provider>;
// };