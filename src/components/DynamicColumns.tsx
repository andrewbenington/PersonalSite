import { ReactElement, useEffect, useState } from "react";
import { FlexCol, FlexRow } from "../style";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

function DynamicColumns(props: { elements: ReactElement<any, any>[] }) {
    const { width } = useWindowDimensions();
    let cols = 1;
    if (width > 1300) {
        cols = 3;
    } else if (width > 900) {
        cols = 2;
    }

    return (
        <FlexRow>
            {[...new Array(cols)].map((_, i) => (
                <FlexCol>
                    {props.elements.map(function (entry, index, array) {
                        return index % cols === i ? array[index] : null;
                    })}
                </FlexCol>
            ))}
        </FlexRow>
    );
}

export default DynamicColumns;
