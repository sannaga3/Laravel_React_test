import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>

    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}