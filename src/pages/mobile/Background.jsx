import React from "react";
import styled, { css } from "styled-components";
import { Blob, Page } from "@/components";

const BackgroundContainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: -1;
`;

const StyledBlob = styled(Blob)`
    position: absolute;
    ${({ pos }) =>
        css`
            top: ${pos?.top ?? "auto"};
            left: ${pos?.left ?? "auto"};
            bottom: ${pos?.bottom ?? "auto"};
            right: ${pos?.right ?? "auto"};
            transform: rotate(${pos?.angle ?? "auto"});
        `}
`;

const Background = () => (
    <BackgroundContainer>
        <StyledBlob pos={{ top: "10vh", left: "-30vw", angle: "55deg" }} />
    </BackgroundContainer>
);

export default Background;
