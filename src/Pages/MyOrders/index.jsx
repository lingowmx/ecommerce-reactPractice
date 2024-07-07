  import { useContext } from "react";
  import { Layout } from "../../components/Layout";
  import { OrdersCard } from "../../components/OrdersCard";
  import { ShoppingCartContext } from "../../components/Context";
  import { Link } from "react-router-dom";
  import { useEffect, useState } from "react";

//fucntion for random number
const generateId = () => {
  const randomNumber = Math.floor(Math.random() * 900 + 100);
  return `P${randomNumber}`
}


  export const MyOrders = () => {
    const { order } = useContext(ShoppingCartContext);
    const [orderWithIdnDate, setOrderWithIdnDate] = useState([]);
    

    useEffect(() => {
      const today = new Date();
      const formattedDate = `${today.getDate().toString().padStart(2, "0")}/
      ${(today.getMonth()+ 1).toString().padStart(2, "0")}/
      ${today.getFullYear()}`;
      const orderWithIdnDate = order.map(order => ({
          ...order,
          id: generateId(),
          date: formattedDate,
      }));
      setOrderWithIdnDate(orderWithIdnDate)
    },[order]);

    return (  
      <Layout>
        <div className="relative flex w-80 items-center place-content-center mb-6">
          <h1>My Orders</h1>
        </div>

        {orderWithIdnDate.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              date={order.date}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
              id = {order.id}
            />
          </Link> 
        ))}
      </Layout>
    );
  };
