// import { useParams } from "react-router-dom";
// import { useGithubUser } from "../useGithubUser";

import { useGithubUser } from "../useGithubUser";

export function GithubUser({username}){
    
    const { user, error, isLoading, refetch } = useGithubUser(username);
    
    return(
         <section >
        
        <input
          type="text"
          placeholder="GitHub username"
          onKeyDown={(e) => {
              refetch(e.target.value);
          }}
          
        />
        <button onClick={() => refetch(username)}>Fetch User from Form Username</button>
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


// export function GithubUser({ username }) {
//   const { user, isLoading, isError, refetch } = useGithubUser(username);

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Errore!</p>;

//   return (
//     <div>
//       <h1>{user?.login}</h1>
//       <button onClick={() => refetch()}>Refetch</button>
//     </div>
//   );
// }