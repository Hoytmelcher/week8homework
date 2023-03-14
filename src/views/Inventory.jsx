import { useState } from "react";
import Cars from "../components/inventory";

export default function Inventory() {
    const [prices, basePrice] = useState([
        {
          model:'Impreza',
          basePrice: 25000
        },{
          model:'Supra',
          basePrice: 42000
        },{
          model:'Skyline',
          basePrice: 140000
        },{
          model:'Mustang',
          basePrice: 30000
        }
      ])
      
      
    return (
        <div className="App">
        <h1>Inventory</h1>
        {
            prices.map((price) => <Cars model={price.model} basePrice={price.basePrice}/>)
        }
        </div>
    );
      
}