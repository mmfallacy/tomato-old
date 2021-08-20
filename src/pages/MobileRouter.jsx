import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Page from "./mobile/Page";

const MobilePage = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={path}>
                <Page />
            </Route>
        </Switch>
    );
};

export default MobilePage;
