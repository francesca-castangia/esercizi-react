import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SWRConfig } from 'swr'
import {BrowserRouter} from 'react-router-dom'

const fetcher = (url)=>fetch(url).then((r)=>r.json());

createRoot(document.getElementById('root')).render(
 <SWRConfig value={{fetcher}}>
   <BrowserRouter>
   <StrictMode>
    <App />
  </StrictMode>
   </BrowserRouter>
 </SWRConfig>,
)
