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
