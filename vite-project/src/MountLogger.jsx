import { useEffect, useRef } from "react"

export function MountLogger(){
    const isMounted = useRef(false);
    useEffect(()=>{
        if(!isMounted.current){
            console.log('Componente mounted for the first time! ')
            isMounted.current = true;
        }
    },[])
    
    return(
        <div>
                Check the console for mount log.
        </div>
    )
}