import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/common/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/Product';
import Footer from './components/common/Footer/Footer';
import AboutUs from './components/pages/AboutUs/AboutUs';
import Blogs from './components/pages/Blogs/Blogs';
import P2P from './components/pages/P2P/P2P';
function App(){
    return(
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/p2p" element={<P2P />} />
        </Routes>
        <Footer />
        </>
    )
}

export default App;