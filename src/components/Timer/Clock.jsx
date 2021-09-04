import React from "react";
import styled from "styled-components";
import { ClockRing, ClockRingShadow, ClockRingHead } from "./ClockRing";

const ClockContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    font-size: 8px;

    ${ClockRing} {
        position: absolute;
        top: 0;
        left: 0;
    }

    ${ClockRingShadow} {
        position: absolute;
        top: -2em;
        left: -2em;
    }

    ${ClockRingHead} {
        transform: rotateZ(0);
    }
`;

const Clock = ({ className }) => {
    return (
        <ClockContainer className={className}>
            <ClockRing />
            <ClockRingShadow />
            <ClockRingHead />
        </ClockContainer>
    );
};

export default Clock;
