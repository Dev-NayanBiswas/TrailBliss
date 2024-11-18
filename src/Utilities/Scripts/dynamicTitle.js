import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function dynamicTitle(){
    const location = useLocation();
    useEffect(()=>{    
    const pathArr = location.pathname.split("/");
    let path = pathArr[pathArr.length-1].toUpperCase()
    path = path === '' ? "HOME" : path
    document.title = path;
  },[location?.pathname])
}

export default dynamicTitle