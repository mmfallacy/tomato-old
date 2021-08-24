import React from "react";
import styled from "styled-components";
import { MobileBG as Background } from "@/components";
import { MobileNavbar } from "@/components";
import { Page } from "@/components";
import { Text } from "@/components";

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
