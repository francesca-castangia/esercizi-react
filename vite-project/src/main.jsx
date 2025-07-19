import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { SWRConfig } from 'swr'

const fetcher = (url)=>fetch(url).then((r)=>r.json)

createRoot(document.getElementById('root')).render(
<SWRConfig value={{fetcher}}>
   <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
 </BrowserRouter>
</SWRConfig>,
)
