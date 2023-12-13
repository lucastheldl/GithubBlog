import { useEffect } from "react"
import "./App.css"
import { Card } from "./components/Card";
import cover from "./assets/Covercover.png"
import { SearchBar } from "./components/SearchBar";
import { ProfileCard } from "./components/ProfileCard";



function App() {

  async function getUser(){
    await fetch(`https://api.github.com/users/lucastheldl`).then(res=>res.json()).then(data=>console.log(data))
  }

  useEffect(()=>{
    getUser();
  },[])

  return(
    <>
        <img src={cover} className="cover"/>
        <div className="wrapper">
          <ProfileCard/>
          <SearchBar/>
        <div className="posts-container"><Card/><Card/><Card/><Card/><Card/><Card/></div>
    
      </div>
    </>)
  
}

export default App
