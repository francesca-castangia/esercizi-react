import { useEffect, useState } from "react"
import { data, Link, Outlet } from "react-router-dom"

function GithubUserList(){
    const [users, setUsers]= useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users').then(res => res.json()).then(data=> setUsers(data))
    },[])
    return(
        <div> 
            <Outlet/>
            <ul>
                {users.map((user)=>(
                    <li key={user.login}>
                        <Link to={user.login}>{user.login}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GithubUserList