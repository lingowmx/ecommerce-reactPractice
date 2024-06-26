import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";

export const Home = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <Layout>
      HOME
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
