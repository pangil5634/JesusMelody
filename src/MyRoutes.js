import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Test from "./pages/Test";
const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/Test' element={<Test />}/>
            </Routes>
        </Router>
    );
}

export default Routers