import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { OrdersCard } from "../../components/OrdersCard";
import { ShoppingCartContext } from "../../components/Context";
import { Link } from "react-router-dom";

export const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="relative flex w-80 items-center place-content-center mb-6">
        <h1>My Orders</h1>
      </div>

      {order.map((order, index) => (
        <Link key={index} to={`./my-orders/${order.id}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
          ;
        </Link>
      ))}
    </Layout>
  );
};
