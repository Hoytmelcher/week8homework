import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Cars from "../components/inventory"

export default function CarSingle() {
    const {id} = useParams()
    const [car, setCar] = useState([])

    useEffect(() => {
        async function getCar() {
            const response = await fetch (`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
            if (response.status === 404){
                setCar({ notFound: true })
            } else {
                const data = await response.json()
                setCar(data)
            }
        }
        getCar()
    }, [])
    return(
        <div>
            {(car.notFound) ? (
                <h1>Error 404</h1>
            ):(
                <>
                <h2>Car #{id}</h2>
                <Cars model={car.name} basePrice={car.selling_price} hideLink={true} />
                <ul>
                    <li>Year: {car.year}</li>
                    <li>Fuel Type: {car.fuel}</li>
                    <li>Transmission: {car.transmission}</li>
                    <li>Seats: {car.seats}</li>
                    <li>Mileage: {car.mileage}</li>
                    <li>Horsepower: {car.max_power}</li>
                </ul> 
                </>
            )}
            
        </div>
    )
}