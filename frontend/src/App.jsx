import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import Category from './components/Category';
// import ProductArea from './components/ProductArea';
import ExclusiveDeal from './components/ExclusiveDeal';
import BrandArea from './components/BrandArea';
import EndProductArea from './components/EndProductArea';
import Footer from './components/Footer';
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Banner></Banner>
            <Features></Features>
            <Category></Category>
            {/* <ProductArea></ProductArea> */}

            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>

            <ExclusiveDeal></ExclusiveDeal>
            <BrandArea></BrandArea>
            <EndProductArea></EndProductArea>
            <Footer></Footer>
        </BrowserRouter>

    );
};

export default App;


