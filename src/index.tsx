import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga4";
import App from "./App";
import "./index.css";

const TRACKING_ID = "G-1WV0EPE3YE";
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
