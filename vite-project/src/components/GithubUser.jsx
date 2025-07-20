

import { useState } from "react";
import { useGithubUser } from "../useGithubUser";

export function GithubUser(){
    const [username, setusername]= useState('');
    const [usernameInput, setUsernameInput]= useState('')
    const { user, error, isLoading, refetch } = useGithubUser(username);
    
    return(
         <section >
        
        <input
          type="text"
          placeholder="GitHub username"
          onChange={(e) => {
              setUsernameInput(e.target.value);
          }}
          
        />
        <button onClick={() => setusername(usernameInput)}>Fetch User</button>
        <button onClick={refetch}>Refetch current user</button>

        {isLoading && <p>Loading GitHub user...</p>}
        {error && <p>Error: There has been an error</p>}
        {user && (
          <div >
            <img src={user.avatar_url} alt={user.login} />
            <div><strong>Name:</strong> {user.name || "N/A"}</div>
            <div><strong>Login:</strong> {user.login}</div>
          </div>
        )}
      </section>
    )
}
