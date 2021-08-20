import React from "react";
import styled from "styled-components";
import { Blob } from "@/components";

const Blob = (props) => {
    return (
        <svg
            width="414"
            height="896"
            viewBox="0 0 414 896"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M386.887 274.533C436.539 329.89 549.673 328.653 564.399 400.814C578.526 470.04 469.528 496 445.098 559.781C419.011 627.891 482.362 741.022 420.376 776.836C355.777 814.16 280.677 711.318 204.876 698.578C151.219 689.56 101.1 725.367 47.7084 714.203C-14.0293 701.294 -75.8186 676.413 -121.539 630.325C-170.895 580.572 -221.218 515.371 -217.346 447.016C-213.429 377.86 -137.304 343.508 -102.045 286.179C-72.5812 238.275 -73.4328 168.319 -27.0011 137.535C19.3572 106.8 82.9111 130.08 139.298 126.173C196.331 122.221 256.61 83.8877 307.462 114.359C358.968 145.223 346.383 229.376 386.887 274.533Z"
                fill="#FFE5E5"
                fillOpacity="0.2"
            />
        </svg>
    );
};

const StyledContainer = styled.div`
    position: relative;
`;

const StyledBG = styled.div`
    position: fixed;
    top: 0;
    z-index: -1;
`;

const Background = () => (
    <StyledBG>
        <Blob />
    </StyledBG>
);

const Page = ({ children, ...rest }) => (
    <StyledContainer>
        <Background />
        {children}
    </StyledContainer>
);

export default Page;
