import React from "react";
import styled, { css } from "styled-components";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 99999;

    background-color: rgba(0, 0, 0, 0.4);

    transition: opacity 1s linear;

    opacity: 0;
    pointer-events: none;

    ${({ active }) =>
        active &&
        css`
            opacity: 1;
            pointer-events: auto;
        `};
`;

export default Overlay;
