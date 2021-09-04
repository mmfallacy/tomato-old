import React from "react";
import styled from "styled-components";
import { ClockRing, ClockRingShadow, ClockRingHead } from "./ClockRing";

// TODO: Refactor timer logic to use setTimeout instead of setInterval for more fluid animation and simpler implementation
// TODO: Lift state to Timer component
// FIXME: Refactor timer animation code with readability in mind

const ClockContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    font-size: 8px;

    ${ClockRing} {
        --circumference: calc(${2 * Math.PI} * 50% - 2em);
        position: absolute;
        top: 0;
        left: 0;
    }

    ${ClockRingShadow} {
        --circumference: calc(${2 * Math.PI} * 50% - 6em);
        position: absolute;
        top: -2em;
        left: -2em;
    }

    ${ClockRingShadow}, ${ClockRing} {
        stroke-dasharray: var(--circumference), var(--circumference);

        transition: stroke-dashoffset 0.1s linear;
        stroke-dashoffset: calc(
            var(--circumference) *
                ${({ percent, $fill }) => ($fill ? percent : 1 + percent)}
        );
        transform: rotateZ(-90deg)
            rotateX(${({ $fill }) => ($fill ? 180 : 0)}deg);
    }

    ${ClockRingHead} {
        transition: transform 1.1s linear;
        ${({ percent }) => `transform: rotateZ(${360 * percent}deg)`}
    }
`;

const Clock = ({ className, fill = true }) => {
    const [percent, setPercent] = React.useState(1);
    const [time, setTime] = React.useState(120);

    const intervalRef = React.useRef(null);

    const onStart = () => {
        console.log("Start");
        setTime((t) => {
            intervalRef.current = setInterval(onInterval, 1000);
            return 0;
        });
    };

    const onInterval = React.useCallback(() => setTime((t) => t + 1), []);
    const onEnd = () => {
        console.log("End");
        clearInterval(intervalRef.current);
    };

    React.useEffect(() => {
        setPercent(time / 120);
        if (time === 120) onEnd();
        console.log(time);
    }, [time]);

    return (
        <ClockContainer className={className} percent={percent} $fill={fill}>
            <ClockRing />
            <ClockRingShadow />
            <ClockRingHead />
            <button onClick={() => onStart()}>Start</button>
        </ClockContainer>
    );
};

export default Clock;
