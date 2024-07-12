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
  // Get products
  const [items, setItems] = useState(null);
  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);
  // console.log("searchbytitle", searchByTitle);
  //get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);
  console.log("searchbycategory", searchByCategory);
 

  const [filteredItems, setFilteredItems] = useState(null);
  // console.log("filteredItems:", filteredItems);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      // fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    // if(!searchByTitle) return items
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };
  // se filtra por titulo, necesito que los items y que estos mismos los regrese, que otra cosa?
  // necesito saber que va a filtrar, pues el search by title, regresa el item con el titulo en lower case
  /// que incluya el mismo input que estamos buscando, search by ttle en lowercase

  const filteredItemsByCategory = (items, searchByCategory) => {
    // if(!searchByCategory)return items
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    
    );
  };

  const filterBy = (searchType, items, searchByCategory, searchByTitle) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    } 
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter(item =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }
    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory) {
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    }
    if (searchByTitle && !searchByCategory) {
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    }
    if (searchByCategory && !searchByTitle) {
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByCategory, searchByTitle)
      );
    }
    if (!searchByCategory && !searchByTitle) {
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
    }
    return () => {
      setSearchByTitle(null)
    }
  }, [items, searchByTitle, searchByCategory]);
  console.log("filteredItems:", filteredItems); 
  //

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
        filteredItems,
        searchByCategory,
        setSearchByCategory,
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
