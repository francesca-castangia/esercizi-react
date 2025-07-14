import { useState, useCallback } from "react";

export function useGithubUser() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchUser(username){
    setLoading(true);
    setError(null);
    setUser(null);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  
}

  return { user, error, loading, fetchUser };
}