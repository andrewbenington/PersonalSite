import { PageContent, CarouselImage } from './style'
//import Carousel from '@brainhubeu/react-carousel';
import { Screen1, Screen2, Screen3, Screen4, Screen5 } from '../../files/sharequotepics';
import { FlexCol } from '../../style';
import ContentBox from '../../components/ContentBox';
import VLCPaper from '../../files/VLCPaper.pdf'
import React from 'react';
function About() {
  return (
    <PageContent>
      <FlexCol>
        <ContentBox>
          <h3>About Me</h3>
          <p>Hi! I'm a Computer Science student attending University of Illinois, graduating in December 2021.
            Right now I'm looking for a full time job in software engineering and/or networking, but I'm a quick learner and
            always interested in entering new fields. I have experience in Java, C and C++, Python, and
            Javascript, as well as working in an Agile environment, using git, lower-layer networking, full stack development,
            and web and mobile development.
          </p>
        </ContentBox>
        <ContentBox>
          <p>
            I work well with others and contribute ideas in a group
            setting, and I am always eager to pick up new skills and use the resources available to me to do so. </p>
          <p>I'm excited to have the opportunity to be a Software Engineering Intern at Target this summer.</p>
        </ContentBox>

        <ContentBox>
          <h3>VLC project</h3>
          <iframe title="VLC Project Video" width="100%" src="https://www.youtube.com/embed/-9nVUHm7zHg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p>Read my research paper <a href={VLCPaper} target='_blank' rel='noopener noreferrer'>here</a></p>

        </ContentBox>
      </FlexCol>
      <ContentBox>

        <h3>Sharequote</h3>
        {/* <Carousel>
          <CarouselImage src={Screen1} alt="App Screenshot 1" />
          <CarouselImage src={Screen2} alt="App Screenshot 2" />
          <CarouselImage src={Screen3} alt="App Screenshot 3" />
          <CarouselImage src={Screen4} alt="App Screenshot 4" />
          <CarouselImage src={Screen5} alt="App Screenshot 5" />
        </Carousel> */}
      </ContentBox>
    </PageContent>);
}

export default About;