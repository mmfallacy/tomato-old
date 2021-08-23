import { Page } from "@/components";
import Text from "@/components/Text";
import React from "react";
import styled from "styled-components";
import Background from "./Background";

const HomeContainer = styled(Page)`
    display: flex;
    padding: 24px;
`;

const Title = styled(Text)``;

const Home = () => {
    return (
        <HomeContainer background={Background}>
            <Title bold size="1.5rem">
                Tomato
            </Title>
        </HomeContainer>
    );
};

export default Home;
