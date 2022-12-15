import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./containers/Home";
import Arsenal from "./containers/Arsenal";
function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/arsenal" element={<Arsenal />}/>
            </Routes>
    </BrowserRouter>
    )
}

export default Router

