import { Age } from "./Age";
import { Message } from "./Message";

export function Welcome({ name, age }){
return(
    <div>
        <p>Welcome, { name }!</p>
        { age > 18 && <Age age = {age}/> }
        { age != null && <Age age = {age} /> }
        { age > 18 && age< 65 && <Age age = {age} /> }
        { age > 18 && name === "John" &&< Age age = {age} /> }
        { <Age age = {age} /> }
        <Message age = { age } />
    </div>
)
}