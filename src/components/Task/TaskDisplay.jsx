import React from "react";
import styled from "styled-components";
import { TaskContainer } from "./Task";
import { Text } from "@/components";

const TaskDisplayContainer = styled(TaskContainer)`
    &:after {
        content: "${({ after }) => after}";
        color: white;
        font-size: 14px;
        line-height: 22px;
    }
`;

const TaskDisplay = ({ name, className, after }) => {
    return (
        <TaskDisplayContainer className={className} after={after}>
            <Text semibold size="16px" color="white">
                {name}
            </Text>
        </TaskDisplayContainer>
    );
};
export default TaskDisplay;
