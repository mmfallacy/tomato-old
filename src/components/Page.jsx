import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Page = ({ children, background: BG, className }) => (
    <PageContainer className={className}>
        {BG && <BG />}
        {children}
    </PageContainer>
);

export default Page;
