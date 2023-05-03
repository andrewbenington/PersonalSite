import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import HeaderBar from "./components/HeaderBar";
import Mobile from "./components/Mobile";
import MobileHeader from "./components/MobileHeader";
import MobileSideBar from "./components/MobileSideBar";
import SideBar from "./components/SideBar";
import { About, Classes, Contact, Projects, Skills, VLCProject } from "./pages";

export const MainPageWrapper = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: row;
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

    const ContentWrapper = styled.div`
        min-height: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-left: ${isMobile ? 0 : 200}px;
    `;

    return (
        <MainPageWrapper className="scroll-no-bar">
            {isMobile ? (
                <MobileSideBar
                    isOpen={isSidebarOpen}
                    setIsOpen={setIsSidebarOpen}
                    handler={setTitle}
                />
            ) : (
                <SideBar />
            )}
            <Mobile setIsMobile={setIsMobile} />
            <ContentWrapper>
                {isMobile ? (
                    <MobileHeader title={title} setTitle={setTitle} />
                ) : (
                    <HeaderBar title={title} setTitle={setTitle} />
                )}
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route
                        path="/projects/vlc-project"
                        element={<VLCProject />}
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/*"
                        loader={() => {
                            throw new Response("Not Found", { status: 404 });
                        }}
                    />
                </Routes>
            </ContentWrapper>
        </MainPageWrapper>
    );
}

export default MainPage;
