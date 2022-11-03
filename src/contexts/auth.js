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

export const creatingUser = (name, email, password, role) => {
  console.log(name, email, password, role);
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

// return fetch('https://lab-api-bq.up.onrender.app/products', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json',
//       'Authorization': token },
//     }),

