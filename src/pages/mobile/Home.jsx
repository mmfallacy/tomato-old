import React from "react";
import styled from "styled-components";
import {
    MobileBG as Background,
    TaskDisplay,
    Title,
    MobileNavbar,
    Page,
    Timer,
    TimerControl,
} from "@/components";

const HomeContainer = styled(Page)`
    padding: 32px;
    align-items: center;

    ${Title} {
        margin-bottom: 48px;
        align-self: start;
    }

    ${Timer} {
        margin-top: 116px;
        height: 240px;
        width: 240px;
    }

    ${TimerControl} {
        margin-top: 116px;
    }
`;

const Home = () => {
    return (
        <HomeContainer background={Background}>
            <Title bold size="1.5rem">
                Tomato
            </Title>
            <TaskDisplay name="Task Name" after="4/4" variant="active" />
            <Timer />
            <MobileNavbar />
        </HomeContainer>
    );
};

export default Home;
