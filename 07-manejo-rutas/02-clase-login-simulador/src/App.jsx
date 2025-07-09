import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"




export const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user:id" element={<UseProfile/>}/>
    </Routes>
  )
}

export default App
