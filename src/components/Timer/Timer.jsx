import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import Clock from "./Clock";

const TimerContainer = styled.div``;

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

            <button onClick={() => onStart()}>Start</button>
        </TimerContainer>
    );
};

export default styled(_Timer)``;
