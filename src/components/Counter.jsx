import { useState } from "react"

export default function Counter(props) {
    console.log(props)
    const [count, setCount] = useState(props.initialCount || 0)

    function increment(incrementor) {
        setCount(count+incrementor)
    }

    return (
        <div>
            <h2>{props.title || 'Counter'}</h2>
            Count: { count } 
            <div>
                <button onClick={() => increment(5)}>Add 5</button>
                <button onClick={() => increment(1)}>Increment</button>
                {
                    (count > 0) ?
                    <>
                        <button onClick={() => increment(-1)}>Decrement</button>
                        
                    </>
                    :
                    <></>
                }{
                    (count > 4) ?
                    <>
                        
                        <button onClick={() => increment(-5)}>Sub 5</button>
                    </>
                    :
                    <></>
                }
            </div>
        </div>
    )
}