import { useContext } from "react";
import { ShoppingCartContext } from "../../components/Context";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";

export const Home = () => {
  const { items, setSearchByTitle, filteredItems } =
    useContext(ShoppingCartContext);
  const renderView = () => {
    const itemsToRender = filteredItems?.length > 0 ? filteredItems : items;
    if (itemsToRender?.length > 0) {
      return itemsToRender.map((item) => (
         <Card key={item.id} {...item} />
      ));
    } else {
      return <p>No Results, sorry</p>;
    }
  };
  // esta funcion me gusto mucho

  return (
    <Layout>
      <div>
        <h1>Home Home Home</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className=" border border-black rounded-lg w-48 p-4 my-4 focus:outline-none"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className="w-full grid place-content-center justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {
          //PENDIENTE PARA REFACTORIZAR , Se refactorizo y se aplico el uso de proptypes
          //PENDIENTE lazy loading
          //PROP TYPES. -listo
          renderView()
        }
      </div>
      <ProductDetail />
    </Layout>
  );
};
