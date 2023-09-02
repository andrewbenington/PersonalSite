import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Route, Routes } from "react-router-dom";
import Pages from "../consts/Pages";
import { FlexColWide } from "../style";
import { MobileTitle } from "./style";

interface MobileHeaderProps {
    toggleSidebar: () => void;
}

function MobileHeader(props: MobileHeaderProps) {
    return (
        <FlexColWide>
            <AppBar color="primary">
                <Toolbar>
                    <IconButton
                        size="medium"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={props.toggleSidebar}
                    >
                        <Menu />
                    </IconButton>
                    <Routes>
                        {Pages.map((page) => (
                            <Route
                                path={page.path}
                                element={
                                    <MobileTitle>
                                        {page.hideMobileName
                                            ? ""
                                            : page.name + " - "}
                                        Andrew Benington
                                    </MobileTitle>
                                }
                            />
                        ))}
                    </Routes>
                </Toolbar>
            </AppBar>
        </FlexColWide>
    );
}

export default MobileHeader;
