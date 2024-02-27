import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Test from "./pages/Test";
import AddSongPage from "./pages/AddSongPage";
import Header from "./Header";
import Layout from "./Layout";
import IntroPage from "./pages/IntroPage/IntroPage";
const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/intro" element={<IntroPage/>}/>
                <Route path="" element={<Layout/>}>
                    <Route index element={<HomePage />}/>
                    <Route path="/AddSong" element={<AddSongPage />}/>
                    <Route path='/Test' element={<Test />}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default Routers