import { useCounter } from "../useCounter";

export function Counter(){
    const { count, increment, decrement, reset } = useCounter(0);
    return(
         <section>
        
        <p>Counter: {count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement} >-1</button>
        <button onClick={reset} >Reset</button>
      </section>
    )
}