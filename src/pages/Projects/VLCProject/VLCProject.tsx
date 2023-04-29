import ContentBox, { ContentShell } from "../../../components/ContentBox";
import { FlexCol, FlexRow, VideoWrapper } from "../../../style";
import { PageContent } from "../../About/style";

function VLCProject() {
    return (
        <PageContent>
            <FlexCol>
                <FlexRow>
                    <ContentShell>
                        <VideoWrapper>
                            <iframe title="VLC Project Video" src="https://www.youtube.com/embed/-9nVUHm7zHg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </VideoWrapper>
                    </ContentShell>
                </FlexRow>
                <FlexRow>
                    <ContentBox>
                        <h3>VLC Transmitter</h3>
                        <p>Conducted semester-long project on visible light communication (VLC), during which I built a functioning VLC system using LEDs as transmitters and receivers.
                            I learned how to program an Arduino, how to write an algorithm to decode an analog signal, and how to apply prior research
                            to the development of my own finished product.</p>
                    </ContentBox>
                    <ContentBox>
                        <h3>ShareQuote (2019-2021)</h3>
                        <p>Personal project; a social media app for keeping track of and tagging friends in funny things they've said.
                        </p>
                    </ContentBox>
                </FlexRow>
            </FlexCol>
        </PageContent >
    );
}

export default VLCProject;