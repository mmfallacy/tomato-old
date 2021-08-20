import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Page from "./desktop/Page";

const DesktopPage = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={path}>
                <Page />
            </Route>
        </Switch>
    );
};

export default DesktopPage;
