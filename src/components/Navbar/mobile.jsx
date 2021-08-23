import React from "react";
import styled from "styled-components";
import { NavLink as _NavLink } from "react-router-dom";
import { MdTimer } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";

const NavbarContainer = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    position: fixed;
    bottom: 24px;
    left: 0;
`;

const StyledNavLink = styled(_NavLink).attrs(() => {
    return {
        activeClassName: "active",
    };
})`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fffafa;
    cursor: pointer;

    &.active {
        background-color: #ffe5e5;
        cursor: default;
    }

    svg {
        height: 24px;
        width: 24px;
        path {
            fill: #ff8080;
        }
    }

    &:hover,
    &:focus,
    &:visited {
        path {
            fill: #ff8080;
        }
    }
`;

const NavLink = ({ icon: Icon, ...rest }) => (
    <StyledNavLink {...rest}>
        <Icon />
    </StyledNavLink>
);

const MobileNavbar = () => {
    return (
        <NavbarContainer>
            <NavLink to="/" exact icon={MdTimer} />
            <NavLink to="/tasks" exact icon={AiOutlineUnorderedList} />
        </NavbarContainer>
    );
};

export default MobileNavbar;
