import React from "react";
import styled, { css } from "styled-components";
import { Blob } from "@/components";

const BackgroundContainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
`;

const Background = () => (
    <BackgroundContainer>
        <Blob pos={{ top: "10vh", left: "-30vw", angle: "55deg" }} />
    </BackgroundContainer>
);

export default Background;
