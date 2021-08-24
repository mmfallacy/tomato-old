import React from "react";
import styled from "styled-components";
import { MobileBG as Background } from "@/components";
import { MobileNavbar } from "@/components";
import { Page } from "@/components";
import { Text } from "@/components";

const HomeContainer = styled(Page)`
    padding: 32px;
`;

const Title = styled(Text)``;

const Home = () => {
    return (
        <HomeContainer background={Background}>
            <Title bold size="1.5rem">
                Tomato
            </Title>
            <MobileNavbar />
        </HomeContainer>
    );
};

export default Home;
