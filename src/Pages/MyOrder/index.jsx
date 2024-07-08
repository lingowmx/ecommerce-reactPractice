import { ShoppingCartContext } from "../../components/Context";
import { Layout } from "../../components/Layout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { OrderCard } from "../../components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if(index === 'last') index = order?.length -1
  console.log(index)
  return (
    <Layout>
      <div className="relative flex w-80 items-center place-content-center mb-6">
        <Link to={"/my-orders"} className="absolute left-0">
          <ChevronLeftIcon className="  size-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>

      <div className="px-2 w-[450px]">
        {order?.[index]?.products.map((selectedProduct) => (
          <OrderCard
            key={selectedProduct.id}
            id={selectedProduct.id}
            title={selectedProduct.title}
            imageURL={selectedProduct.images}
            price={selectedProduct.price}
          />
        ))}
      </div>
    </Layout>
  );
};
