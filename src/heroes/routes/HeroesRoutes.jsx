import { Routes , Route, Navigate } from "react-router-dom"
import { Dc, Hero, Marvel, Search } from "../pages"
import { Navbar } from "../../ui"

//Este componente nos permite tener sola las rutas de los heroes
export const HeroesRoutes = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="marvel" element={<Marvel/>}/>
        <Route path="dc" element={<Dc/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="hero/:id" element={<Hero/>}/>
        <Route path="/" element={<Navigate to="/marvel"/>}/>
      </Routes>
    </div>
    </>
  )
}
