
import { Route, Routes } from "react-router-dom";
import { GithubUser } from "./components/GithubUser";



 function App() {
  
 
  return (
    <div >
      <Routes>
  
        <Route path="/" element={<GithubUser />}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
