import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout"
import { Card } from '../../components/Card';

export const Home = () => {
  const [items, setItems] = useState(null)
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => (response.json()))
    .then(data => setItems(data))
  },[])
  return (
    <Layout>
      HOME
      {
        //PENDIENTE PARA REFACTORIZAR
        //PENDIENTE lazy loading
        //PROP TYPES
        items?.map((item) => {
          return (

            <Card key={item.id} data={item}/>
          )
        }
        )
      }
    </Layout>
  )
}
  