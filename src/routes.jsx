import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/index"
import Filmes from "./pages/Filmes/index"
import Header from "./pages/Header/index"
import Filme from "./pages/Filme/index"
import Error from "./pages/Error"

export default function Rotas(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/favorito" element={<Filmes/>}/>
                <Route path="/filme/:id" element={<Filme/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}