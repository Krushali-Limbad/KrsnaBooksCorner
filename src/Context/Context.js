import React, { createContext, useContext, useReducer } from "react";

import products from "../Components/SampleOutput";

import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [productState, productDispatch] = useReducer(productReducer, {
    smallBooks: products,
    mediumBooks: products,
    bigBooks: products,
  });

  return (
    <Cart.Provider value={{ state, productState, productDispatch, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
