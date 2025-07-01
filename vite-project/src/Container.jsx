import { useState } from 'react'
import './index.css'
function Container({title, children}){
    const [collapsed, setCollapsed] = useState(false);
    function handleToggleCollapse(){
        setCollapsed((t) => !t)
    }
    return(
        <div className="div-container">
          <div> 
            <h3> {title}</h3>
           <button onClick={handleToggleCollapse}>Toggle</button>
           </div>
            <div>{!collapsed && <div>{children}</div>}</div>
        </div>
    )
}
export default Container