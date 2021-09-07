import React from "react";
import styled from "styled-components";
import { Text } from "@/components";

// prettier-ignore
const secondsToMinSec = (s) =>`${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2,"0")}`;

const StyledClockText = styled(Text)`
    color: #f08080;
`;

const _ClockText = ({ className, time, rest }) => (
    <StyledClockText className={className} {...rest} size="48px" semibold>
        {secondsToMinSec(Math.ceil(time / 1000))}
    </StyledClockText>
);

export default styled(_ClockText)``;
