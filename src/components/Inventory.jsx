import { useState } from "react"
import { Link } from "react-router-dom"

export default function Cars(props) {
    return (
        <div className="car">
            <h2>{props.model || 'N/A'}</h2>
            <p> Price: { props.price } </p>
            {
                (props.hideLink) ?
                <></> :
                <Link to={ `/inventory/${props.id}` }>More Info</Link>
            }
        </div>
    )
} 