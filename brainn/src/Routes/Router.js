import { BrowserRouter,Routes,Route } from "react-router-dom"
import MegaSena from "../Pages/MegaSena/MegaSena"
import Quina from "../Pages/Quina/Quina"
import Lotofacil from "../Pages/LotoFacil/LotoFacil"
import Timemania from "../Pages/Timemania/Timemania"
import DiaDeSorte from "../Pages/DiaDeSorte/DiaDeSorte"
import Lotomania from "../Pages/Lotomania/Lotomania"
import React from "react"

 const Router = () => {
    return(
        <BrowserRouter>
            <Routes>

                <Route index element={<MegaSena/>}/>

                <Route path="/quina" element={<Quina/>}/>
                
                <Route path="/lotofacil" element={<Lotofacil/>}/>
                
                <Route path="/lotomania" element={<Lotomania/>}/>
                
                <Route path="/timemania" element={<Timemania/>}/>
                
                <Route path="/dia/de/sorte" element={<DiaDeSorte/>}/>
                
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router 