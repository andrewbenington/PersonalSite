import React from "react";
import ContentBox from "../../components/ContentBox";
import DynamicColumns from "../../components/DynamicColumns";
import { FlexCol } from "../../style";
import { PageContent } from "../About/style";

function Skills() {
  const tiles = [
    <ContentBox>
      <h3>C/C++</h3>
      <i>&emsp;3 years experience</i>
      <h4>Used in:</h4>
      <div>
        <li>CS 126 (Software Design Studio)</li>
        <li>CS 225 (Discrete Structures)</li>
        <li>CS 241 (System Programming)</li>
        <li>
          <a href="/projects/vlc-project">VLC project</a>
        </li>
      </div>
    </ContentBox>,
    <ContentBox>
      <h3>Python</h3>
      <i>&emsp;5 years experience</i>
      <br></br>
      <h4>Used in:</h4>
      <p>
        <li>BLE Research (data visualization)</li>
        <li>CS Stats classes (machine learning projects)</li>
        <li>CS Audio projects (sound data/frequency manipulation)</li>
      </p>
    </ContentBox>,
    <ContentBox>
      <h3>JavaScript/TypeScript</h3>
      <i>&emsp;1 year experience</i>
      <br></br>
      <h4>At Target, used for:</h4>
      <p>
        <li>Backend endpoints and worker scripts</li>
        <li>React.js webpage design</li>
      </p>
      <h4>
        <a href="sharequote.html">ShareQuote</a> project:
      </h4>
      <p>
        <li>FireBase cloud functions</li>
      </p>
    </ContentBox>,
    <ContentBox>
      <h3>Lower Layer Networking</h3>
      <i>&emsp;2 years experience</i>
      <br></br>
      <p>
        <li>Implemented my own TCP protocol for networking class</li>
        <li>
          <a href="/projects/vlc-project">Built hardware and software</a> to
          send data over light as class project
        </li>
      </p>
    </ContentBox>,
    <ContentBox>
      <h3>HTML/CSS</h3>
      <i>&emsp;2 years experience</i>
      <br></br>
      <p>
        Built HTML skills to create this website, and put to use working at
        Target for React development
      </p>
    </ContentBox>,
    <ContentBox>
      <h3>Java</h3>
      <i>&emsp;5 years experience</i>
      <br></br>
      <p>
        Used in conjunction with Android Studio to create a mobile app for a
        UI/UX class
      </p>
    </ContentBox>,
    <ContentBox>
      <h3>Dart/Flutter</h3>
      <i>&emsp;2 years experience</i>
      <br></br>
      <p>
        Beginning the summer of 2019, I learned Flutter for{" "}
        <a href="https://www.linkedin.com/company/subawu/">Subawu</a>, an app
        startup I had just joined. I took to Flutter quickly and became their
        lead front end developer. I enjoy its flexibility, and I've developed my
        own apps using Flutter on the side, such as{" "}
        <a href="sharequote.html">ShareQuote</a>.
      </p>
    </ContentBox>,
  ];

  return (
    <PageContent>
      <DynamicColumns elements={tiles} />
    </PageContent>
  );
}

export default Skills;
