import React from "react";
import styled from "styled-components";
import Clock from "./Clock";

const TimerContainer = styled.div``;

const _Timer = ({ className }) => (
    <TimerContainer className={className}>
        <Clock />
    </TimerContainer>
);

const Timer = styled(_Timer)``;

export default Timer;
