import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
    position: relative;
`;

const Page = ({ children, background: BG }) => (
    <PageContainer>
        {BG && <BG />}
        {children}
    </PageContainer>
);

export default Page;
