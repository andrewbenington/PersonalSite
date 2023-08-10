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
import { PageContent } from "./style";

function About() {
    const tiles = [
        <ContentBox>
            <h3>About Me</h3>
            <p>
                Hi! I'm a software engineer currently working at Target. My
                biggest strength is React.js/React Native frontend development,
                but I'm a quick learner and always interested in entering new
                fields. I have experience in Kotlin, Node.js and Go backend
                development, the latter of which I am currently focusing on.
            </p>
        </ContentBox>,
        <ContentBox>
            <h3>VLC project</h3>
            <iframe
                title="VLC Project Video"
                width="100%"
                src="https://www.youtube.com/embed/-9nVUHm7zHg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <p>
                Read my research paper{" "}
                <a href={VLCPaper} target="_blank" rel="noopener noreferrer">
                    here
                </a>
            </p>
        </ContentBox>,
        <ContentBox>
            <h3>Sharequote</h3>
            <Slider>
                <img src={Screen1} alt="App Screenshot 1" />
                <img src={Screen2} alt="App Screenshot 2" />
                <img src={Screen3} alt="App Screenshot 3" />
                <img src={Screen4} alt="App Screenshot 4" />
                <img src={Screen5} alt="App Screenshot 5" />
            </Slider>
        </ContentBox>,
    ];

    return (
        <PageContent>
            <DynamicColumns elements={tiles} />
        </PageContent>
    );
}
export default About;
