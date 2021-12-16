import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import 'react-perfect-scrollbar/dist/css/styles.css';
import Header from "./Components/Header"
import Home from "./Pages/Home"
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from "./Pages/Contatc";

const App = () => {

    

    return (
        <>  
            
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Projects" element={<Projects/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App