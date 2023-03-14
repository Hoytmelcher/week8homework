import { useState } from "react"

export default function Cars(props) {
    console.log(props)
    const [price] = useState(props.basePrice || 0)

    

    return (
        <div>
            <h2>{props.model || 'N/A'}</h2>
            Price: { price } 
            
        </div>
    )
}