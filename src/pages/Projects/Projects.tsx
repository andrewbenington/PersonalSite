import { Link } from "react-router-dom";
import Slider from "react-slick";
import DynamicColumns from "../../components/DynamicColumns";
import {
    Screen1,
    Screen2,
    Screen3,
    Screen4,
    Screen5,
} from "../../files/sharequotepics";
import { PageContent } from "../style";
import ProjectTile from "./ProjectTile";

interface Project {
    name: string;
    description: string;
    github?: string;
    body?: any;
}

const projects: Project[] = [
    {
        name: "go-ledger",
        github: "https://github.com/andrewbenington/go-ledger",
        description:
            "Shell budgeting application that supports parsing transaction data from CSVs, keyword-based categorizing the transactions, and compiling them into a single Microsoft Excel spreadsheet.",
    },
    {
        name: "VLC Project",
        github: "https://github.com/andrewbenington/VLC",
        description:
            "Conducted semester-long project on visible light communication (VLC), during which I built a functioning VLC system using LEDs as transmitters and receivers. I learned how to program an Arduino, how to write an algorithm to decode an analog signal, and how to apply prior research to the development of my own finished product.",
        body: <Link to="/projects/vlc-project">Details</Link>,
    },
    {
        name: "ShareQuote (2019-2021)",
        github: "https://github.com/andrewbenington/ShareQuote",
        description:
            "Personal project; a social media app for keeping track of and tagging friends in funny things they've said.",
        body: (
            <Slider>
                <img src={Screen1} alt="App Screenshot 1" />
                <img src={Screen2} alt="App Screenshot 2" />
                <img src={Screen3} alt="App Screenshot 3" />
                <img src={Screen4} alt="App Screenshot 4" />
                <img src={Screen5} alt="App Screenshot 5" />
            </Slider>
        ),
    },
    {
        name: "OpenHome (2022-2023)",
        github: "https://github.com/andrewbenington/OpenHome",
        description:
            "Hobby project. Electron/React-based application for moving Pokémon between older games. Aims to avoid data loss that occurs when transferring the official way.",
    },
    {
        name: "Subawu (2019-2020)",
        description:
            "I was the main frontend Flutter developer for the mobile app Subawu, a service for matching students with study partners. While it was a valuable first experience working on a development team, work stopped because of the COVID-19 pandemic and never resumed.",
    },
];

function Projects() {
    return (
        <PageContent>
            <DynamicColumns
                elements={projects.map((p) => (
                    <ProjectTile
                        name={p.name}
                        description={p.description}
                        github={p.github}
                    >
                        {p.body}
                    </ProjectTile>
                ))}
            />
        </PageContent>
    );
}

export default Projects;
