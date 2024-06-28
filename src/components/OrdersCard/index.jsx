export const OrdersCard = (props) => {
  const { totalProducts, totalPrice } = props;
  return (
    <section className="flex place-content-between items-center mb-2 border-black shadow-md rounded-lg hover:shadow-blue-400 hover:shadow-sm hover:cursor-pointer">
      <p>
        <span>01/09/20</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </section>
  );
};
