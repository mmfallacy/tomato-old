import React from "react";
import styled from "styled-components";
import {
    MobileBG as Background,
    MobileNavbar,
    Page,
    Title,
    Task,
} from "@/components";
import { useCachedState } from "@/hooks";

const PageContainer = styled(Page)`
    padding: 32px;
`;

const TaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 70%;

    ${Task} {
        margin-bottom: 18px;
    }
`;

const TaskList = () => {
    const [tasks, setTasks] = useCachedState("tasks", []);
    return (
        <PageContainer background={Background}>
            <Title bold size="1.5rem">
                Tomato
            </Title>

            <TaskListContainer>
                {tasks.map((el, i) => (
                    <Task key={i} {...el} />
                ))}
            </TaskListContainer>
            <MobileNavbar />
        </PageContainer>
    );
};

export default TaskList;
