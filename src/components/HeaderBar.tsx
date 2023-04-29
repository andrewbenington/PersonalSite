import headshot from '../files/headshot.jpg';
import { Banner, Headshot, Info, Name, PageTitle } from './style';
import { FlexColStretch, FlexColWide, FlexRow, FlexRowRepel } from '../style';
import Navigation from './Navigation';


function HeaderBar(props: { title: string, setTitle: Function }) {

    return (
        <FlexRow>
            <Headshot src={headshot} alt={"Andrew Benington Headshot"} />
            <FlexColWide>
                <Banner>
                    <FlexRowRepel>
                        <FlexColStretch>
                            <Name>Andrew Benington</Name>
                            <br></br>
                            <Info>
                                <p>Senior, University of Illinois at Urbana-Champaign</p>
                                <p>Bachelor of Science in Computer Science</p>
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

