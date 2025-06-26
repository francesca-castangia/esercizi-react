import { AlertClock } from "./AlertClock"



function App() {
  function handleShowTime(){
        const now = new Date();

        alert(`The current time is: ${now.toLocaleTimeString()}`)
    }

  return (
    <div>
      <AlertClock onButtonClick={handleShowTime}/>
    </div>
  )
}

export default App
