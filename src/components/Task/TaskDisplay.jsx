import React from "react";
import styled from "styled-components";
import { Task } from "./Task";

const TaskDisplay = styled(Task)`
    &:after {
        content: "${({ after }) => after}";
        color: white;
        font-size: 14px;
        line-height: 22px;
    }
`;

export default TaskDisplay;
