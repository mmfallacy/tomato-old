import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 99999;

    background-color: rgba(0, 0, 0, 0.4);
`;

export default Overlay;
