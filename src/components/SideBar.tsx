import styled from "styled-components";
import headshot from "../files/headshot.jpg";
import { Headshot } from "./style";

import resume from "../files/2023ResumeFull.pdf";

const sideBarColor = "#222E66";

const SideBarCol = styled.div`
    width: 180px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background-color: ${sideBarColor};
    overflow-x: hidden;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SideBarLink = styled.a`
    padding: 6px 16px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #ffffff;
    display: block;
    font-weight: bold;
    &hover: {
        background-color: #203666;
    }
`;

function SideBar() {
    return (
        <SideBarCol>
            <Headshot src={headshot} alt={"Andrew Benington Headshot"} />
            <SideBarLink href="https://www.linkedin.com/in/andrew-benington/">
                LinkedIn
            </SideBarLink>
            <SideBarLink href="http://www.github.com/andrewbenington">
                GitHub
            </SideBarLink>
            <SideBarLink
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
            >
                Full Résumé
            </SideBarLink>
        </SideBarCol>
    );
}

export default SideBar;
