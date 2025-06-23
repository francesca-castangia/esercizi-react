import { useState, useEffect } from "react";

export function Counter({initialValue =0, step = 1}){
    const [counter, setCounter] = useState(initialValue);

    const handleIncrement = () => {
        setCounter((c)=> c+1);

    }

    useEffect(()=> {
        console.log(`Counter update: ${counter}`)
    }, [counter]);
    
    return(
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

