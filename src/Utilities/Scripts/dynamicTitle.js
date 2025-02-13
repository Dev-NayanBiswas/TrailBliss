import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function dynamicTitle(){
    const location = useLocation();
    useEffect(()=>{    
    const pathArr = location.pathname.split("/");
    let path = pathArr[pathArr.length-1].split("%20").join(" ").toUpperCase();
    path = path === '' ? "HOME" : location.pathname.includes("/details")? "DETAILS" : path;
    document.title = path;
  },[location?.pathname])
}

export default dynamicTitle