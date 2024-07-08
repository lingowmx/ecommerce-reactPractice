import { createContext } from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext(); //crear un contexto,
export const ShoppingCartProvider = ({ children }) => {
  //crear proveedor que encapsula

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
  const [order, setOrder] = useState([]);
  // products
  const [items, setItems] = useState(null);
  // get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);
  console.log("searchByTitle:", searchByTitle);
  const [filteredItems, setFilteredItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
    // fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  console.log(items);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };
  useEffect(() => {
    if (searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    }
  }, [items, searchByTitle]);
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
        closeCheckOutMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

//PROPTYPES
ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
