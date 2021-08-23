import { Page } from "@/components";
import React from "react";
import styled from "styled-components";
import Background from "./Background";
import { MobileNavbar } from "@/components/Navbar";
import Text from "@/components/Text";

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
