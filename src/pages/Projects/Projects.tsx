import ContentBox from '../../components/ContentBox'
import { PageContent, CarouselImage } from '../About/style';
import { Screen1 } from '../../files/sharequotepics';
import { Link } from 'react-router-dom';
import DynamicColumns from '../../components/DynamicColumns';

const tiles = [
    <ContentBox>
        <h3>VLC Transmitter</h3>
        <p>Conducted semester-long project on visible light communication (VLC), during which I built a functioning VLC system using LEDs as transmitters and receivers.
            I learned how to program an Arduino, how to write an algorithm to decode an analog signal, and how to apply prior research
            to the development of my own finished product.</p>
        <Link to="/projects/vlc-project">
            Details
        </Link>
    </ContentBox>,
    <ContentBox>
        <h3>ShareQuote (2019-2021)</h3>
        <p>Personal project; a social media app for keeping track of and tagging friends in funny things they've said.
        </p>
        <CarouselImage src={Screen1} alt="App Screenshot 1" />
    </ContentBox>,
    <ContentBox>
        <h3>Subawu (2019-2020)</h3>
        <p>Built a solid foundation in C++, and learned the utility and drawbacks of various data structures.</p>
    </ContentBox>
]

function Projects(props: {} | Readonly<{}>) {
    return (
        <PageContent>
            <DynamicColumns elements={tiles}/>
        </PageContent >
    );

}

export default Projects;