import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import {CART, MAIN} from "./constants/routes.ts";
import Header from "./components/Header/Header.tsx";
import CartPage from "./pages/Cart/Cart.tsx";
import Footer from "src/components/Footer/Footer";
import SearchPage from "src/pages/SearchPage/SearchPage";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path={MAIN} element={<Home />} />
                <Route path={CART} element={<CartPage />} />
                <Route path="/search/:searchTerm" element={<SearchPage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default App
