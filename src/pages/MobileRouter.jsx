import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Page } from "@/components";
import Background from "./mobile/Background";
import Home from "./mobile/Home";

const MobilePage = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={path}>
                <Home />
            </Route>
        </Switch>
    );
};

export default MobilePage;
