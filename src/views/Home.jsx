import { useState } from "react";
import Counter from "../components/Counter";

export default function Home() {
    const [counters, setCounters] = useState([
        {
          title:'Pushup Counter',
          initialCount: 10
        },{
          title:'Cartwheel Counter',
          initialCount: 24
        },{
          title:'Backflip Counter',
          initialCount: 42
        },{
          title:'Judo Chop Counter',
          initialCount: 9001
        }
      ])
      
      
    return (
        <div className="App">
        <h1>Home</h1>
        {
            counters.map((counter) => <Counter title={counter.title} initialCount={counter.initialCount}/>)
        }
        </div>
    );
      
}