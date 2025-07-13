import React from "react";
import { useCounter } from "./useCounter";
import { useForm } from "./useForm";
import { useGithubUser } from "./useGithubUser";
import { useCurrentLocation } from "./useCurrentLocation";

export default function App() {
  //  useCounter
  const { count, increment, decrement, reset } = useCounter(0);

  //  useForm
  const { values, handleChange } = useForm();

  //  useGithubUser
  const { user, error: githubError, loading: githubLoading, fetchUser } = useGithubUser();

  //  useCurrentLocation
  const { location, error: locationError, loading: locationLoading, getLocation } = useCurrentLocation();

  return (
    <div >
      

      {/* Counter */}
      <section style={{ marginBottom: "20px" }}>
        
        <p>Counter: {count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement} >-1</button>
        <button onClick={reset} >Reset</button>
      </section>

      {/* Form */}
      <section style={{ marginBottom: "20px" }}>
        
        <input
          name="username"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
          
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <div>
          <strong>Current values:</strong>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </div>
      </section>

      {/* Github User */}
      <section >
        
        <input
          type="text"
          placeholder="GitHub username"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchUser(e.target.value);
            }
          }}
          
        />
        <button onClick={() => fetchUser(values.username)}>Fetch User from Form Username</button>
        {githubLoading && <p>Loading GitHub user...</p>}
        {githubError && <p style={{ color: "red" }}>Error: {githubError}</p>}
        {user && (
          <div >
            <img src={user.avatar_url} alt={user.login} width={50} style={{ borderRadius: "50%" }} />
            <div><strong>Name:</strong> {user.name || "N/A"}</div>
            <div><strong>Login:</strong> {user.login}</div>
          </div>
        )}
      </section>

      {/* Current Location */}
      <section>
       
        <button onClick={getLocation}>Get Current Location</button>
        {locationLoading && <p>Getting location...</p>}
        {locationError && <p style={{ color: "red" }}>Error: {locationError}</p>}
        {location && (
          <p>
            Latitude: {location.latitude} <br />
            Longitude: {location.longitude}
          </p>
        )}
      </section>
    </div>
  );
}
