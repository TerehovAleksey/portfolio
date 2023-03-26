import React from 'react'
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import ScrollToTop from "./utils/ScrollToTop";
import {Provider} from "react-redux";
import {store} from "./store/store";
import PageLayout from "./layouts/PageLayout";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <ScrollToTop/>
                    <Navbar/>
                    <Routes>
                        <Route path="/portfolio" element={<PageLayout/>}>
                            <Route path="" element={<Home/>}/>
                            <Route path="projects" element={<Projects/>}/>
                            <Route path="project/:id" element={<Project/>}/>
                            <Route path="contacts" element={<Contacts/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    )
}

export default App
