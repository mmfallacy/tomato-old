import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Page } from "@/components";
import { DesktopBG as Background } from "@/components";

const DesktopPage = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={path}>
                <Page background={Background}></Page>
            </Route>
        </Switch>
    );
};

export default DesktopPage;
