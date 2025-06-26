import { HelloWorld } from "./helloWorld"


export function App() {
  

  return (
    <div>
      <HelloWorld />
      
    { /* You can reuse the HelloWorld component multiple times within App, resulting in multiple instances of "Hello". Additionally, you can render the Message component within App, which will display the "Message" content */ }
    </div>
  )
}


