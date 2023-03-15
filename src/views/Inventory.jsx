import { useState, useEffect } from "react";
import Cars from "../components/inventory";

export default function Inventory() {
    const [cars, setCars] = useState([])
  useEffect(() => {
    async function getCars() {
      const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars`)
      const data = await response.json()
      setCars(data)
    }
    getCars()
  }, [])
      
      
    return (
        <div className="App">
        <h1>Inventory</h1>
        {
            cars.map((car) => <Cars model={car.name} basePrice={car.selling_price} key={car.id} id={car.id}/>)
        }
        </div>
    );
      
}