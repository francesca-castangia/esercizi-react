import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers(){
    const [input, setInput] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !usernames.includes(input.trim())) {
      setUsernames([input.trim(), ...usernames]);
      setInput("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
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
        {usernames.map((username) => (
          <GithubUser key={username} username={username} />
        ))}
      </div>
    </div>
  );
}