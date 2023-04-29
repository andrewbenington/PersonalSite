import { useMediaQuery } from "@material-ui/core";

export default function Mobile(props: { setIsMobile: Function}) {
    const isMobile = useMediaQuery('(max-width: 800px)');
    props.setIsMobile(isMobile);
    return <div></div>
}