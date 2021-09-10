import { Overlay } from "@/components";
import React from "react";
import styled from "styled-components";

const OverlayModalContainer = styled.div`
    z-index: 99999;
`;

const useOverlay = (render, defaultState) => {
    const [active, setActive] = React.useState(defaultState);

    const overlayRef = React.useRef();

    const onOverlayClick = React.useCallback(() => {
        setActive(false);
    }, []);

    React.useEffect(() => {
        overlayRef.current.addEventListener("click", onOverlayClick);
        return () =>
            overlayRef.current.removeEventListener("click", onOverlayClick);
    });

    return [
        () => (
            <>
                <Overlay ref={overlayRef} active={active} />
                <OverlayModalContainer>{render(active)}</OverlayModalContainer>
            </>
        ),
        active,
        setActive,
    ];
};

export default useOverlay;
