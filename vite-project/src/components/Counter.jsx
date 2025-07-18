import { useState } from "react";

export function Counter({initialValue = 0, incrementAmount = 1}) {
    const [counter, setCounter] = useState(initialValue);
    const incrementCounter = () => {
        setCounter(prev => prev + incrementAmount);

    };

    const decrementCounter = () => {
        setCounter(prev => prev - incrementAmount);
    };

    const resetCounter = () => {
        setCounter(initialValue);
    };

return (
    <>
    <h2>Current count: {counter}</h2>
    <button onClick={incrementCounter}>Increment</button>
    <button onClick={decrementCounter}>Decrement</button>
    <button onClick={resetCounter}>Reset</button>
    </>
)
}