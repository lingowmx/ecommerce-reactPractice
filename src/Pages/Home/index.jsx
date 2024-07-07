import { useContext } from "react";
import { ShoppingCartContext } from "../../components/Context";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";

export const Home = () => {
    const {items, setSearchByTitle} = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div>
        <h1>HOME</h1>
      </div>
      <input type="text" 
      placeholder="Search a product"
      className=" border border-black rounded-lg w-48 p-4 my-4 focus:outline-none" 
      onChange={(event) => setSearchByTitle(event.target.value)}/>
      <div className="w-full grid place-content-center justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {
            //PENDIENTE PARA REFACTORIZAR , Se refactorizo y se aplico el uso de proptypes
            //PENDIENTE lazy loading
            //PROP TYPES. -listo
            items?.map((item) => {
              return <Card key={item.id} {...item} />;
            })
          }
      </div>  
      <ProductDetail/>
    </Layout>
  );
};
