// function App({value}) {
//   return (
//     <button className="input">
//       {value}
//     </button>
//   );
// }

export function Inputs({value, type, placeholder}) {
  return (
    <input type={type} className="input-auth" placeholder={placeholder} value={value} />
  );
}

// export default App;

