import React from "react";
import styled from "styled-components";
import { Text } from "@/components";
import Variants from "./TaskVariants";

export const TaskContainer = styled.div`
    display: flex;
    position: relative;
    max-height: 48px;
    width: 100%;
    padding: 13px;
    padding-left: 40px;
    padding-right: 24px;
    border-radius: 24px;
    position: relative;

    ${Text} {
        width: 100%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 22px;
    }

    &:before {
        content: " ";
        background-color: white;
        margin: 4px 0;
        height: 12px;
        width: 12px;
        border-radius: 300px;
        position: absolute;
        left: 16px;
    }

    &:hover {
        max-height: 200px;
        ${Text} {
            overflow: visible;
            text-overflow: clip;
            white-space: normal;
        }
    }

    ${({ variant }) => Variants[variant]}
`;

export const Task = ({ name, className, variant }) => {
    return (
        <TaskContainer className={className} variant={variant}>
            <Text semibold size="16px">
                {name}
            </Text>
        </TaskContainer>
    );
};
