import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Page } from "@/components";
import Background from "./mobile/Background";

const MobilePage = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={path}>
                <Page background={Background}></Page>
            </Route>
        </Switch>
    );
};

export default MobilePage;
