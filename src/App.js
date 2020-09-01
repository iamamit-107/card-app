import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import "./assets/scss/common.scss";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WorkPage from "./pages/WorkPage";

function App() {
    return (
        <>
            <Switch>
                {/* this is the routing section. using the path we can find that page component */}
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/work" component={WorkPage} />
            </Switch>
        </>
    );
}

export default App;
