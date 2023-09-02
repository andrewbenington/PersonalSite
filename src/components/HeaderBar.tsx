import { Route, Routes } from "react-router-dom";
import { Subtitle } from "../consts/HeaderStrings";
import Pages from "../consts/Pages";
import { FlexColStretch, FlexColWide, FlexRow, FlexRowRepel } from "../style";
import Navigation from "./Navigation";
import { Banner, Info, Name, PageTitle } from "./style";

function HeaderBar() {
    return (
        <FlexRow>
            <FlexColWide>
                <Banner>
                    <FlexRowRepel>
                        <FlexColStretch>
                            <Name>Andrew Benington</Name>
                            <br></br>
                            <Info>
                                <p>{Subtitle}</p>
                            </Info>
                        </FlexColStretch>

                        <Routes>
                            {Pages.map((page) => (
                                <Route
                                    path={page.path}
                                    element={<PageTitle>{page.name}</PageTitle>}
                                />
                            ))}
                        </Routes>
                    </FlexRowRepel>
                    <Navigation />
                </Banner>
            </FlexColWide>
        </FlexRow>
    );
}

export default HeaderBar;
