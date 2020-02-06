import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Logger from "./components/Logger";

ReactDOM.render(
    <Router>
        <Logger />
    </Router>
    , document.getElementById("root"))