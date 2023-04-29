import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";
import EmptyComponent from "./components/EmptyComponent";
import HeaderBar from "./components/HeaderBar";
import Mobile from "./components/Mobile";
import MobileHeader from "./components/MobileHeader";
import MobileSideBar from "./components/MobileSideBar";
import SideBar from "./components/SideBar";
import {
    About,
    Classes,
    Contact,
    Projects,
    Skills,
    Test,
    VLCProject,
} from "./pages";
import { FlexRowTall } from "./style";

export const MainPageWrapper = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;
function MainPage() {
    const [isMobile, setIsMobile] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    let pages = useLocation().pathname.split("/");
    let pageName =
        pages[pages.length - 1].charAt(0).toUpperCase() +
        pages[pages.length - 1].slice(1);
    if (pageName === "Vlc-project") pageName = "VLC Project";
    const [title, setTitle] = useState(pageName === "" ? "About" : pageName);

    return (
        <MainPageWrapper>
            <Mobile setIsMobile={setIsMobile} />
            {isMobile ? (
                <MobileHeader title={title} setTitle={setTitle} />
            ) : (
                <HeaderBar title={title} setTitle={setTitle} />
            )}
            {isMobile ? (
                <MobileSideBar
                    isOpen={isSidebarOpen}
                    setIsOpen={setIsSidebarOpen}
                    handler={setTitle}
                />
            ) : (
                <EmptyComponent />
            )}
            <FlexRowTall>
                {isMobile ? <EmptyComponent /> : <SideBar />}
                <Switch>
                    <Route path="/" exact component={About} />
                    <Route path="/skills" exact component={Skills} />
                    <Route path="/classes" exact component={Classes} />
                    <Route path="/projects" exact component={Projects} />
                    <Route
                        path="/projects/vlc-project"
                        exact
                        component={VLCProject}
                    />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/test" exact component={Test} />
                </Switch>
            </FlexRowTall>
        </MainPageWrapper>
    );
}

export default MainPage;
