import { useState, useEffect } from "react";

export function Clock(){
const [time, setTime] = useState(new Date());

useEffect(()=>{
    const interValId = setInterval(()=>{
        setTime(new Date());
    }, 1000);

    return()=> clearInterval(interValId)
}, []);

    return(
<div>
    <h2>Current time: {time.toLocaleTimeString()}</h2>
</div>
    )
}