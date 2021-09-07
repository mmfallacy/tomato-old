import React from "react";
import styled from "styled-components";
import { BiPause, BiPlay, BiRevision } from "react-icons/bi";

const StyledCCBase = styled.button`
    background-color: #ff8080;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 300px;
    border: none;
    cursor: pointer;

    svg {
        height: 60%;
        width: 60%;
        path {
            fill: white;
        }
    }

    transition: transform 0.2s ease-in;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const _CCBase = ({ icon: Icon, ...props }) => (
    <StyledCCBase {...props}>
        <Icon />
    </StyledCCBase>
);

const CCBase = styled(_CCBase)``;

export const CCPause = styled(CCBase).attrs((_) => ({ icon: BiPause }))``;
export const CCStop = styled(CCBase).attrs((_) => ({ icon: BiRevision }))`
    svg {
        height: 42%;
        width: 42%;
    }
`;
export const CCStart = styled(CCBase).attrs((_) => ({ icon: BiPlay }))``;
