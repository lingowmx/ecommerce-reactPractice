import { createContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext(); //crear un contexto, crear proveedor que encapsula

export const ShoppingCartProvider = ({ children }) => {

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
        closeCheckOutMenu
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