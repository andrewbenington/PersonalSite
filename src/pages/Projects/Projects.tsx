import { Link } from "react-router-dom";
import Slider from "react-slick";
import ContentBox from "../../components/ContentBox";
import DynamicColumns from "../../components/DynamicColumns";
import {
    Screen1,
    Screen2,
    Screen3,
    Screen4,
    Screen5,
} from "../../files/sharequotepics";
import { PageContent } from "../About/style";

const tiles = [
    <ContentBox>
        <h3>VLC Transmitter</h3>
        <p>
            Conducted semester-long project on visible light communication
            (VLC), during which I built a functioning VLC system using LEDs as
            transmitters and receivers. I learned how to program an Arduino, how
            to write an algorithm to decode an analog signal, and how to apply
            prior research to the development of my own finished product.
        </p>
        <Link to="/projects/vlc-project">Details</Link>
    </ContentBox>,
    <ContentBox>
        <h3>ShareQuote (2019-2021)</h3>
        <p>
            Personal project; a social media app for keeping track of and
            tagging friends in funny things they've said.
        </p>
        <Slider>
            <img src={Screen1} alt="App Screenshot 1" />
            <img src={Screen2} alt="App Screenshot 2" />
            <img src={Screen3} alt="App Screenshot 3" />
            <img src={Screen4} alt="App Screenshot 4" />
            <img src={Screen5} alt="App Screenshot 5" />
        </Slider>
    </ContentBox>,
    <ContentBox>
        <h3>Subawu (2019-2020)</h3>
        <p>
            I was the main frontend Flutter developer for the mobile app Subawu,
            a service for matching students with study partners. While it was a
            valuable first experience working on a development team, work
            stopped because of the COVID-19 pandemic and never resumed.
        </p>
    </ContentBox>,
];

function Projects(props: {} | Readonly<{}>) {
    return (
        <PageContent>
            <DynamicColumns elements={tiles} />
        </PageContent>
    );
}

export default Projects;