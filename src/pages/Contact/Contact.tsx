import ContentBox from "../../components/ContentBox";
import { PageContent } from "../About/style";
import DynamicColumns from "../../components/DynamicColumns";
const tiles = [
    <ContentBox>
        <h2>You can email me at:</h2>
        <li>andrewbenington57@gmail.com</li>
    </ContentBox>,
    <ContentBox>
        <h2>You can text me at:</h2>
        <li>630-746-0054</li>
    </ContentBox>,
    <ContentBox>
        <h2>Location:</h2>
        <p><b>Champaign, IL</b></p>
        <p> until June 2022</p>
    </ContentBox>
]
function Contact() {
    return (
        <PageContent>
            <DynamicColumns elements={tiles} />
        </PageContent>
    );
}

export default Contact;