import ContentBox from "../../components/ContentBox";
import { TileTitle } from "../style";

interface ExperienceTileProps {
    company: string;
    position: string;
    timePeriod: string;
    bullets: string[];
}

function ExperienceTile(props: ExperienceTileProps) {
    const { company, position, timePeriod, bullets } = props;
    return (
        <ContentBox style={{ width: "calc(100% - 60px)" }}>
            <TileTitle>
                {company}
                <span
                    style={{
                        marginLeft: 10,
                        fontSize: 16,
                        fontWeight: "normal",
                        fontStyle: "italic",
                    }}
                >
                    - {position}, {timePeriod}
                </span>
            </TileTitle>
            <p style={{ marginBottom: 10 }}>Experience:</p>
            <ul>
                {bullets.map((bullet, i) => (
                    <li key={`${company}_${position}_bullet_${i}`}>{bullet}</li>
                ))}
            </ul>
        </ContentBox>
    );
}

export default ExperienceTile;
