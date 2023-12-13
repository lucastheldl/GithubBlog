import { useEffect } from "react"
import "./App.css"
import { Card } from "./components/Card";
import cover from "./assets/Covercover.png"



function App() {

  async function getUser(){
    await fetch(`https://api.github.com/users/lucastheldl`).then(res=>res.json()).then(data=>console.log(data))
  }

  useEffect(()=>{
    getUser();
  },[])

  return(<div>
    <img src={cover} className="cover"/>
    <div className="posts-container"><Card/><Card/><Card/><Card/><Card/><Card/></div>
    
    </div>)
  
}

export default App
