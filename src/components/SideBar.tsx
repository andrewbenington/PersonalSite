import styled from "styled-components";
// import resume from '../files/2022Resume.pdf';

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

const SideBarLink = styled.a`
  padding: 6px 16px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #ffffff;
  display: block;
  font-weight: bold;
  &hover: {
    background-color: #203666;
  }
`;

function SideBar() {
  return (
    <SideBarCol>
      <SideBarLink href="https://www.linkedin.com/in/andrew-benington/">
        LinkedIn
      </SideBarLink>
      <SideBarLink href="http://www.github.com/andrewbenington">
        Github
      </SideBarLink>
      <SideBarLink href="https://app.joinhandshake.com/users/13298925">
        Handshake
      </SideBarLink>
      {/* <SideBarLink href={resume} target='_blank' rel='noopener noreferrer'>R&eacute;sum&eacute;</SideBarLink> */}
    </SideBarCol>
  );
}

export default SideBar;
