import React from "react";
import styled from "styled-components";
import { Text } from "@/components";

const StyledOptions = styled.button`
    border: none;
    background: none;
    width: 100%;

    color: ${({ primary, minor }) =>
        primary ? "#f08080" : minor ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.8)"};
`;

const ContextMenuContainer = styled.div`
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 32px;
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.1);
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;

    ${StyledOptions}:not(:last-child) {
        margin-bottom: 16px;
    }
`;

const ContextMenuOptions = ({ name, ...rest }) => (
    <StyledOptions {...rest}>
        <Text size="20px">{name}</Text>
    </StyledOptions>
);

const ContextMenu = ({ options = [], ...props }) => {
    return (
        <ContextMenuContainer {...props}>
            {options.map((el, i) => (
                <ContextMenuOptions key={i} {...el} />
            ))}
        </ContextMenuContainer>
    );
};

export default styled(ContextMenu)``;
