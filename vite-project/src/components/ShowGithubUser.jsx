import { GithubUser } from "./GithubUser";

function ShowGithubUser({username}){
return(
    <>
    <GithubUser username={username} />
    </>
)
}

export default ShowGithubUser;