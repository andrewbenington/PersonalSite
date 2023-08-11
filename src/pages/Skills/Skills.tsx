import { PageContent } from "../About/style";
import SkillTile from "./SkillTile";
import { ListContainer } from "./style";

function Skills() {
    const skills = [
        {
            name: "JavaScript/TypeScript",
            since: "1/1/2020",
            desc: "Experience developing React.js web applications using JavaScript and TypeScript. Used libraries including React Router, Material-UI, and Redux. Managing and upgrading package versions with npm and yarn.",
            usedIn: [
                { name: "Target (Engineer)" },
                {
                    name: "Personal Website",
                    link: "https://andrewbenington.dev",
                    github: "https://github.com/andrewbenington/PersonalSite",
                },
                { name: "Pavlov Media (IPTV Android Developer)" },
                { name: "Target (Software Engineer Intern)" },
            ],
        },
        {
            name: "Go",
            since: "2/1/2020",
            desc: "Experience developing Go applications. The most used language for my current position at Target. Used to develop multiple internal applications, as well as GoAlert, an open source on-call application used and developed by Target.",
            usedIn: [
                { name: "Target (Engineer)" },
                {
                    name: "go-ledger",
                    github: "https://github.com/andrewbenington/go-ledger",
                },
            ],
        },
        {
            name: "Native Android",
            since: "1/1/2021",
            desc: "I first learned Android development with Java as part of a UI/UX course project. I've since much preferred using Kotlin. As an Android developer at Pavlov Media, I built the native parts of a React Native application for better device performance on Android TVs. At Target, I wrote an Android application from scratch for an experimental project prototype.",
            usedIn: [
                { name: "Target (Engineer)" },
                { name: "Pavlov Media (IPTV Android Developer)" },
                { name: "College Courses" },
            ],
        },
        {
            name: "Python",
            since: "9/1/2018",
            desc: "I first learned Python in high school, and since then it has been my go-to means of writing quick scripts and small http servers. I've used Python for these purposes in both my personal and professional life.",
            usedIn: [
                { name: "Target (Engineer)" },
                { name: "BLE Research (data visualization)" },
                { name: "College Courses" },
            ],
        },
        {
            name: "C/C++",
            since: "9/1/2018",
            desc: "I've used C and C++ since starting at the University of Illinois in Urbana-Champaign in 2018. Since then, I've used them to write embedded applications for my Arduino VLC project, as well as for ESP32 SoCs at Target.",
            usedIn: [
                { name: "Target (Engineer)" },
                {
                    name: "VLC Project",
                    link: "/projects/vlc-project",
                    github: "https://github.com/andrewbenington/VLCProject",
                },
                { name: "College Courses" },
            ],
        },
        {
            name: "Flutter/Dart",
            since: "6/1/2019",
            desc: "Beginning the summer of 2019, I learned Flutter for Subawu, an app startup I had just joined. I took to Flutter quickly and became their lead front end developer. I enjoy its flexibility, and I've developed my own apps using Flutter on the side, such as ShareQuote.",
            usedIn: [
                {
                    name: "ShareQuote",
                    github: "https://github.com/andrewbenington/ShareQuote",
                },
                { name: "Subawu" },
            ],
        },
    ];

    return (
        <PageContent>
            <ListContainer>
                {skills.map((s) => (
                    <SkillTile {...s} />
                ))}
            </ListContainer>
        </PageContent>
    );
}

export default Skills;
