import React from "react";
import styled from "styled-components";
import { BiPause, BiPlay, BiRevision } from "react-icons/bi";

const StyledCCBase = styled.button`
    background-color: #ff8080;
    height: 56px;
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 300px;
    border: none;
    cursor: pointer;

    svg {
        height: 32px;
        width: 32px;
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
        height: 24px;
        width: 24px;
    }
`;
export const CCStart = styled(CCBase).attrs((_) => ({ icon: BiPlay }))``;
