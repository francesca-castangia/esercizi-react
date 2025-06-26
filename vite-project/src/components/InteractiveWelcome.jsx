import { useState } from "react"
import { Welcome } from "./Welcome";

export function InteractiveWelcome(){
    const [name, setName] = useState("");
    function handleNameInputChange(e){
        const valeu = e.target.value;
        setName(valeu);
    }
    return(
        <div>
            <input type="text" name="name" value={name} onChange={handleNameInputChange}/>
            <Welcome name={name} />
        </div>
    )
}