import { createContext } from "react";
import { useState } from "react";

export const ShoppingCartContext = createContext() //crear un contexto, crear proveedor que encapsula 

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, SetIsProductDetailOpen] = useState(false)
    const openProductDetail = () => SetIsProductDetailOpen(true)
    const closeProductDetail = () => SetIsProductDetailOpen(false)

    //Product Detail    
    const [sendProduct, setSendProduct] = useState({})
    // console.log('count:', count)
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            sendProduct,
            setSendProduct
        }}> 

            {children}
        </ShoppingCartContext.Provider>
    )
}