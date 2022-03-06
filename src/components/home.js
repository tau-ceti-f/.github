import "../styles/home.css";
import { Component, StrictMode } from "react";
import { App } from "./app";
import { assets } from "../utility/blockchain";
import { HashRouter, Routes, Route } from "react-router-dom";

export class Home extends Component {
    render() {
        const routes = assets.map((_, index) => <Route key={index} path={"/" + (index + 1)} element={ <App id={index + 1} />} />);
        return (
            <StrictMode>
                <HashRouter>
                    <Routes>
                        {routes}
                        <Route path="*" element={ <App id="0" /> } />
                    </Routes>
                </HashRouter>
            </StrictMode>
        );
    }
}