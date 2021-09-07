import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import Clock from "./Clock";
import { CCPause, CCStop, CCStart } from "./ClockControls";

const ControlContainer = styled.div`
    height: 56px;
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 100%;
`;

const TimerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
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

    const onStart = () => setActive(true);
    const onPause = () => setActive(false);
    const onStop = () => {
        setActive(false);
        setTime(duration);
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
                {active ? (
                    <CCPause onClick={onPause} />
                ) : time > 0 ? (
                    <>
                        <CCStart onClick={onStart} />
                        <CCStop onClick={onStop} minor />
                    </>
                ) : (
                    <CCStop onClick={onStop} />
                )}
            </ControlContainer>
        </TimerContainer>
    );
};

export const Timer = styled(_Timer)``;
export const TimerControl = ControlContainer;
