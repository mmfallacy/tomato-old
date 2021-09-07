import React from "react";
import styled from "styled-components";
import { ClockRing, ClockRingShadow, ClockRingHead } from "./ClockRing";
import ClockText from "./ClockText";

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

    button {
        position: absolute;
        bottom: 10px;
        padding: 4px;
    }
`;

const Clock = ({ className, fill = true, duration = 10000 }) => {
    const [active, setActive] = React.useState(false);
    const [time, setTime] = React.useState(duration);

    const intervalRef = React.useRef(null);

    const onInterval = React.useCallback(() => {
        setTime((t) => t - 10);
    }, []);

    const onStart = () => {
        setActive((s) => !s);
    };

    React.useEffect(() => {
        if (!active) return clearInterval(intervalRef.current);
        intervalRef.current = setInterval(onInterval, 10);
    }, [active]);

    React.useEffect(() => {
        if (time > 0) return;
        setActive(false);
    }, [time]);

    return (
        <ClockContainer className={className} $fill={fill} active={active}>
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
            <button onClick={() => onStart()}>Start</button>
        </ClockContainer>
    );
};

export default Clock;
