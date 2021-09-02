import React from "react";
import styled from "styled-components";
import {
    MobileBG as Background,
    TaskDisplay,
    Title,
    MobileNavbar,
    Page,
    Text,
} from "@/components";

const HomeContainer = styled(Page)`
    padding: 32px;

    ${Title} {
        margin-bottom: 48px;
    }
`;

const Home = () => {
    return (
        <HomeContainer background={Background}>
            <Title bold size="1.5rem">
                Tomato
            </Title>
            <TaskDisplay name="Task Name" after="4/4" variant="active" />
            <MobileNavbar />
        </HomeContainer>
    );
};

export default Home;
