import { Divider, SwipeableDrawer } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import resume from '../files/2022Resume.pdf';
import headshot from "../files/headshot.jpg";

const TabButton = styled.button`
  height: 70px;
  width: 60px;
  border-radius: 5px;
  background-color: #03153b;
  border-width: 0px;
`;

const SideBarCol = styled.div`
  max-width: 153px;
  min-width: 153px;
  position: sticky;
  z-index: 1;
  background-color: #03153b;
  overflow-x: hidden;
  flex: 1;
  flex-direction: column;
  display: inline;
`;

const SideBarLink = styled(Link)`
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
  height: 214px;
  width: auto;
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
    <div>
      <TabButton onClick={openSidebar}>
        <ArrowForwardIos htmlColor="white" />
      </TabButton>
      <SwipeableDrawer
        open={props.isOpen}
        onClose={closeSidebar}
        onOpen={openSidebar}
      >
        <SideBarCol>
          <MobileHeadshot src={headshot} alt={"Andrew Benington Headshot"} />
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
          <SideBarLink to="https://www.linkedin.com/in/andrew-benington/">
            LinkedIn
          </SideBarLink>
          <SideBarLink to="http://www.github.com/andrewbenington">
            Github
          </SideBarLink>
          <SideBarLink to="https://app.joinhandshake.com/users/13298925">
            Handshake
          </SideBarLink>
          {/* <SideBarLink to={resume} target='_blank' rel='noopener noreferrer'>R&eacute;sum&eacute;</SideBarLink> */}
        </SideBarCol>
      </SwipeableDrawer>
    </div>
  );
}

export default MobileSideBar;
