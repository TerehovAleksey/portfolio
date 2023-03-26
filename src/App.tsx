import React from 'react'
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import ScrollToTop from "./utils/ScrollToTop";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <ScrollToTop/>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/project/:id" element={<Project/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </Provider>
        </div>
    )
}

export default App
