import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import Cars from "../components/inventory"
import { DataContext } from "../contexts/DataProvider"

export default function CarSingle() {
    const {id} = useParams()
    const [car, setCar] = useState([])
    const [error, setError] = useState(false)
    const { getCar } = useContext(DataContext)

    useEffect(() => {
        async function handleLoad() {
            try {
                const data = await getCar(id)
                setCar(data)
            } catch(err) {
                setError(true)
            }
        }
        handleLoad()
    }, [])

    return(
        <div>
            {
                error ?
                <>
                    <h2>404 Not Found</h2>
                    <p>Listing {id} could not be found</p>
                </> :
                <>
                    <h2>Car #{id}</h2>
                    <Cars model={car.name} basePrice={car.price} hideLink={true} />
                    <ul>
                        <li>Year: {car.year}</li>
                        <li>Fuel Type: {car.fuel}</li>
                        <li>Transmission: {car.transmission}</li>
                        <li>Seats: {car.seats}</li>
                        <li>Mileage: {car.mileage}</li>
                        <li>Horsepower: {car.power}</li>
                    </ul> 
                </>
            }
            
        </div>
    )
}