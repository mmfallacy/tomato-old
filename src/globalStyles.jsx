import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, #root{
        height:100%;
        width:100%;
        font-family: 'Segoe UI';
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }
    #root {
        position:relative;
    }
`;

export default GlobalStyle;
