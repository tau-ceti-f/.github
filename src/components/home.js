import "../styles/home.css";
import React from "react";
import { App } from "./app";
import { Pages } from "../utility/blockchain";
import { HashRouter, Routes, Route } from "react-router-dom";

export const Home = () => {
    const routes = Pages.map((_, index) => <Route key={index} path={"/" + (index + 1)} element={ <App id={index + 1} />} />);

    return (
        <React.StrictMode>
            <HashRouter>
                <Routes>
                    {routes}
                    <Route path="*" element={ <App id="0" /> } />
                </Routes>
            </HashRouter>
        </React.StrictMode>
    );
};