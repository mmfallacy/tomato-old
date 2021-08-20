import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
    position: relative;
`;

const Page = ({ children }) => <PageContainer>{children}</PageContainer>;