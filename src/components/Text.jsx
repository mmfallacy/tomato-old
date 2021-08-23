import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.p`
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: ${({ bold }) => bold && "bold"};
    font-size: ${({ size }) => size};
    color: ${({ color }) => color}};

`;

Text.defaultProps = {
    bold: false,
    size: "1rem",
    color: "#FF8080",
};
Text.propTypes = {
    bold: PropTypes.bool,
    size: PropTypes.string,
    color: PropTypes.string,
};

export default Text;
