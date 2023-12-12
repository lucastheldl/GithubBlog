import { useEffect } from "react"
import "./App.css"
import { Card } from "./components/Card";



function App() {

  async function getUser(){
    await fetch(`https://api.github.com/users/lucastheldl`).then(res=>res.json()).then(data=>console.log(data))
  }

  useEffect(()=>{
    getUser();
  },[])

  return(<div><Card/></div>)
  
}

export default App
