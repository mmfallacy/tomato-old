import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const DesktopPage = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={path}>Desktop Home</Route>
        </Switch>
    );
};

export default DesktopPage;
