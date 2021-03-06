import React from "react";
import styled from "styled-components";
import {
    MobileBG as Background,
    MobileNavbar,
    Page,
    Title,
    Text,
    Task,
    Action,
    ContextMenu,
} from "@/components";
import { useCachedState, useOverlay } from "@/hooks";
import { AiOutlinePlus } from "react-icons/ai";

const Header = styled(Text)`
    font-size: 24px;
    color: #ff8080;
    width: 100%;
    text-align: center;
`;

const PageContainer = styled(Page)`
    padding: 32px;

    ${Title}, ${Header} {
        margin-bottom: 48px;
    }
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
    const [ContextMenuWithOverlay, active, setActive] = useOverlay(
        (active) => (
            <ContextMenu
                active={active}
                options={[
                    {
                        name: "This is a context option",
                    },
                    {
                        name: "This is a context option 2",
                        minor: true,
                    },
                ]}
            />
        ),
        false
    );
    return (
        <PageContainer background={Background}>
            <Title bold size="1.5rem">
                Tomato
            </Title>
            <Header>Tasks</Header>
            <TaskListContainer>
                {tasks.map((el, i) => (
                    <Task key={i} {...el} />
                ))}
            </TaskListContainer>
            <MobileNavbar />
            <Action icon={AiOutlinePlus} action={() => setActive(true)} />
            <ContextMenuWithOverlay />
        </PageContainer>
    );
};

export default TaskList;
