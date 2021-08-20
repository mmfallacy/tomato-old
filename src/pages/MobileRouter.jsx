import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const MobilePage = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={path}>Mobile Home</Route>
        </Switch>
    );
};

export default MobilePage;
