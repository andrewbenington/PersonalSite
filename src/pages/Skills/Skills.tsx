import React from "react";
import ContentBox from "../../components/ContentBox";
import { FlexCol } from "../../style";
import { PageContent } from "../About/style";

function Skills() {
    return (
        <PageContent>
            <FlexCol>
                <ContentBox>
                    <h3>C/C++</h3>
                    <i>&emsp;3 years experience</i>
                    <h4>Used in:</h4>
                    <div>
                        <li>CS 126 (Software Design Studio)</li>
                        <li>CS 225 (Discrete Structures)</li>
                        <li>CS 241 (System Programming)</li>
                        <li><a href="rhythmgame.html">Rhythm Game</a></li>
                    </div>
                </ContentBox>
                <ContentBox>

                    <h3>Python</h3>
                    <i>&emsp;5 years experience</i>
                    <br></br>
                    <p>Used in many of my elective classes, such as Bioinformatics and Audio Computing,
                        as well as some major classes such as Numerical Methods and CS Statistics.
                        Familiar with the NumPy and SciPy libraries for data/matrix manipulation, and with
                        the Jupyter Notebook environment.</p>
                </ContentBox>
            </FlexCol>

            <FlexCol>

                <ContentBox>
                    <h3>JavaScript</h3>
                    <i>&emsp;1 year experience</i>
                    <br></br>
                    <p>For my <a href="sharequote.html">ShareQuote</a> project, I learned JavaScript to write Cloud Firestore
                        functions for
                        managing database data and notifications.</p>
                </ContentBox>
                <ContentBox>
                    <h3>HTML/CSS</h3>
                    <i>&emsp;1 year experience</i>
                    <br></br>
                    <p>I learned CSS to create this site. I built it from the ground up by following online tutorials. I'm
                        resourceful when I need to work on projects like this that requires a new skill, and was able to finish this
                        in
                        a few days.</p>
                </ContentBox>
            </FlexCol>

            <FlexCol>
                <ContentBox>
                    <h3>Java</h3>
                    <i>&emsp;5 years experience</i>
                    <br></br>
                    <p>While Java hasn't been my language of choice for two years now, I keep my skills brushed up for the
                        occasional coding interview/coding challenge that requires it.</p>
                </ContentBox>

                <ContentBox>
                    <h3>Dart/Flutter</h3>
                    <i>&emsp;1 year experience</i>
                    <br></br>
                    <p>Beginning the summer of 2019, I learned Flutter for <a
                        href="https://www.linkedin.com/company/subawu/">Subawu</a>, an app startup I had just
                        joined. I took to Flutter quickly and became their lead front end developer. I enjoy its flexibility, and I've
                        developed my own apps using Flutter on the side, such as <a href="sharequote.html">ShareQuote</a>.
                    </p>
                </ContentBox>
            </FlexCol>
        </PageContent>
    );
}

export default Skills;