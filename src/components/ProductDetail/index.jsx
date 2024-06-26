import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";

export const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, sendProduct } =
    useContext(ShoppingCartContext);
  // console.log("product to show:", sendProduct);
  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white overflow-y-scroll`}
    >
      <div className="flex place-content-between items-center p-6">
        <h2 className="font-md text-xl">Detail</h2>
        <p>
          <XMarkIcon
            className="size-6 text-black cursor-pointer"
            onClick={() => closeProductDetail()}
          />
        </p>
        {/* toca mostrar la esteuctura del producto en el product detail */}
      </div>
      <figure className=" px-6">
        <img
          className="w-full h-full rounded-lg"
          src={sendProduct.image}
          alt={sendProduct.title}
        />
      </figure>
      <div className="flex flex-col mt-4 p-6">
        <span className="font-medium text-2xl mb-4">${sendProduct.price}</span>
        <h3 className="font-medium text-xl mb-3">{sendProduct.title}</h3>
        <span className="font-light text-md">{sendProduct.description}</span>
      </div>
    </aside>
  );
};
