import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DesktopPage from "@/pages/DesktopPage";
import MobilePage from "@/pages/MobilePage";
import { isDesktop } from "@/helpers";

function App() {
    return (
        <Router>
            <Route exact path="/">
                {isDesktop() ? <DesktopPage /> : <MobilePage />}
            </Route>
        </Router>
    );
}

export default App;
