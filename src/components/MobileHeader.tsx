import { FlexColWide, MobilePageTitle } from "../style";
import { Name, Info, Banner } from "./style";

function MobileHeader(props: { title: string, setTitle: Function }) {
    return <FlexColWide>
        <Banner>
            <Name>Andrew Benington</Name>
            <br></br>
            <Info>
                <p>Senior, University of Illinois at Urbana-Champaign</p>
                <p>Bachelor of Science in Computer Science</p>
            </Info>
            <MobilePageTitle>{props.title}</MobilePageTitle>
        </Banner>
    </FlexColWide>
}

export default MobileHeader;