import { useState, useEffect, useContext } from "react";
import Cars from "../components/inventory";
import { DataContext } from "../contexts/DataProvider";

export default function Inventory() {
    const { cars } = useContext(DataContext)
      
      
    return (
        <div className="App">
        <h1>Inventory</h1>
        {
            cars.map((car) => <Cars model={car.name} basePrice={car.price} key={car.id} id={car.id}/>)
        }
        </div>
    );
      
}