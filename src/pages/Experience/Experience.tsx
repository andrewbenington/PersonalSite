import { ListContainer, PageContent } from "../style";
import ExperienceTile from "./ExperienceTile";

function Experience() {
    const experience = [
        {
            company: "Target",
            position: "Engineer",
            timePeriod: "July 2022 - present",
            bullets: [
                "Developing backend applications/microservices in Go, with some React front-end development",
                "Working on GoAlert, an open-source notification and on-call scheduling application",
                "Responsible for building and maintaining CI pipelines.",
            ],
        },
        {
            company: "Pavlov Media",
            position: "Android Developer (IPTV)",
            timePeriod: "January - May 2022",
            bullets: [
                "Main Android developer of an internet TV application. Development primarily in native Android (Kotlin) with some React Native work. Adapted to evolving project requirements from leadership.",
                "Created a satisfying user experience while working within screen size and performance limitations of various Android mobile devices and TVs",
            ],
        },
        {
            company: "Target",
            position: "Software Engineer Intern",
            timePeriod: "June - August 2021",
            bullets: [
                "As a full stack developer on the Target Finds team, developed a React frontend and a RESTful Node.js backend that used a MongoDB database.",
                "Routinely met with users to determine which existing features were helpful, which aspects were frustrating, and which new features would be useful.",
            ],
        },
    ];

    return (
        <PageContent>
            <ListContainer>
                {experience.map((s) => (
                    <ExperienceTile {...s} />
                ))}
            </ListContainer>
        </PageContent>
    );
}

export default Experience;
