import { useState } from "react";
import { GithubUser } from "./GithubUser";


function GithubUsers(){
    const [input, setInput]= useState();
    const [usernames, setUsernames]= useState();

    const handleSubmit = (e) => {
    e.preventDefault();
    
      setUsernames([...usernames, input]);
      setInput("");
    
  };
    return(
        <div>
            
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          Add User
        </button>
      </form>

      <div>
        {usernames.map((username, index) => (
          <GithubUser key={index} username={username} />
        ))}
      </div>
    </div>
  );
}
    


export default GithubUsers;