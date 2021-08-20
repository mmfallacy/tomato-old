import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DesktopRouter from "@/pages/DesktopRouter";
import MobileRouter from "@/pages/MobileRouter";
import { isDesktop } from "@/helpers";

function App() {
    return (
        <Router>
            <Route exact path="/">
                {isDesktop() ? <DesktopRouter /> : <MobileRouter />}
            </Route>
        </Router>
    );
}

export default App;
