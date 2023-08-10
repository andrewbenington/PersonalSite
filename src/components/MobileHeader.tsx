import { Subtitle } from "../consts/HeaderStrings";
import { FlexColWide, MobilePageTitle } from "../style";
import { Banner, Info, Name } from "./style";

function MobileHeader(props: { title: string; setTitle: Function }) {
    return (
        <FlexColWide>
            <Banner>
                <Name>Andrew Benington</Name>
                <br></br>
                <Info>
                    <p>{Subtitle}</p>
                </Info>
                <MobilePageTitle>{props.title}</MobilePageTitle>
            </Banner>
        </FlexColWide>
    );
}

export default MobileHeader;
