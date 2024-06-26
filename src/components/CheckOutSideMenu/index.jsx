import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { OrderCard } from "../../components/OrderCard";

export const CheckOutSideMenu = () => {
  const { isCheckOutMenuOpen, closeCheckOutMenu, productsToBuy } =
    useContext(ShoppingCartContext);
  console.log("product:", productsToBuy);
  // console.log("product to show:", sendProduct);
  return (
    <aside
      className={`${
        isCheckOutMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex place-content-between items-center p-6">
        <h2 className="font-md text-xl">My Orders</h2>
        <p>
          <XMarkIcon
            className="size-6 text-black cursor-pointer"
            onClick={() => closeCheckOutMenu()}
          />
        </p>
        {/* toca mostrar la esteuctura del producto en el product detail */}
      </div>
      <div className="px-2 overflow-y-scroll">
      {
      productsToBuy.map((selectedProduct) => (
        <OrderCard
          key={selectedProduct.id}  
          title={selectedProduct.title}
          imageURL={selectedProduct.image}
          price={selectedProduct.price}
        />
      ))
      }

      </div>
    </aside>
  );
};
