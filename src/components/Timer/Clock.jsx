import React from "react";
import styled from "styled-components";
import ClockText from "./ClockText";
import { ClockRing, ClockRingShadow, ClockRingHead } from "./ClockRing";

// TODO: Lift state to Timer component

const ClockContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    font-size: 8px;

    ${ClockRing} {
        --circumference: calc(${2 * Math.PI} * 50% - 3em);
        position: absolute;
        top: 0;
        left: 0;
    }

    ${ClockRingShadow} {
        position: absolute;
        top: -2em;
        left: -2em;
    }

    ${ClockText} {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -56%);
    }

    ${ClockRing} {
        stroke-dasharray: var(--circumference), var(--circumference);
        transform: rotateZ(-90deg) rotateX(-180deg);
    }
`;

const Clock = ({ className, time, duration, active }) => {
    return (
        <ClockContainer className={className} active={active}>
            <ClockText time={time}></ClockText>
            <ClockRing
                style={{
                    strokeDashoffset: `calc(
            var(--circumference) * ${1 - time / duration}`,
                }}
            />
            <ClockRingShadow />
            <ClockRingHead
                style={{
                    transform: `rotateZ(-${360 * (time / duration)}deg)`,
                }}
                hide={!active}
            />
        </ClockContainer>
    );
};

export default styled(Clock)``;
