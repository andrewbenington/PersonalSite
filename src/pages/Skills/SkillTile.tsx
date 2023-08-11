import { Grid } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import { useState } from "react";
import ContentBox from "../../components/ContentBox";
import Mobile from "../../components/Mobile";

const YEAR_IN_MILLISECONDS = 1000 * 60 * 60 * 24 * 365;

function yearsSince(date: number): number {
    const diffMillis = Date.now() - date;
    return Math.round(diffMillis / YEAR_IN_MILLISECONDS);
}

interface SkillTileProps {
    name: string;
    since: string;
    desc: string;
    usedIn: {
        name: string;
        link?: string;
        github?: string;
    }[];
}

function SkillTile(props: SkillTileProps) {
    const { name, since, desc, usedIn } = props;
    const [isMobile, setIsMobile] = useState(false);
    return (
        <ContentBox style={{ width: "calc(100% - 60px)" }}>
            <Grid container>
                <Grid item xs={isMobile ? 12 : 8}>
                    <p style={{ fontSize: 18, fontWeight: "bold" }}>{name} </p>
                    <p
                        style={{
                            fontSize: 16,
                            fontWeight: "normal",
                        }}
                    >
                        {yearsSince(Date.parse(since))} years experience
                    </p>
                    <p
                        style={{
                            fontSize: 16,
                            fontWeight: "normal",
                        }}
                    >
                        {desc}
                    </p>
                </Grid>
                <Grid item xs={isMobile ? 12 : 4}>
                    <p style={{ marginBottom: 10 }}>Experience:</p>
                    {usedIn.map((u, i) => (
                        <Grid
                            container
                            style={{
                                padding: "10px 5px",
                                borderTop: i > 0 ? "1px solid #ccc" : undefined,
                            }}
                        >
                            <Grid item xs={u.github ? 10 : 12}>
                                {u.link ? (
                                    <a href={u.link}>{u.name}</a>
                                ) : (
                                    u.name
                                )}
                            </Grid>
                            {u.github ? (
                                <Grid
                                    item
                                    xs={2}
                                    style={{
                                        alignItems: "center",
                                        display: "grid",
                                        justifyContent: "end",
                                    }}
                                >
                                    <a href={u.github}>
                                        <GitHub htmlColor="black" />
                                    </a>
                                </Grid>
                            ) : (
                                <div />
                            )}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Mobile setIsMobile={setIsMobile} />
        </ContentBox>
    );
}

export default SkillTile;
