import "./styles.css";
import { Link } from "react-router-dom"
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { OrderCard } from "../../components/OrderCard";
import { totalPrice } from "../../utils/index.js";

export const CheckOutSideMenu = () => {
  const {
    isCheckOutMenuOpen,
    closeCheckOutMenu,
    productsToBuy,
    setProductsToBuy,
    setCount,
    count,
    order,
    setOrder,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = productsToBuy.filter(
      (product) => product.id != id
    );
    setProductsToBuy(filteredProducts);
    setCount(count - 1);
  };
  const handleCheckOut = () => {
    const orderToAdd = {
      date: "01/02/23",
      products: productsToBuy,
      totalProduts: productsToBuy.length,
      totalPrice: totalPrice(productsToBuy),
    };
    setOrder([...order, orderToAdd]);
    setProductsToBuy([]); //convertir a un array vacio
    closeCheckOutMenu()
    setCount(count === 0)
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
      <div className="flex place-content-between px-8">
        <p className="font-light">Total</p>
        <span className="font-semibold text-xl">${totalPrice(productsToBuy)}</span>
      </div>
      <Link to='/my-orders/last' className=" w-full mx-auto px-3 mt-3 hover:cursor-pointer">
      <button className="w-full bg-black text-white items-center px-2 rounded-lg"
      onClick={() => handleCheckOut()}>Checkout</button>
      </Link>
    </aside>
  );
};
