import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { OrderCard } from "../../components/OrderCard";

export const CheckOutSideMenu = () => {
  const {
    isCheckOutMenuOpen,
    closeCheckOutMenu,
    productsToBuy,
    setProductsToBuy,
    setCount,
    count
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = productsToBuy.filter(
      (product) => product.id != id
    );
    setProductsToBuy(filteredProducts);
    setCount(count - 1);
  };

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
        {productsToBuy.map((selectedProduct) => (
          <OrderCard
            key={selectedProduct.id}
            id={selectedProduct.id}
            title={selectedProduct.title}
            imageURL={selectedProduct.image}
            price={selectedProduct.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </aside>
  );
};
