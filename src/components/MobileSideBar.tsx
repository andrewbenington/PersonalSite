import { Divider, SwipeableDrawer } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import headshot from "../files/headshot.jpg";

const TabButton = styled.button`
    height: 70px;
    width: 60px;
    border-radius: 5px;
    background-color: #222e66;
    border-width: 0px;
`;

const SideBarCol = styled.div`
    width: 180px;
    z-index: 1;
    background-color: #222e66;
    overflow-x: hidden;
    flex: 1;
    flex-direction: column;
    display: inline;
`;

const SideBarLink = styled.a`
    padding: 6px 16px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #ffffff;
    display: block;
    font-weight: bold;
    &:hover {
        background-color: #203666;
    }
`;

const SideBarNavLink = styled(Link)`
    padding: 6px 16px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #ffffff;
    display: block;
    font-weight: bold;
    background-color: #575555;
    &:hover {
        background-color: grey;
    }
`;

const MobileHeadshot = styled.img`
    height: 180px;
    width: auto;
    margin-top: 20px;
    border-radius: 8px;
    background-color: #222e66;
    margin-left: 24px;
`;

function MobileSideBar(props: {
    isOpen: boolean;
    setIsOpen: Function;
    handler: Function;
}) {
    const closeSidebar = () => {
        props.setIsOpen(false);
    };

    const openSidebar = () => {
        props.setIsOpen(true);
    };

    return (
        <div style={{ position: "fixed", top: 0, bottom: 0 }}>
            <TabButton
                onClick={openSidebar}
                style={{ position: "fixed", bottom: 0 }}
            >
                <ArrowForwardIos htmlColor="white" />
            </TabButton>
            <SwipeableDrawer
                open={props.isOpen}
                onClose={closeSidebar}
                onOpen={openSidebar}
            >
                <SideBarCol>
                    <MobileHeadshot
                        src={headshot}
                        alt={"Andrew Benington Headshot"}
                    />
                    <SideBarNavLink
                        style={{ marginTop: "20px" }}
                        to="/"
                        onClick={() => {
                            props.handler("About");
                        }}
                    >
                        {" "}
                        About{" "}
                    </SideBarNavLink>
                    <SideBarNavLink
                        to="/skills"
                        onClick={() => {
                            props.handler("Skills");
                        }}
                    >
                        {" "}
                        Skills{" "}
                    </SideBarNavLink>
                    <SideBarNavLink
                        to="/classes"
                        onClick={() => {
                            props.handler("Classes");
                        }}
                    >
                        {" "}
                        Classes{" "}
                    </SideBarNavLink>
                    <SideBarNavLink
                        to="/projects"
                        onClick={() => {
                            props.handler("Projects");
                        }}
                    >
                        {" "}
                        Projects{" "}
                    </SideBarNavLink>
                    <SideBarNavLink
                        to="/contact"
                        onClick={() => {
                            props.handler("Contact");
                        }}
                    >
                        {" "}
                        Contact{" "}
                    </SideBarNavLink>
                    <Divider light={true} />
                    <div style={{ height: "20px" }} />
                    <SideBarLink href="https://www.linkedin.com/in/andrew-benington/">
                        LinkedIn
                    </SideBarLink>
                    <SideBarLink href="https://www.github.com/andrewbenington">
                        GitHub
                    </SideBarLink>
                    <SideBarLink href="https://drive.google.com/file/d/1bOZRrjaFJbQu9N319vfHNdY8Kp3ePNMz/view">
                        Full Résumé
                    </SideBarLink>
                </SideBarCol>
            </SwipeableDrawer>
        </div>
    );
}

export default MobileSideBar;
