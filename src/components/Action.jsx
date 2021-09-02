import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledAction = styled.button`
    height: 64px;
    width: 64px;
    border: none;
    border-radius: 300px;
    background-color: #ff8282;
    box-shadow: 0 2px 4px rgba(255, 153, 153, 0.5);

    display: flex;
    position: fixed;
    bottom: 120px;
    right: 32px;
    z-index: 3000;
    align-items: center;
    justify-content: center;

    cursor: ${(action) => (action ? "pointer" : "default")};

    svg {
        height: 32px;
        width: 32px;
        fill: white;
    }
`;

const Action = ({ icon: Icon, className, action }) => (
    <StyledAction className={className} onClick={action}>
        <Icon />
    </StyledAction>
);

Action.propTypes = {
    icon: PropTypes.elementType.isRequired,
    action: PropTypes.func,
    className: PropTypes.string,
};

export default Action;
