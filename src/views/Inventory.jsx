import { useState } from "react";
import Counter from "../components/Counter";

export default function Inventory() {
    const [counters, setCounters] = useState([
        {
          title:'Red Cars',
          initialCount: 0
        },{
          title:'Blue Cars',
          initialCount: 22
        },{
          title:'White Cars',
          initialCount: 14
        },{
          title:'Black Cars',
          initialCount: 30
        }
      ])
      
      
    return (
        <div className="App">
        <h1>Inventory</h1>
        {
            counters.map((counter) => <Counter title={counter.title} initialCount={counter.initialCount}/>)
        }
        </div>
    );
      
}