import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DesktopRouter from "@/pages/DesktopRouter";
import MobileRouter from "@/pages/MobileRouter";
import { isDesktop } from "@/helpers";
import GlobalStyle from "./globalStyles";
import Task from "./components/Task";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Route exact path="/">
                {isDesktop() ? <DesktopRouter /> : <MobileRouter />}
            </Route>
        </Router>
    );
}

export default App;
