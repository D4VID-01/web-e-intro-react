import { Routes, Route} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Store } from "./Pages/Store";
import { Cart } from "./Pages/Cart";
import { NotFound } from "./Pages/NotFound";



export const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
    
  )
}

export default{App};
