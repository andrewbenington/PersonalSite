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
                                <p>Software Engineer at Target</p>
                                <p>
                                    SITE IS OUTDATED, WILL BE ACCURATE AGAIN
                                    SOON
                                </p>
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
