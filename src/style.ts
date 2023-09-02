import styled from "styled-components";

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FlexColStretch = styled.div`
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
`;
export const FlexColWide = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const FlexRowRepel = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const VideoWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0px 15px 15px 0px;
    }
`;
