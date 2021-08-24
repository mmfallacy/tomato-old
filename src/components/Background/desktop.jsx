import React from "react";
import styled, { css } from "styled-components";
import { Blob } from "@/components";

const BackgroundContainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: -1;
`;

const Background = () => (
    <BackgroundContainer>
        <Blob pos={{ top: "-200px", left: "0px", angle: "55deg" }} />
        <Blob pos={{ top: "-285px", right: "100px", angle: "55deg" }} />
        <Blob pos={{ bottom: "-230px", right: "-100px", angle: "55deg" }} />
        <Blob pos={{ bottom: "-382px", left: "82px", angle: "55deg" }} />
    </BackgroundContainer>
);

export default Background;
