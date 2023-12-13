import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

export function Router(){
  return (
    <Routes>
      <Route path="/" element={< Home/>}>
        {/* <Route path="/IgnitePomodoro/" element={<Home />} />
        <Route path="/IgnitePomodoro/history" element={<History />} /> */}
      </Route>
    </Routes>
  )
}