import React from "react";
let Context = React.createContext({
  DataF: () => {},
  expenses: [],
  token:"",
  isLogin: false,
});
export default Context;
