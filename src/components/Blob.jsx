import React from "react";
import styled, { css } from "styled-components";

const Blob = ({ svgProps, pathProps, className }) => (
    <svg
        width="781"
        height="709"
        viewBox="0 0 781 709"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...svgProps}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M349.794 79.5792C423.616 70.637 487.468 -22.7643 555.034 6.54397C619.851 34.66 578.626 138.848 616.876 195.432C657.723 255.857 786.734 268.815 780.538 340.135C774.08 414.461 646.761 417.028 592.864 471.828C554.711 510.619 555.313 572.212 515.554 609.556C469.58 652.737 413.768 689.096 349.794 700.131C280.732 712.043 198.46 715.89 144.676 673.527C90.2616 630.667 105.762 548.602 79.0078 486.844C56.6517 435.238 -1.15228 395.827 0.247942 340.135C1.64595 284.531 57.1576 245.808 86.2859 197.369C115.748 148.376 118.902 77.0104 173.023 52.8176C227.841 28.3135 289.573 86.8738 349.794 79.5792Z"
            fill="#FFFAFA"
            {...pathProps}
        />
    </svg>
);

const StyledBlob = styled(Blob)`
    position: absolute;
    ${({ pos }) =>
        css`
            top: ${pos?.top ?? "auto"};
            left: ${pos?.left ?? "auto"};
            bottom: ${pos?.bottom ?? "auto"};
            right: ${pos?.right ?? "auto"};
            transform: rotate(${pos?.angle ?? "auto"});
        `}
`;
export default StyledBlob;
