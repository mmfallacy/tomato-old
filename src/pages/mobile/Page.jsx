import React from "react";
import styled from "styled-components";
import { Blob } from "@/components";

const StyledContainer = styled.div`
    position: relative;
`;

const StyledBG = styled.div`
    position: fixed;
    top: 0;
    z-index: -1;
`;

const Background = () => (
    <StyledBG>
        <Blob />
    </StyledBG>
);

const Page = ({ children, ...rest }) => (
    <StyledContainer>
        <Background />
        {children}
    </StyledContainer>
);

export default Page;
