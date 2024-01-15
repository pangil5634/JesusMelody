import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Test from "./pages/Test";
import AddSongPage from "./pages/AddSongPage";
const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path="/AddSong" element={<AddSongPage />}/>
                <Route path='/Test' element={<Test />}/>
            </Routes>
        </Router>
    );
}

export default Routers