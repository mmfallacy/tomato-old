import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "./mobile/Home";
import TaskList from "./mobile/TaskList";

const MobilePage = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`/tasks`}>
                <TaskList />
            </Route>
            <Route path={path}>
                <Home />
            </Route>
        </Switch>
    );
};

export default MobilePage;
