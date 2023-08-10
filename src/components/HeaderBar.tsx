import { Subtitle } from "../consts/HeaderStrings";
import { FlexColStretch, FlexColWide, FlexRow, FlexRowRepel } from "../style";
import Navigation from "./Navigation";
import { Banner, Info, Name, PageTitle } from "./style";

function HeaderBar(props: { title: string; setTitle: Function }) {
    return (
        <FlexRow>
            <FlexColWide>
                <Banner>
                    <FlexRowRepel>
                        <FlexColStretch>
                            <Name>Andrew Benington</Name>
                            <br></br>
                            <Info>
                                <p>{Subtitle}</p>
                            </Info>
                        </FlexColStretch>

                        <PageTitle>{props.title}</PageTitle>
                    </FlexRowRepel>
                    <Navigation handler={props.setTitle} />
                </Banner>
            </FlexColWide>
        </FlexRow>
    );
}

export default HeaderBar;
