import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const DesktopPage = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={path}></Route>
        </Switch>
    );
};

export default DesktopPage;
