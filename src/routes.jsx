import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./containers/Home";
import Arsenal from "./containers/Arsenal";
import Mapas from "./containers/Mapas";
import Agentes from "./containers/Agentes";

function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/arsenal" element={<Arsenal />}/>
                <Route path="/mapas" element={<Mapas />}/>
                <Route path="/agentes" element={<Agentes />}/>
            </Routes>
    </BrowserRouter>
    )
}

export default Router

