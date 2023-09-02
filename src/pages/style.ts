import styled from "styled-components";

export const TileTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-top: 12px;
`;

export const TileHeader = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 12px;
`;

export const TileBody = styled.div`
    margin-top: 12px;
`;

export const ListContainer = styled.div`
    padding-left: 15px;
    align-self: center;
    list-style-type: "- ";
    li {
        margin-bottom: 8px;
    }
`;

export const SliderWrapper = styled.div`
    .slick-arrow {
        color: black;
        z-index: 2;
    }
    .slick-prev {
        left: 0px;
    }
    .slick-next {
        right: 0px;
    }
`;

export const PageContent = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
`;

export const MainPage = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const CarouselImage = styled.img`
    height: 500px;
`;
