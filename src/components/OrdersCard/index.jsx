import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { QrCodeIcon } from "@heroicons/react/24/solid";

export const OrdersCard = (props) => {
  const { totalProducts, totalPrice, date, id } = props;

  console.log("totalProducts:", totalProducts);
  console.log("id:", id);
  return (
    <section className="flex place-content-between items-center mb-2 border-black shadow-md rounded-lg hover:shadow-blue-400 hover:shadow-sm hover:cursor-pointer">
      <p className="w-[600px] h-20 flex place-content-around items-center">
        <span className="flex flex-col items-center w-40">
          <ShoppingCartIcon className="w-10 h-10"/>
          {totalProducts} Products
        </span>
        <span className="flex flex-col items-center w-40">
          <CalendarDaysIcon className="w-10 h-10"/>
          {date}
        </span>
        <span className="flex flex-col items-center w-40">
          <CurrencyDollarIcon className="w-10 h-10"/>${totalPrice}
        </span>
        <span className="flex flex-col items-center w-40">
          <QrCodeIcon className="w-10 h-10"/>
          {id}
        </span>
      </p>
    </section>
  );
};
