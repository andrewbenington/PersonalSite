import ContentBox from "../../components/ContentBox";
import DynamicColumns from "../../components/DynamicColumns";
import { PageContent } from "../About/style";
import { ListContainer } from "../Skills/style";
const tiles = [
    <ContentBox>
        <h2>You can contact me at:</h2>
        <ListContainer>
            <li>andrewbenington57@gmail.com</li>
            <li>630-746-0054</li>
        </ListContainer>
    </ContentBox>,
    // <ContentBox>
    //     <h2>Location:</h2>
    //     <p>
    //         <b>Champaign, IL</b>
    //     </p>
    //     <p> until June 2022</p>
    // </ContentBox>,
];
function Contact() {
    return (
        <PageContent>
            <DynamicColumns elements={tiles} />
        </PageContent>
    );
}

export default Contact;
