import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app";
import { Pages } from "./util";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { HashRouter, Routes, Route } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyCpRAziu3-OqFZ6VAOJOXmsiQm2-okEaG8",
    authDomain: "tau-ceti-f.firebaseapp.com",
    projectId: "tau-ceti-f",
    storageBucket: "tau-ceti-f.appspot.com",
    messagingSenderId: "1053965008067",
    appId: "1:1053965008067:web:4d9823ef923a24f8857676",
    measurementId: "G-W5K0T2Q9JS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const performance = getPerformance(app);

const routes = Pages.map((_, index) => <Route key={index} path={"/" + (index + 1)} element={ <App id={index + 1} />} />);

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                {routes}
                <Route path="*" element={ <App id="0" /> } />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
);