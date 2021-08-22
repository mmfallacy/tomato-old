import React from "react";
import styled from "styled-components";

const TaskContainer = styled.div`
    display: flex;
    position: relative;
    background-color: #ffcdcd;
`;

const Task = ({ name }) => {
    return <TaskContainer>{name}</TaskContainer>;
};

export default Task;
