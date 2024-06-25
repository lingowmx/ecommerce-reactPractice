import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";


export const ProductDetail = () => {
    const {isProductDetailOpen, closeProductDetail} = useContext(ShoppingCartContext)
  return (
    <aside 
    className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex place-content-between items-center p-6">
        <h2 className="font-md text-xl">Detail</h2>
        <p>
          <XMarkIcon className="size-6 text-black" 
            onClick={() => closeProductDetail()}/>
        </p>
      </div>
    </aside>
  );
};
