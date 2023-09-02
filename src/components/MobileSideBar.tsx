import { Divider, SwipeableDrawer } from "@material-ui/core";
import ReactGA from "react-ga4";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Pages from "../consts/Pages";
import headshot from "../files/headshot.jpg";

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
    margin-bottom: 20px;
    border-radius: 8px;
    background-color: #222e66;
    margin-left: 24px;
`;

function MobileSideBar(props: { isOpen: boolean; setIsOpen: Function }) {
    const closeSidebar = () => {
        props.setIsOpen(false);
    };

    const openSidebar = () => {
        props.setIsOpen(true);
    };

    return (
        <div style={{ position: "fixed", top: 0, bottom: 0 }}>
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
                    {Pages.filter((page) => !page.excludeFromHeader).map(
                        (page) => (
                            <SideBarNavLink
                                key={page.name}
                                to={page.path}
                                onClick={() => {
                                    ReactGA.send({
                                        hitType: "pageview",
                                        page: page.path,
                                        title: page.name,
                                    });
                                    props.setIsOpen(false);
                                }}
                            >
                                {page.name}
                            </SideBarNavLink>
                        )
                    )}
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
