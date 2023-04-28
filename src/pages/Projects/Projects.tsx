import ContentBox from '../../components/ContentBox'
import { FlexRow } from '../../style';
import { PageContent, CarouselImage } from '../About/style';
// import Carousel from '@brainhubeu/react-carousel';
import { Screen1, Screen2, Screen3, Screen4, Screen5 } from '../../files/sharequotepics';
import React from "react";
import { Button, withStyles } from '@material-ui/core';
import { ArrowForwardIos } from '@material-ui/icons';
// import { Link } from 'react-router-dom';

const DetailsButton = withStyles({
    root: {
        width: '100%',
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        fontStyle: 'bold',
        padding: '6px 12px',
        border: '1px solid',
        borderColor: '#ffffff',
        lineHeight: 1.5,
        textDecorationLine: 'none',
        textCombineUpright: 'none',
        '&:hover': {
            borderColor: '#444444',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#aaaaaa',
            borderColor: 'black',
        },
    },
})(Button);

function Projects() {
    return (
        <PageContent>
            <FlexRow>
                <ContentBox>
                    <h3>Subawu (2019-2020)</h3>
                    <p>Built a solid foundation in C++, and learned the utility and drawbacks of various data structures.</p>
                </ContentBox>
                <ContentBox>
                    <h3>VLC Transmitter</h3>
                    <p>Conducted semester-long project on visible light communication (VLC), during which I built a functioning VLC system using LEDs as transmitters and receivers.
                        I learned how to program an Arduino, how to write an algorithm to decode an analog signal, and how to apply prior research
                        to the development of my own finished product.</p>
                    {/* <Link to="/projects/vlc-project">
                        <DetailsButton variant="outlined" size="large" aria-label="Details">
                            Details
                            <ArrowForwardIos />
                        </DetailsButton>
                    </Link> */}
                </ContentBox>
                <ContentBox>
                    <h3>ShareQuote (2019-2021)</h3>
                    <p>Personal project; a social media app for keeping track of and tagging friends in funny things they've said.
                    </p>
                    {/* <Carousel>
                        <CarouselImage src={Screen1} alt="App Screenshot 1" />
                        <CarouselImage src={Screen2} alt="App Screenshot 2" />
                        <CarouselImage src={Screen3} alt="App Screenshot 3" />
                        <CarouselImage src={Screen4} alt="App Screenshot 4" />
                        <CarouselImage src={Screen5} alt="App Screenshot 5" />
                    </Carousel> */}
                </ContentBox>

            </FlexRow>
        </PageContent >
    );
}

export default Projects;