import { createContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext(); //crear un contexto, 
export const ShoppingCartProvider = ({ children }) => {//crear proveedor que encapsula


  const [count, setCount] = useState(0);
  //Product Detail Open/Close
  const [isProductDetailOpen, SetIsProductDetailOpen] = useState(false);
  const openProductDetail = () => SetIsProductDetailOpen(true);
  const closeProductDetail = () => SetIsProductDetailOpen(false);
  //Product Detail
  const [sendProduct, setSendProduct] = useState({});
    //ShoppingCart
  const [productsToBuy, setProductsToBuy] = useState([]);
  //Shopping Cart Open/Close
  const [isCheckOutMenuOpen, SetIsCheckOutMenuOpen] = useState(false);
  const openCheckOutMenu = () => SetIsCheckOutMenuOpen(true);
  const closeCheckOutMenu = () => SetIsCheckOutMenuOpen(false);
//order
  const [order, setOrder] = useState([])

  // console.log('count:', count)
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        sendProduct,
        setSendProduct,
        productsToBuy,
        setProductsToBuy,
        isCheckOutMenuOpen,
        SetIsCheckOutMenuOpen,
        openCheckOutMenu,
        closeCheckOutMenu ,
        order,
        setOrder
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

//PROPTYPES
ShoppingCartProvider.propTypes = {
    children:PropTypes.node.isRequired
}