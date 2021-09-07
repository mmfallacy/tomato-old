import React from "react";
import styled, { css } from "styled-components";

const _ClockRingShadow = (props) => (
    <svg
        {...props}
        width="272"
        height="272"
        viewBox="0 0 272 272"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="136" cy="136" r="128" />
    </svg>
);

const _ClockRing = (props) => (
    <svg
        {...props}
        width="240"
        height="240"
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="120" cy="120" r="116" />
    </svg>
);

const ClockRingBob = styled.div`
    height: 2.5em;
    width: 2.5em;
    background-color: #ff8080;
    border-radius: 300px;
`;

const ClockRingBobContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;

    ${ClockRingBob} {
        position: absolute;
        left: 50%;
        top: -0.75em;
        transform: translateX(-50%);

        transition: opacity 0.07s linear;

        ${({ hide }) =>
            hide &&
            css`
                opacity: 0;
            `}
    }
`;

const _ClockRingHead = (props) => (
    <ClockRingBobContainer {...props}>
        <ClockRingBob />
    </ClockRingBobContainer>
);
export const ClockRing = styled(_ClockRing)`
    height: 100%;
    width: 100%;
    circle {
        stroke: #ff8080;
        stroke-width: 1em;
    }
`;
export const ClockRingShadow = styled(_ClockRingShadow)`
    height: calc(100% + 4em);
    width: calc(100% + 4em);
    circle {
        stroke: #ff0000;
        stroke-opacity: 5%;
        stroke-width: 2em;
    }
`;
export const ClockRingHead = styled(_ClockRingHead)``;
