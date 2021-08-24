import { Page } from "@/components";
import React from "react";
import styled from "styled-components";
import Background from "./Background";
import { MobileNavbar } from "@/components/Navbar";
import Text from "@/components/Text";

const PageContainer = styled(Page)`
    padding: 32px;
`;

const Title = styled(Text)``;

const TaskList = () => {
    return (
        <PageContainer background={Background}>
            <Title bold size="1.5rem">
                Tomato
            </Title>

            <MobileNavbar />
        </PageContainer>
    );
};

export default TaskList;
