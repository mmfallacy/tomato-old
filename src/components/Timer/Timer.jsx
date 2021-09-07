import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import Clock from "./Clock";
import { CCPause, CCStop, CCStart } from "./ClockControls";

const ControlContainer = styled.div`
    height: 56px;
    width: 56px;

    position: absolute;
    top: 100%;
`;

const TimerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${ControlContainer} {
        margin-top: 80px;
    }
`;

const _Timer = ({ className, duration = 10000 }) => {
    /** Timer States */
    const [active, setActive] = React.useState(false);
    const [time, setTime] = React.useState(duration);
    const intervalRef = React.useRef(null);

    /** Timer Internal Functions */
    const onInterval = React.useCallback(() => {
        setTime((t) => t - 10);
    }, []);

    const onStart = () => {
        setActive((s) => !s);
    };

    /** Timer Effects */
    React.useEffect(() => {
        /** Disable the timer upon manually clicking the button */
        if (!active) return clearInterval(intervalRef.current);
        intervalRef.current = setInterval(onInterval, 10);
    }, [active]);

    React.useEffect(() => {
        /** Disable the timer upon reaching 0 time state */
        if (time > 0) return;
        setActive(false);
    }, [time]);

    return (
        <TimerContainer className={className}>
            <Clock time={time} duration={duration} active={active} />
            <ControlContainer>
                <CCPause />
                <CCStart />
                <CCStop />
            </ControlContainer>
        </TimerContainer>
    );
};

export default styled(_Timer)``;
