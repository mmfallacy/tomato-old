import React from "react";
import styled, { css } from "styled-components";

const FinishedTask = css`
    background-color: #d99a9a;
    color: #f8bebe;
    text-decoration: line-through;
`;

const UnfinishedTask = css`
    background-color: #fbbcbc;
    color: white;
`;

const ActiveTask = css`
    background-color: #ff8282;
    color: white;
`;

const TaskVariants = {
    finished: FinishedTask,
    active: ActiveTask,
    unfinished: UnfinishedTask,
};
export default TaskVariants;
