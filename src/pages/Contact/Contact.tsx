import ContentBox from "../../components/ContentBox";
import DynamicColumns from "../../components/DynamicColumns";
import { ListContainer, PageContent } from "../style";
const tiles = [
    <ContentBox>
        <h2>You can contact me at:</h2>
        <ListContainer>
            <li>andrewbenington57@gmail.com</li>
            <li>
                <a href="https://www.linkedin.com/in/andrew-benington/">
                    LinkedIn
                </a>
            </li>
        </ListContainer>
    </ContentBox>,
];
function Contact() {
    return (
        <PageContent>
            <DynamicColumns elements={tiles} />
        </PageContent>
    );
}

export default Contact;
