import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import { Counter } from './components/Counter'
import ShowGithubUser from './components/ShowGithubUser'
import { GithubUser } from './components/GithubUser'
import GithubUserList from './components/GithubUserList'
function App() {
  const username = "Francesca"

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Welcome name={username} /> }  />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/" element={<GithubUserList />}>
          <Route path=":username" element={<ShowGithubUser />}/>
          <Route index element={<p>Add a user and select it</p>}/>
        </Route>
        <Route path="*" element={<p>Not found</p>}/>
      </Routes>
    </>
  )
}

export default App
