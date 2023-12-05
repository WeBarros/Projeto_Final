import Inicio from "./components/inicio"
import Sobre from "./components/sobre"
import Contatos from "./components/contatos"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {


  return (
    <>
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/Contatos">Contatos</Link>
        </li>
      </ul>
    </nav>
    <Routes>

      <Route element={<Inicio/>} path="/"/>
      <Route element={<Sobre/>} path="/Sobre"/>
      <Route element={<Contatos/>} path="/Contatos"/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
