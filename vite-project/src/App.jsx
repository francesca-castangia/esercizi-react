import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { Form } from "./components/Form";
import { GithubUser } from "./components/GithubUser";
import { CurrentLocation } from "./components/CurrentLocation";


 function App() {
  
 
  return (
    <div >
      <nav>
        <ul>
          <li><Link to={'/'}>Counter</Link></li>
          <li><Link to={'/form'}>Form</Link></li>
          <li><Link to={'/user'}>User</Link></li>
          <li><Link to={'/clocation'}>Current Location</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Counter/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/user" element={<GithubUser />}/>
        <Route path="/clocation" element={<CurrentLocation/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
