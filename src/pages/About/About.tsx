import { ArrowBack, ArrowForward } from "@material-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ContentBox from "../../components/ContentBox";
import DynamicColumns from "../../components/DynamicColumns";
import VLCPaper from "../../files/VLCPaper.pdf";
import {
    Screen1,
    Screen2,
    Screen3,
    Screen4,
    Screen5,
} from "../../files/sharequotepics";
import {
    ListContainer,
    PageContent,
    SliderWrapper,
    TileBody,
    TileHeader,
} from "../style";

function About() {
    const tiles = [
        <ContentBox>
            <TileHeader>About Me</TileHeader>
            <TileBody>
                Hi! I'm a software engineer working at Target. My strengths
                include React.js/React Native frontend development, Go/Kotlin
                backend development, Android development, and C/C++ embedded
                development. I'm a quick learner and always interested in
                developing new skills.
            </TileBody>
        </ContentBox>,
        <ContentBox>
            <TileHeader>VLC project</TileHeader>
            <TileBody>
                <iframe
                    title="VLC Project Video"
                    width="100%"
                    src="https://www.youtube.com/embed/-9nVUHm7zHg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <TileBody>
                    Read my research paper{" "}
                    <a
                        href={VLCPaper}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                </TileBody>
            </TileBody>
        </ContentBox>,
        <ContentBox>
            <TileHeader>ShareQuote</TileHeader>
            <SliderWrapper>
                <Slider prevArrow={<ArrowBack />} nextArrow={<ArrowForward />}>
                    <img src={Screen1} alt="App Screenshot 1" />
                    <img src={Screen2} alt="App Screenshot 2" />
                    <img src={Screen3} alt="App Screenshot 3" />
                    <img src={Screen4} alt="App Screenshot 4" />
                    <img src={Screen5} alt="App Screenshot 5" />
                </Slider>
            </SliderWrapper>
        </ContentBox>,
        <ContentBox>
            <TileHeader>Contact</TileHeader>
            <TileBody>
                <ListContainer>
                    <li>andrewbenington57@gmail.com</li>
                    <li>
                        <a href="https://www.linkedin.com/in/andrew-benington/">
                            LinkedIn
                        </a>
                    </li>
                </ListContainer>
            </TileBody>
        </ContentBox>,
    ];

    return (
        <PageContent>
            <DynamicColumns elements={tiles} />
        </PageContent>
    );
}
export default About;
