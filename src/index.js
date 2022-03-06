import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { Home } from "./components/home.js"
import { render } from "react-dom";

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

render(
    <Home />,
    document.getElementById("root")
);