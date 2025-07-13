import React, { useState } from "react";
import { useCounter } from "./useCounter";
import { FilteredList } from "./FilteredList";

export default function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  const [people, setPeople] = useState([
    { id: 1, name: "Alice", age: 17 },
    { id: 2, name: "Bob", age: 21 },
    { id: 3, name: "Charlie", age: 19 },
    { id: 4, name: "Daisy", age: 16 },
  ]);

  return (
    <div >

      <section>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} >Decrement</button>
        <button onClick={reset} >Reset</button>
      </section>

      <section >
        <h2>Filtered List (age &gt; 18)</h2>
        <FilteredList list={people} />
      </section>
    </div>
  );
}