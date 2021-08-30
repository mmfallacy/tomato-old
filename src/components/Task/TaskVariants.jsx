import React from "react";
import styled, { css } from "styled-components";

const FinishedTask = css`
    background-color: #d99a9a;
    color: #f8bebe;
    text-decoration: line-through;
`;

const TaskVariants = {
    finished: FinishedTask,
    active: null,
    unfinished: null,
};
export default TaskVariants;
