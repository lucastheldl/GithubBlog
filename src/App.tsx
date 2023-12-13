import { useEffect } from "react"
import "./App.css"
import {BrowserRouter} from "react-router-dom"
import { Router } from "./Router"



function App() {

  async function getUser(){
    await fetch(`https://api.github.com/users/lucastheldl`).then(res=>res.json()).then(data=>console.log(data))
  }

  useEffect(()=>{
    getUser();
  },[])

  return(
    <BrowserRouter>
    <Router/>
    </BrowserRouter>)
  
}

export default App
