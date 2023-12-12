import { useEffect } from "react"
import "./App.css"



function App() {

  async function getUser(){
    await fetch(`https://api.github.com/users/lucastheldl`).then(res=>res.json()).then(data=>console.log(data))
  }

  useEffect(()=>{
    getUser();
  },[])

  return(<div><h1>Hello</h1></div>)
  
}

export default App
