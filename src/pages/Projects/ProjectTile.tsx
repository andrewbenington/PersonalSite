import { Grid } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import ContentBox from "../../components/ContentBox";

interface ProjectTileProps {
    name: string;
    github?: string;
    description: string;
    children: any;
}

function ProjectTile(props: ProjectTileProps) {
    const { name, github, description, children } = props;
    return (
        <ContentBox>
            <Grid container>
                <Grid item xs={github ? 10 : 12}>
                    <p>{name}</p>
                </Grid>
                {github ? (
                    <Grid
                        item
                        xs={2}
                        style={{
                            alignItems: "center",
                            display: "grid",
                            justifyContent: "end",
                        }}
                    >
                        <a href={github}>
                            <GitHub htmlColor="black" />
                        </a>
                    </Grid>
                ) : (
                    <div />
                )}
                <Grid item xs={12}>
                    <p>{description}</p>
                </Grid>
                <Grid item xs={12}>
                    {children}
                </Grid>
            </Grid>
        </ContentBox>
    );
}

export default ProjectTile;
