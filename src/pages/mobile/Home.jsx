import { Page } from "@/components";
import Text from "@/components/Text";
import React from "react";
import styled from "styled-components";
import Background from "./Background";

const HomeContainer = styled(Page)`
    display: flex;
`;

const Home = () => {
    return (
        <HomeContainer background={Background}>
            <Text>Tomato</Text>
        </HomeContainer>
    );
};

export default Home;
