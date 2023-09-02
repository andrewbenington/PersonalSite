import { MuiThemeProvider, createTheme } from "@material-ui/core";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HeaderBar from "./components/HeaderBar";
import Mobile from "./components/Mobile";
import MobileHeader from "./components/MobileHeader";
import MobileSideBar from "./components/MobileSideBar";
import SideBar from "./components/SideBar";
import Pages from "./consts/Pages";

export const MainPageWrapper = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
`;

const theme = createTheme({
    palette: {
        primary: { main: "#222e66" },
    },
});

function MainPage() {
    const [isMobile, setIsMobile] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const ContentWrapper = styled.div`
        min-height: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-left: ${isMobile ? 0 : 200}px;
    `;

    return (
        <MuiThemeProvider theme={theme}>
            <MainPageWrapper className="scroll-no-bar">
                {isMobile ? (
                    <MobileSideBar
                        isOpen={isSidebarOpen}
                        setIsOpen={setIsSidebarOpen}
                    />
                ) : (
                    <SideBar />
                )}
                <Mobile setIsMobile={setIsMobile} />
                <ContentWrapper>
                    {isMobile ? (
                        <MobileHeader toggleSidebar={toggleSidebar} />
                    ) : (
                        <HeaderBar />
                    )}
                    <Routes>
                        {Pages.map((page) => (
                            <Route path={page.path} element={page.component} />
                        ))}
                        <Route
                            path="/*"
                            loader={() => {
                                throw new Response("Not Found", {
                                    status: 404,
                                });
                            }}
                        />
                    </Routes>
                </ContentWrapper>
            </MainPageWrapper>
        </MuiThemeProvider>
    );
}

export default MainPage;
