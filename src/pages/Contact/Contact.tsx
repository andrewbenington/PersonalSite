import ContentBox from "../../components/ContentBox";
import { FlexCol, FlexRow } from "../../style";
import { PageContent } from "../About/style";
import React from "react";
function Contact() {
    return (
        <PageContent>
            <FlexRow>
                <FlexCol>
                    <ContentBox>
                        <h2>You can email me at:</h2>
                        <li>andrewbenington57@gmail.com</li>
                        <li>aab4@illinois.edu</li>
                    </ContentBox>
                    <ContentBox>
                        <h2>You can text me at:</h2>
                        <li>630-746-0054</li>
                    </ContentBox>
                </FlexCol>
                <ContentBox>
                    <h2>Location:</h2>
                    <p><b>Champaign, IL</b></p>
                     <p> until at least December 2021</p>
                </ContentBox>
            </FlexRow>
        </PageContent>
    );
}

export default Contact;