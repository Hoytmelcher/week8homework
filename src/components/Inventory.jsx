import { useState } from "react"
import { Link } from "react-router-dom"

export default function Cars(props) {
    return (
        <div className="car">
            <h2>{props.car.name || 'N/A'}</h2>
            <p> Price: { props.car.selling_price } </p>
            {
                (props.hideLink) ?
                <></> :
                <Link to={ `/inventory/${props.car.id}` }>More Info</Link>
            }
        </div>
    )
}